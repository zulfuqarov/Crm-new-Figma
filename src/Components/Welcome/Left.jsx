import React from 'react'
import Logo from "../../Assets/Img/Logo.svg"
import GoogleLogo from "../../Assets/Img/GoogleLogo..svg"
import { Link } from 'react-router-dom'
const Left = () => {
    return (
        <div className='basis-1/2 flex flex-col items-center h-[580px]'>
            <div className='w-[58px]'>
                <img className='w-full' src={Logo} alt="" />
            </div>
            <div className='pt-[20px]'>
                <p className='text-[32px] font-light '>Welcome to <span className='font-medium'>Lead2B!</span></p>
            </div>
            <div className='pt-[20px]'>
                <p className='text-[24px] font-light'>Streamline workflows and gain clear visibility across teams.</p>
            </div>

            <div className='pt-[60px]'>
                <button class="flex items-center justify-center w-[432px] h-[44px] bg-white border border-[#D2D2D5] rounded-lg px-4 py-2 hover:bg-gray-100 transition duration-200">
                    <img src={GoogleLogo} alt="Google Logo" class="h-5 mr-2" />
                    <span class="text-gray-700">Continue with Google</span>
                </button>
                <div className='mt-[20px] w-[432px] flex relative items-center'>
                    <div className='flex-grow border border-[#D2D2D5]'></div>
                    <span className='mx-2'>Or</span>
                    <div className='flex-grow border border-[#D2D2D5]'></div>
                </div>
                <div className='pt-[30px]'>
                    <input
                        type="text"
                        className="w-[432px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none" placeholder='name@example.com'
                    />
                </div>
                <div className='pt-[20px]'>
                    <button
                        className="w-[432px] h-[44px] px-4 py-2 gap-2 rounded bg-[#1971F6] text-white border "
                    >
                        Continue
                    </button>
                </div>
            </div>

            <div className='pt-[30px] flex flex-col justify-center items-center'>
                <p className='text-[#031225] '>Already have an account? <Link to="/Login" className='font-medium text-[#1971F6]'>Log in</Link></p>
                <p className='text-[#686868] font-normal pt-[10px]'>By signing up, you agree to our <span className='text-[#031225]  font-medium'>Terms</span> & <span className='text-[#031225] font-medium'>Privacy</span></p>
            </div>

        </div>
    )
}

export default Left