import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [toggler, setToggler] = useState(false)
    const handleToggle = () => {
        setToggler(!toggler)
        localStorage.setItem("themeMode", !toggler)
    }
    console.log(toggler, "toggler")

    useEffect(() => {
        let theme = localStorage.getItem("themeMode")
        if (theme) {
            setToggler(theme)

        }
    }, [])
    return (
        <>
            <nav className={`bg-inherit ${toggler ? 'bg-dark' : 'bg-light'} ${toggler ? 'text-white' : 'text-black'}`}>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-between items-center ">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className={`${toggler ? ' hover:bg-gray-100' : ' hover:bg-gray-700'}relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"`}>
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a href="/" className={`rounded-md px-3 py-2 text-sm font-medium ${toggler ? 'text-white' : 'text-black-300'} ${toggler ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} hover:text-white`}>Home</a>
                                    <a href="/about" className={`rounded-md px-3 py-2 text-sm font-medium ${toggler ? 'text-white' : 'text-black-300'} ${toggler ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} hover:text-white`}>About</a>
                                    <a href="/portfolio" className={`rounded-md px-3 py-2 text-sm font-medium ${toggler ? 'text-white' : 'text-black-300'} ${toggler ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} hover:text-white`}>Portfolio</a>
                                    <a href="/contact" className={`rounded-md px-3 py-2 text-sm font-medium ${toggler ? 'text-white' : 'text-black-300'} ${toggler ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} hover:text-white`}>Contact</a>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" onClick={handleToggle} checked={toggler} role="switch" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>

                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a href="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Portfolio</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar