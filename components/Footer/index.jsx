import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
   <footer>
    <div>
        <p className='text-center pt-[35px] pb-[15px]'>
         © 2023 FileConverterOnline. All Rights Reserved.</p>
    </div>
    <div className='flex flex-col items-center lg:items-center lg:flex-row  justify-center gap-[5px]'>
        <Link href="#">ABOUT US</Link> <span className='hidden lg:block'>| </span>
         <Link href="#">PRIVACY POLICY</Link> <span className='hidden lg:block'>| </span>
        <Link href="#">COPYRIGHT POLICY</Link> <span className='hidden lg:block'>| </span>
        <Link href="#">TERMS of USE</Link> <span className='hidden lg:block'>| </span>
        <Link href="#">UNINSTALL</Link> <span className='hidden lg:block'>| </span>
        <Link href="#">CONTACT US</Link>
    </div>

   </footer>
  )
}
