import React, { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Navbar = () => {
    let Links =[
      {name:"Gallery 1",link:"gallery1"},
      {name:"Gallery 2",link:"gallery2"},
      {name:"Gallery 3",link:"gallery3"},
    //   {name:"BLOG'S",link:"/"},
    //   {name:"CONTACT",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        {/* <ion-icon name="logo-ionic"></ion-icon> */}
        </span>
       <Link to={"/"}>Cabinas Love</Link> 
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      {/* <ion-icon name={open ? 'close':'menu'}></ion-icon> */}
        {
            open ?
            <AiOutlineClose fontSize={28} />
            : <HiMenuAlt4 fontSize={28} />
  }
      {/* <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={()=> setToggleMenu(true)} /> */}
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'
            onClick={()=>setOpen(!open)}>
             <Link className='text-gray-800 hover:text-gray-400 duration-500' 
             to={`/${link.link}`}>{link.name}</Link>
            </li>
          ))
        }
        {/* <Button>
          Get Started
        </Button> */}
      </ul>
      </div>
    </div>
  )
}

export default Navbar