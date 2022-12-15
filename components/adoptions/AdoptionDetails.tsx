import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { redirectionAlert } from 'utils/alerts'
import useLocalStorage from 'use-local-storage'
import { useUser } from '@auth0/nextjs-auth0/client'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import styles from 'styles/AdoptionDetails.module.css'
import Image from 'next/image'
import { getPetById, getUserById } from 'utils/dbFetching'
import { ApplyAdAp } from 'app/types'
import { useQuery } from 'react-query'
import { AiOutlineClose, AiOutlineArrowRight } from 'react-icons/ai'
import { useRouter } from 'next/router'

type Prop = {
    id: string
}

const AdoptionDetails = ({ id }: Prop) => {
    const { user, error: errorU, isLoading: isLoadingU } = useUser()
    const router = useRouter()
    const [ids, setIds] = useLocalStorage<ApplyAdAp>('ids', {
        petId: '',
        userId: ''
    })
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)

    const { data: dbUser, isLoading: uIsLoading } = useQuery(['user', id], () =>
        getUserById(id)
    )

    const alertAdoptionForm = async () => {
        if (!user) {
            handleClose()
            redirectionAlert({
                icon: 'info',
                title: '<strong>Inicio de sesion requerido</strong>',
                html:
                    'Para solicitar una adopción y poder disfrutar de todas nuestras funcionalidades' +
                    ' te invitamos a iniciar sesion o crear una cuenta.',
                confirmButtonText: 'Iniciar sesion',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                link: '/api/auth/login'
            })
        }
        if (!uIsLoading && dbUser) {
            if (dbUser.email_verified === false) {
                handleClose()
                redirectionAlert({
                    icon: 'info',
                    title: '<strong>Se requiere que verifiques tu email antes de aplicar a una adopción!</strong>',
                    html:
                        'Para solicitar una adopción y poder disfrutar de todas nuestras funcionalidades' +
                        ' te invitamos a verificar tu email por motivos de seguridad.',
                    confirmButtonText: 'Ir a mi perfil',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                    link: '/dashboard/myProfile'
                })
                return
            }
        }
        if (user !== undefined) {
            router.push('/adoptions/apply')
        }
    }

    const {
        data: pet,
        error,
        isLoading,
        isSuccess
    } = useQuery(['pet', id], () => getPetById(id))

    const handleOpen = () => {
        const idToString: string = id.toString()
        const data = {
            petId: idToString,
            userId: user?.sub
        }
        setIds(data)
        setOpen(true)
        console.log(ids)
    }

    return (
        <>
            <button
                onClick={() => {
                    handleOpen()
                }}>
                Adoptame!
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}>
                <Fade in={open}>
                    <Box className={styles.container}>
                        <div className="w-full h-full">
                            {isLoading ? (
                                <h1>Loading...</h1>
                            ) : (
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
                                    <div className="flex flex-row justify-end px-5 pt-2 text-lg">
                                        <button onClick={handleClose}>
                                            <AiOutlineClose />
                                        </button>
                                    </div>

                                    <div className="px-5 mt-2 w-full flex flex-row justify-center items-center">
                                        <div>
                                            <Image
                                                src={pet.photo}
                                                alt={`Adopt me: ${pet.name}`}
                                                width={150}
                                                height={150}
                                                className="rounded-full"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <h5 className="capitalize mb-2 text-2xl font-Rubik font-bold tracking-tight text-gray-900">
                                            {pet.name}
                                        </h5>
                                        <p className="mb-3 font-Rubik text-gray-700">
                                            Mi nombre es{' '}
                                            <span className="capitalize font-bold">
                                                {pet.name}
                                            </span>
                                            . Soy un cariñoso y amoroso{' '}
                                            {pet.breed}, tengo {pet.age} y me
                                            encuentro buscando mi hogar soñado,
                                            una familia que me dé todo el amor
                                            del mundo y cuide de mi... Si deseas
                                            adoptarme, por favor presiona el
                                            botón &quot;¡Adóptame!&quot; y el{' '}
                                            <span className="font-bold">
                                                Pawsitive Team{' '}
                                            </span>
                                            se contactará contigo.
                                        </p>
                                        <div className="flex flex-row justify-center items-center">
                                            {/* <Link href="/adoptions/apply"> */}
                                            <div className="cursor-pointer w-1/2 font-Rubik text-lg rounded-lg px-1 py-1 border-2 border-pwpurple-600 bg-pwpurple-600 text-white hover:bg-white hover:text-pwgreen-600 hover:border-pwgreen-600 duration-300 flex flex-row justify-center items-center">
                                                <button
                                                    onClick={alertAdoptionForm}>
                                                    ¡Adóptame!
                                                </button>
                                                <div>
                                                    <AiOutlineArrowRight className="text-lg pl-1" />
                                                </div>
                                            </div>
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}
export default AdoptionDetails
