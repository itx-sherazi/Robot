import { MoveRightIcon } from 'lucide-react'
import React from 'react'
import icon from '../images/images.jpeg'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const { openSignIn } = useClerk(); // ✅ Correct function name
  const {isSignedIn , user} = useUser(); //
  
  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
      <Link to={'/'}>
        <div className='flex items-center'>
          <img className='w-10 h-10' src={icon} alt='' />
          <p className='font-bold ml-3'>bg.removal</p>
        </div>
      </Link>
      {
        isSignedIn ? 
        <div>
          <UserButton/>
          </div>
          :
    
      <button onClick={() => openSignIn()} className='flex items-center bg-black text-white py-2 px-4 rounded-3xl'>
      Get Started
      <MoveRightIcon className='text-2xl text-white ml-2' />
    </button>
      }

    
    </div>
  );
};

export default Navbar;
