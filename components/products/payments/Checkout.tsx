import { useState } from 'react'
import { ChangeEvent } from 'react'
import Image from 'next/image'
import IsoGreen from 'public/iso-green.svg'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import { alerts } from 'utils/alerts'
import useLocalStorage from 'use-local-storage'
import { Product } from 'app/types'
import { useRouter } from 'next/router'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import axios from 'axios'
import { PaymentIntent } from '@stripe/stripe-js'
import { useUser } from '@auth0/nextjs-auth0/client'

const Checkout = ({
    setOpen,
    clientSecret,
    paymentIntent = null
}: {
    setOpen: (arg0: boolean) => void
    clientSecret: string
    paymentIntent?: PaymentIntent | null
}) => {
    const stripe = useStripe()
    const elements = useElements()
    const router = useRouter()
    const { user, isLoading } = useUser()
    const [loading, setLoading] = useState(false)
    const [cardError, setCardError] = useState<string | undefined>(undefined)
    const [message, setMessage] = useState('')
    const [products, setProducts] = useLocalStorage<Product[]>(
        'cartProducts',
        []
    )
    let userName: string = ''
    if (!isLoading && user && user.name) {
        userName = user.name
    }

    const getTotalPrice = () => {
        return products.reduce(
            (acc, product) => acc + product.amount! * product.displayPrice,
            0
        )
    }

    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()
    let hour = today.getHours()
    let minutes = today.getMinutes()

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!stripe || !elements) return

        setLoading(true)

        const response = await axios.post('/api/product/payment', {
            totalPrice: getTotalPrice(),
            payment_intent_id: paymentIntent?.id
        })

        if (response.status === 500) {
            setCardError('error')
            return
        }

        const { paymentIntent: confirmationIntent, error } =
            await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: 'http://localhost:3000/shoppingCart/thank-you',
                    payment_method_data: {
                        billing_details: {
                            name: userName || ''
                        }
                    }
                },
                redirect: 'if_required'
            })

        if (error) {
            if (
                error.type === 'card_error' ||
                error.type === 'validation_error'
            ) {
                setCardError(error.message)
            }
            setOpen(false)
            setLoading(false)
            alerts({
                icon: 'error',
                title: 'Hubo un error en tu compra',
                text: cardError
            })
            return
        }

        if (!clientSecret) return

        if (!confirmationIntent) return
        switch (confirmationIntent.status) {
            case 'succeeded':
                alerts({
                    icon: 'success',
                    title: 'Gracias por tu compra!',
                    text: 'Tu pago fue completado con éxito. Aguarda un segundo, te estamos redirigiendo...',
                    showConfirmButton: false,
                    timer: 1500
                })

                setTimeout(() => {
                    router.push('/shoppingCart/thank-you')
                }, 1000)
                break
            case 'requires_payment_method':
                alerts({
                    icon: 'error',
                    title: 'Hubo un error con tu pago',
                    text: 'Tu pago tuvo inconvenientes'
                })
                break
            default:
                setMessage('Something went wrong.')
                alerts({
                    icon: 'success',
                    title: 'Something went wrong.',
                    text: message
                })
                break
        }

        setOpen(false)
        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit} className="h-[90vh]">
            <div className="w-full flex h-full flex-col lg:flex-row justify-evenly items-center py-10">
                <div className="w-full h-full flex flex-col justify-center items-center gap-1 lg:w-2/5">
                    <div className="lg:w-1/6">
                        <Image
                            src={IsoGreen}
                            alt="not found"
                            width={'80%'}
                            height={'80%'}
                        />
                    </div>
                    <h1 className="title text-xl lg:text-2xl">
                        Resumen de compra
                    </h1>
                    <div className="flex flex-col h-max font-Rubik bg-white rounded-md gap-2 justify-between lg:w-full py-4 px-4 lg:py-8">
                        <div className="overflow-y-auto">
                            <table className="w-full table-auto">
                                <thead className="text-xs lg:text-sm text-slate-500">
                                    <tr>
                                        <th className="text-start font-medium">
                                            Producto
                                        </th>
                                        <th className="font-medium">
                                            Cantidad
                                        </th>
                                        <th className="font-medium">Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products &&
                                        products.map((product: Product) => {
                                            return (
                                                <tr
                                                    key={product.id}
                                                    className="text-xs lg:text-sm w-min">
                                                    <td className="text-start w-2/3">
                                                        {product.name}
                                                    </td>
                                                    <td>{product.amount}</td>
                                                    <td>
                                                        ${product.displayPrice}
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                </tbody>
                            </table>
                        </div>
                        <div className="h-max flex flex-col gap-2">
                            <span className="text-base font-medium lg:text-xl self-end">
                                Total: ${getTotalPrice()}
                            </span>
                            <span className="text-xs lg:text-sm text-slate-500 self-end">
                                {day}/{month}/{year} - {hour}:{minutes}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-[90%] md:w-4/5 lg:w-2/5 flex flex-col lg:justify-center">
                    <PaymentElement id="payment-element" />
                    <button
                        disabled={loading || !stripe || !elements}
                        className="dashboardButton text-sm lg:text-base self-end bg-pwgreen-700 text-pwgreen-50 uppercase">
                        {loading ? (
                            <AiOutlineLoading3Quarters className="text-xl animate-spin text-pwgreen-50" />
                        ) : (
                            <>Pagar</>
                        )}
                    </button>
                </div>
            </div>
        </form>
    )
}
export default Checkout
