import React from 'react'
import Logo from "../../Assets/Img/Logo.svg"
import GoogleLogo from "../../Assets/Img/GoogleLogo..svg"
import { Link } from 'react-router-dom'

const Left = () => {
  return (
    <div className='px-[20px] pt-[20px] '>
      <div className='flex  items-center'>
        <div className='w-[48px]'>
          <img className='w-full' src={Logo} alt="" />
        </div>
        <p className='pl-[10px] text-[26px]'>Lead2b</p>
      </div>
      <div className='flex flex-col mx-auto py-[40px] justify-center items-center bg-white w-[520px]'>
        <div className='flex flex-col justify-center items-center w-[300px] text-center'>
          <p className='text-[40px] text-[#000000] pb-[10px]'>Log <span className='text-[#031225]'>in</span></p>
          <span className='text-[#031225] text-[16px] '>Enter your credentials to securely log into your account.</span>
        </div>

        <div>

          <div className='pt-[30px] flex flex-col'>
            <label className='text-[#031225] pb-[10px]' htmlFor="">Email</label>
            <input
              type="email"
              className="w-[432px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none" placeholder='name@example.com'
            />
          </div>
          <div className='pt-[30px] flex flex-col'>
            <label className='text-[#031225] pb-[10px]' htmlFor="">Password</label>
            <input
              type="password"
              className="w-[432px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none" placeholder='Enter your password'
            />
          </div>

          <div className='pt-[10px]'>
            <Link to="/Forget-Password" className=' text-[#1971F6] border-b border-[#1971F6]'>Forgot your password?</Link>
          </div>

          <div className='pt-[20px]'>
            <button
              className="w-[432px] h-[44px] px-4 py-2 gap-2 rounded bg-[#1971F6] text-white border "
            >
              Log in
            </button>
          </div>
        </div>

        <div className='pt-[30px]'>
          <div className='mb-[20px] w-[432px] flex relative items-center'>
            <div className='flex-grow border border-[#D2D2D5]'></div>
            <span className='mx-2'>Or</span>
            <div className='flex-grow border border-[#D2D2D5]'></div>
          </div>
          <button class="flex  items-center justify-center w-[432px] h-[44px] bg-white border border-[#D2D2D5] rounded-lg px-4 py-2 hover:bg-gray-100 transition duration-200">
            <img src={GoogleLogo} alt="Google Logo" class="h-5 mr-2" />
            <span class="text-gray-700">Continue with Google</span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Left
