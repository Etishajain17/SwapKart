import React from 'react'
import printImage from './assets/print.svg'
import { RiShoppingBagLine, RiArrowDropDownLine } from 'react-icons/ri';

function Nav() {
    return (
        <div className='box-border border-b py-3 border-bordercolor select-none text-xs '>
            <div className='box-border px-5 mx-auto min-h-70 flex items-center max-w-6xl justify-between '>
                <div>
                    <img src={printImage} />
                </div>
                <div className='flex items-center '>
                    <div className='hidden middle:block mr-3'>
                        <ul className='flex items-center uppercase'>
                            <li>
                                <a href='#' className='px-5 hover:text-primary active:text-primary'>home</a>
                            </li>
                            <li>
                                <a href='#' className='px-5 hover:text-primary active:text-primary'>all products</a>
                            </li>
                            <li>
                                <a href='#' className='px-5 hover:text-primary active:text-primary focus:text-primary'>about</a>
                            </li>
                            <li>
                                <a href='#' className='px-5 hover:text-primary active:text-primary'>contact</a>
                            </li>
                            <li className=' group relative px-5 '>
                                <button className="flex  rounded uppercase  hover:text-primary items-center">
                                    <span>Account</span>
                                    <RiArrowDropDownLine className="text-2xl" />
                                </button>
                                <nav tabindex="0" className=" border border-bordercolor bg-white invisible  rounded w-56 absolute left-0 top-full transition-all opacity-0 group-hover:visible  group-hover:opacity-100 mt-5 shadow shadow-bordercolor  group-hover:translate-y-1 ">
                                    <ul className="py-1">
                                        <li className='mb-1'>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 uppercase hover:text-primary">
                                                my account
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 uppercase hover:text-primary">
                                                cart
                                            </a>
                                        </li>

                                    </ul>
                                </nav>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button>
                            <RiShoppingBagLine className='text-primary text-4xl hover:fill-primary' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav;