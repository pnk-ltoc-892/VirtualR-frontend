import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {navItems} from '../constants/index.jsx'

import { Menu, X } from 'lucide-react'

function Navbar() {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    function toggleMobileDrawer(){
        setMobileDrawerOpen( !mobileDrawerOpen );
    }
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">

                    {/* Logo Section */}
                    <div className="flex items-center flex-shrink-0">
                        <img className='h-10 w-10 mr-2' src={logo} alt="" />
                        <span className='text-xl tracking-tight' >VirtualR</span>
                    </div>

                    {/* Links Section */}
                    {/* ul -> flex => items row */}
                    <ul className='hidden lg:flex ml-14 space-x-12'> 
                        {navItems.map( (item, index) => (
                            <li key={index} className='hover:text-orange-500'>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ) )}
                    </ul>

                    {/* Account Section */}
                    <div className='hidden lg:flex justify-center items-center space-x-12' >
                        <a href="#" className='py-2 px-3 border rounded-md' >Sign In</a>
                        <a href="#" className='py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800' >Create An Account</a>
                    </div>
                    
                    {/* Drawer Section */}
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleMobileDrawer} className='p-1 rounded-full hover:bg-orange-600' >
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Drawer - Div - below the logo div */}
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul> 
                            {navItems.map( (item, index) => (
                                <li key={index} className='py-4 hover:text-orange-500'>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ) )}
                        </ul>

                        {/* Account Button */}
                        <div className='flex  space-x-6' >
                            <a href="#" className='py-1 px-2 border rounded-md'>Sign In</a>
                            <a href="#" className='py-1 px-2 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800' >Create An Account</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar