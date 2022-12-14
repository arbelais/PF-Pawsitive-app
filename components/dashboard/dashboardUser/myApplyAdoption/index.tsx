import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
import Image from 'next/image'
import { useMutation, useQuery } from 'react-query'
import {
    getUserById,
    putAdoption,
    createPost as createAdoption,
    getApplyById,
    deleteApply
} from 'utils/dbFetching'
import { alerts } from 'utils/alerts'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Link from 'next/link'

type Adoption = {
    id: string
    name: string
    size: string
    age: string
    breed: string
    photo: string
    gender: string
    active: boolean
    createdAt: string
    userId: string
}

const MyApplyAdoption = () => {
    const { user, error: err, isLoading: load } = useUser()
    const id = user?.sub as string
    //QUERY DATA GET AND PUT

    const {
        data: myTransactions,
        error,
        isLoading,
        isSuccess
    } = useQuery(['apply', id], () => getApplyById(id))

    const { mutate } = useMutation(
        (id: any) => deleteApply(id, myTransactions),
        {
            onSuccess: () => {
                alerts({
                    icon: 'success',
                    title: '<strong>Nice</strong>',
                    text: 'Adopcion eliminada correctamente',
                    toast: true
                })
            },
            onError: () => {
                alerts({
                    icon: 'error',
                    title: '<strong>Error</strong>',
                    text: 'No se ha podido eliminar la adopción',
                    toast: true
                })
            }
        }
    )

    function handleSubmit() {
        mutate(myTransactions.id)
    }

    return (
        <>
            {!myTransactions ? (
                <div className="flex flex-col justify-center items-center gap-2 h-[80vh]">
                    <h1 className="title text-2xl uppercase lg:text-4xl">
                        No tenes aplicaciones por el momento
                    </h1>
                    <Link href={'/adoptions'}>
                        <a className="underline text-pwgreen-700 hover:text-pwgreen-800 transition-all">
                            Ir a adopciones
                        </a>
                    </Link>
                </div>
            ) : isLoading ? (
                <div className="flex justify-center items-center gap-3 my-16">
                    <AiOutlineLoading3Quarters className="text-4xl animate-spin text-pwpurple-700" />
                </div>
            ) : (
                <div
                    className="flex justify-between w-full lg:w-3/4 py-8 px-6 items-center m-5 bg-white shadow-2xl rounded-md h-auto "
                    key={id}>
                    <div className="flex gap-3 justify-center items-center w-full">
                        <div className="w-2/4 flex items-center justify-center">
                            <Image
                                src={myTransactions?.adoptionPost.photo}
                                alt="No hay imagen para mostrar"
                                width={256}
                                height={256}
                                objectFit="cover"
                                className="rounded-full static"
                            />
                        </div>
                        <div className="w-2/4 flex flex-col gap-1">
                            <p className="text-pwgreen-800 font-Rubik capitalize">
                                Nombre : {myTransactions.adoptionPost.name}
                            </p>
                            <p className="text-pwgreen-800 font-Rubik">
                                Tamaño:{' '}
                                {myTransactions?.adoptionPost.size === 'SMALL'
                                    ? 'Pequeño'
                                    : myTransactions?.adoptionPost.size ===
                                      'MEDIUM'
                                    ? 'Mediano'
                                    : 'Grande'}{' '}
                            </p>
                            <p className="text-pwgreen-800 font-Rubik">
                                Edad: {myTransactions?.adoptionPost.age}
                            </p>

                            <p className="text-pwgreen-800 font-Rubik capitalize">
                                Raza: {myTransactions?.adoptionPost.breed}
                            </p>
                            {myTransactions?.adoptionPost.gender && (
                                <p className="text-pwgreen-800 font-Rubik capitalize">
                                    Genero: {myTransactions.adoptionPost.gender}
                                </p>
                            )}
                            <p className="text-pwgreen-800 font-Rubik">
                                Creado el :{' '}
                                {myTransactions?.adoptionPost.createdAt.slice(
                                    0,
                                    10
                                )}
                            </p>
                            <p className="text-pwgreen-800 font-Rubik">
                                Datos del adoptante :
                            </p>
                            <p className="text-pwgreen-800 font-Rubik capitalize">
                                Tipo de residencia :{' '}
                                {myTransactions.residence.toLowerCase()}
                            </p>
                            <p className="text-pwgreen-800 font-Rubik">
                                Disponibilidad de jardin :{' '}
                                {myTransactions.garden ? 'Si' : 'No'}
                            </p>
                            <p className="text-pwgreen-800 font-Rubik">
                                Trabaja actualmente :{' '}
                                {myTransactions.employee ? 'Si' : 'No'}
                            </p>
                            <button className="self-end" onClick={handleSubmit}>
                                <a className="ease-in px-2 rounded-lg duration-300 hover:py-2 hover:bg-pwgreen-800 hover:text-white text-pwgreen-800 font-Rubik font-semibold hover:rounded-lg">
                                    Cancelar Solicitud
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MyApplyAdoption
