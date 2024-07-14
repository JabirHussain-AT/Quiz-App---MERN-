import React from 'react'
import { NavLink , Outlet } from 'react-router-dom'
import Logo  from '../../assets/Logo.png'

const Navbar : React.FC = () => {
  return (
    <div className="w-full">
         <ul className='flex justify-between gap-5 w-full bg-white'>
            <div className='flex items-center px-2'>
                <img src={ Logo } alt="Logo" className='w-32' />
            </div>
            <div className='flex'>
            <NavLink to={"/home"}
             className={({ isActive }) => {
                return `lg:py-2 px-5 text-white rounded-md hover:bg-violet-800 hover:text-white border-b-2 flex gap-2 items-center m-2 ${
                  isActive ? `text-white bg-violet-500` : ""
                }`}}
                >
             Login
            </NavLink>
            {/*  */}
            <NavLink to={"/user/sign-up"}
             className={({ isActive }) => {
                return `lg:py-3 px-5 -white text-white bg-black    rounded-md hover:bg-gray-700 hover:text-white border-b-2 flex gap-2 items-center m-2 ${
                  isActive ? `text-white bg-black border-white` : ""
                }`}}
                >
             Get Started 
            </NavLink>
            </div>
         </ul>
         <div className={`w-full  bg-gray-100}`}>
          <Outlet />
        </div>
    </div>
  )
}

export default Navbar