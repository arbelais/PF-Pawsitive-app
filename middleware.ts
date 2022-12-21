import { NextFetchEvent, NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { initAuth0 } from '@auth0/nextjs-auth0/edge'
import { getAuth0UserById } from 'utils/dbFetching'
import 'regenerator-runtime'

const auth0 = initAuth0({
    secret: process.env.AUTH0_SECRET,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    baseURL: process.env.AUTH0_BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET
})
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest, event: NextFetchEvent) {
    const response = NextResponse.next()
    const user = await auth0.getSession(request, response)
    const BASE_URL = process.env.AUTH0_BASE_URL

    let userId: string = ''
    let userFirstName: string = ''
    let userLastName: string = ''
    let userEmail: string = ''
    let userEmailVerified: boolean = false
    let userPhoto: string = ''

    if (user) {
        const auth0User = await getAuth0UserById(user.user.sub)

        if (!auth0User) return

        userId = user.user.sub
        userFirstName = user.user.given_name
        userLastName = user.user.family_name
        userEmail = auth0User.email
        userEmailVerified = auth0User.email_verified
        userPhoto = user.user.picture
    }

    if (user && userId && userEmail) {
        event.waitUntil(
            fetch(`${BASE_URL}/api/user/`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: userId,
                    firstName: userFirstName || '',
                    lastName: userLastName || '',
                    email: userEmail,
                    email_verified: userEmailVerified,
                    photo: userPhoto
                })
            })
        )

        event.waitUntil(
            fetch(`${BASE_URL}/api/bookmarks/${userId}`, {
                method: 'POST'
            })
        )
    }

    NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|favicon.ico).*)'
    ]
}
