import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm]'>
       <div>
        <img className='mb-5 w-32' src={assets.logo} alt=''/>
        <p className='w-full md:w-2/3 text-gray-600'>Forever emerged from a deep passion for innovation and a vision to transform online shopping. Our journey started with a simple idea: to create a platform where customers can effortlessly discover, explore, and purchase a diverse range of products from the comfort of their homes.</p>
       </div>

       <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
       </div>

       <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul  className='flex flex-col gap-1 text-gray-600' >
            <li> +1-234-567-8900</li>
            <li> contact@forever.com</li>
        </ul>
       </div>

    </div>

    <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved</p>
    </div>
      
    </div>
  )
}

export default Footer
