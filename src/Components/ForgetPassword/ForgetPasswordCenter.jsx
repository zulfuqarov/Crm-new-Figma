import React from 'react'
import Logo from "../../Assets/Img/Logo.svg"
const ForgetPasswordCenter = () => {
    return (
        <div>
            <div className='px-[20px] pt-[20px] '>
                <div className='flex  items-center'>
                    <div className='w-[48px]'>
                        <img className='w-full' src={Logo} alt="" />
                    </div>
                    <p className='pl-[10px] text-[26px]'>Lead2b</p>
                </div>
                
                <div className='flex flex-col mx-auto py-[40px] justify-center items-center bg-white w-[520px]'>
                    <div className='flex flex-col justify-center items-center w-[408px] text-center'>
                        <p className='text-[40px] text-[#000000] pb-[10px]'>Forgot your <span className='text-[#031225]'>password?</span></p>
                        <span className='text-[#031225] text-[16px] inline-block w-[300px]'>Enter your registered email address to receive a password reset link.</span>
                    </div>

                    <div>
                        <div className='pt-[30px] flex flex-col'>
                            <label className='text-[#031225] pb-[10px]' htmlFor="">Email</label>
                            <input
                                type="email"
                                className="w-[432px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none" placeholder='name@example.com'
                            />
                        </div>

                        <div className='pt-[20px]'>
                            <button
                                className="w-[432px] h-[44px] px-4 py-2 gap-2 rounded bg-[#1971F6] text-white border "
                            >
                                Reset password
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ForgetPasswordCenter
