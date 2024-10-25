import React from 'react'

const RegisterLeft = () => {
    return (
        <div className='basis-1/2'>
            <div >
                <p className='text-[40px] text-[#000000] pb-[10px]'>Create your account</p>
            </div>
            <div className='flex space-x-2 w-full'>
                <div className='w-[50%]'>
                    <div className='pt-[30px] flex flex-col'>
                        <label className='text-[#031225] pb-[10px]' htmlFor="">Name</label>
                        <input
                            type="text"
                            className="w-[350px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none" placeholder='Enter your name'
                        />
                    </div>
                    <div className='pt-[30px] flex flex-col'>
                        <label className='text-[#031225] pb-[10px]' htmlFor="">Company name</label>
                        <input
                            type="text"
                            className="w-[350px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none" placeholder='Enter your company name'
                        />
                    </div>
                    <div className='pt-[30px] flex flex-col'>
                        <label className='text-[#031225] pb-[10px]' htmlFor="">Phone</label>
                        <input
                            type="number"
                            className="w-[350px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none" placeholder='+994'
                        />
                    </div>
                </div>

                <div className='w-[50%]'>
                    <div className='pt-[30px] flex flex-col'>
                        <label className='text-[#031225] pb-[10px]' htmlFor="">Surname</label>
                        <input
                            type="text"
                            className="w-[350px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none" placeholder='Enter your surname'
                        />
                    </div>
                    <div className='pt-[30px] flex flex-col'>
                        <label className='text-[#031225] pb-[10px]' htmlFor="">Company domain</label>
                        <input
                            type="text"
                            className="w-[350px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none" placeholder='Enter your company domain'
                        />
                    </div>
                    <div className='pt-[30px] flex flex-col'>
                        <label className='text-[#031225] pb-[10px]' htmlFor="">Password</label>
                        <input
                            type="password"
                            className="w-[350px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none" placeholder='Enter at least 8 characters'
                        />
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default RegisterLeft