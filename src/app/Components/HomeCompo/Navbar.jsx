import Link from 'next/link'
import React from 'react'
import { FaBars } from "react-icons/fa";


const Navbar = () => {
  return (
    <>

    <nav className=' absolute top-[37px] flex items-center justify-between w-full '>

        <div className="LOgoPageLink flex items-center ">
        <div className="Logo ml-[150px] mr-[129px]">
            <img src="photos/Logo.png" alt="logo" />
        </div>
        <ul className='flex gap-10 font-iter font-normal text-[16px] text-white '>
            <li>
                <Link href={'#'}> About </Link>
            </li>
            <li>
                <Link href={'#'}> Project </Link>
            </li>
            <li>
                <Link href={'#'}> Blog </Link>
            </li>
            <li>
                <Link href={'#'}> Pricing </Link>
            </li>
            <li>
                <Link href={'#'}> Studio </Link>
            </li>
            <li>
                <Link href={'#'}> Contact </Link>
            </li>
        </ul>
        </div>



        <div className="manuIcon mr-[194px] text-[32px] text-white ">
            <FaBars />
        </div>
    </nav>
      
    </>
  )
}

export default Navbar
