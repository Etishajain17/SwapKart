import React from 'react'
import printImage from './assets/print.svg'
import { RiShoppingBagLine } from 'react-icons/ri';

function Nav() {
    return (
        <div className='box-border border-b py-4 border-bordercolor'>
            <div className='box-border px-5 mx-auto min-h-70 flex items-center max-w-6xl justify-between '>
                <div>
                    <img src={printImage} />
                </div>
                <div className='flex items-center'>
                    <div className='hidden middle:block'>
                        <ul className='flex items-center'>
                            <li>
                                <a href='#' className='px-5 hover:text-primary active:text-primary'>HOME</a>
                            </li>
                            <li>
                                <a href='#' className='px-5 hover:text-primary active:text-primary'>ALL PRODUCTS</a>
                            </li>
                            <li>
                                <a href='#' className='px-5 hover:text-primary active:text-primary focus:text-primary'>ABOUT</a>
                            </li>
                            <li>
                                <a href='#' className='px-5 hover:text-primary active:text-primary'>CONTACT</a>
                            </li>
                            <li>
                                <a href='#' className='px-5 hover:text-primary active:text-primary'>ACCOUNT</a>
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