'use client'
//import React from 'react'
import Link from 'next/link'

export default function Inscripcio() {

    return (
        <>
            <nav id="navbar" class="fixed top-0 z-40 flex w-full flex-row justify-end bg-gray-700 px-4 sm:justify-between">
                <ul class="breadcrumb hidden flex-row items-center py-4 text-lg text-white sm:flex">
                    <Link href="/account/form">Ventas</Link>
                </ul>
            </nav>

            <h1>.</h1>

            <div className="relative bg-gray-900">
                <div className="absolute inset-x-0 bottom-0">
                    <svg
                        viewBox="0 0 224 12"
                        fill="currentColor"
                        className="w-full -mb-1 text-white"
                        preserveAspectRatio="none"
                    >
                        <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                    </svg>
                </div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                        <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                            Permitenos Cominucarnos Contigo
                        </h2>
                        <p className="mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg">
                            Envianos tu numero de celular y en contados minutos uno de nuestros asesores te estará enviando toda la información que necesitas para empezar tu proceso de matricula con nosotros
                        </p>
                        <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                            <input
                                placeholder="Celular"
                                required
                                type="Number"
                                className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline"
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Enviar
                            </button>
                        </form>
                        <p className="max-w-md mb-10 text-xs font-thin tracking-wide text-gray-500 sm:text-sm sm:mx-auto md:mb-16">
                        </p>

                             
                    </div>
                </div>
            </div>

        </>

    );
}
