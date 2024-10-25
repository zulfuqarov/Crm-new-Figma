import React from 'react'
import Logo from "../../Assets/Img/Logo.svg"
const ChangePassowrdCenter = () => {
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
                        <p className='text-[40px] text-[#000000] pb-[10px]'>Change  <span className='text-[#031225]'>password?</span></p>
                        <span className='text-[#031225] text-[16px] inline-block w-[300px]'>Don’t forget to store your new password securely.</span>
                    </div>

                    <div>
                        <div className='pt-[30px] flex flex-col'>
                            <label className='text-[#031225] pb-[10px]' htmlFor="">New password</label>
                            <input
                                type="password"
                                className="w-[432px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none" placeholder='Enter at least 8 characters'
                            />
                        </div>
                        <div className='pt-[30px] flex flex-col'>
                            <label className='text-[#031225] pb-[10px]' htmlFor="">Confirm new password</label>
                            <input
                                type="password"
                                className="w-[432px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none" placeholder='Enter new password'
                            />
                        </div>

                        <div className='pt-[20px]'>
                            <button
                                className="w-[432px] h-[44px] px-4 py-2 gap-2 rounded bg-[#1971F6] text-white border "
                            >
                                Change my password
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ChangePassowrdCenter