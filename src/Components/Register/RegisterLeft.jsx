import React, { useState } from 'react'

const RegisterLeft = () => {

    const [registerInput, setregisterInput] = useState({})
    const [error, seterror] = useState({})

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setregisterInput({ ...registerInput, [name]: value })
    }

    const validateInputs = () => {
        const newErrors = {};

        // Name validasyonu: En az 3 karakter
        if (!registerInput.name || registerInput.name.length < 3 || !/^[a-zA-Z\s]+$/.test(registerInput.name)) {
            newErrors.name = 'Name should be at least 3 letters and contain only letters';
        }

        // Company name validasyonu
        if (!registerInput.surname || registerInput.surname.length < 4) {
            newErrors.surname = 'Name should be at least 3 letters and contain only letters';
        }

        // Company name validasyonu
        if (!registerInput.companyName || registerInput.companyName.length < 3) {
            newErrors.companyName = 'Company name should be at least 3 letters';
        }

        // Email validasyonu
        if (!registerInput.email || !/^\S+@\S+\.\S+$/.test(registerInput.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validasyonu 
        if (!registerInput.phone) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        return newErrors;
    };

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
                            name='name'
                            onChange={handleChangeInput}
                            value={registerInput.name || ''}
                            type="text"
                            className={`w-[350px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none ${error.name ? 'border-red-500' : 'border-blue-500'}`} placeholder='Enter your name'
                        />
                        {
                            error.name ? <p className='text-red-500 text-[13px] pt-[7px]'>{error.name}</p> : ''
                        }
                    </div>
                    <div className='pt-[30px] flex flex-col'>
                        <label className='text-[#031225] pb-[10px]' htmlFor="">Company name</label>
                        <input
                            name='companyName'
                            onChange={handleChangeInput}
                            value={registerInput.companyName || ''}
                            type="text"
                            className={`w-[350px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none ${error.companyName ? 'border-red-500' : 'border-blue-500'}`} placeholder='Enter your company name'
                        />
                        {
                            error.companyName ? <p className='text-red-500 text-[13px] pt-[7px]'>{error.companyName}</p> : ''
                        }
                    </div>
                    <div className='pt-[30px] flex flex-col'>
                        <label className='text-[#031225] pb-[10px]' htmlFor="">Email</label>
                        <input
                            name='email'
                            onChange={handleChangeInput}
                            value={registerInput.email || ''}
                            type="email"
                            className={`w-[350px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none ${error.email ? 'border-red-500' : 'border-blue-500'}`} placeholder='Email'
                        />
                        {
                            error.email ? <p className='text-red-500 text-[13px] pt-[7px]'>{error.email}</p> : ''
                        }
                    </div>
                    <div className='pt-[30px] flex flex-col'>
                        <label className='text-[#031225] pb-[10px]' htmlFor="">Phone</label>
                        <input
                            name='phone'
                            onChange={handleChangeInput}
                            value={registerInput.phone || ''}
                            type="number"
                            className={`w-[350px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none ${error.phone ? 'border-red-500' : 'border-blue-500'}`} placeholder='+994'
                        />
                        {
                            error.phone ? <p className='text-red-500 text-[13px] pt-[7px]'>{error.phone}</p> : ''
                        }
                    </div>
                </div>

                <div className='w-[50%]'>
                    <div className='pt-[30px] flex flex-col'>
                        <label className='text-[#031225] pb-[10px]' htmlFor="">Surname</label>
                        <input
                            name="surname"
                            onChange={handleChangeInput}
                            value={registerInput.surname || ''}
                            type="text"
                            className="w-[350px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none" placeholder='Enter your surname'
                        />
                    </div>
                    <div className='pt-[30px] flex flex-col'>
                        <label className='text-[#031225] pb-[10px]' htmlFor="">Company domain</label>
                        <input
                            name='companyDomain'
                            onChange={handleChangeInput}
                            value={registerInput.companyDomain || ''}
                            type="text"
                            className="w-[350px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none" placeholder='Enter your company domain'
                        />
                    </div>
                    <div className='pt-[30px] flex flex-col'>
                        <label className='text-[#031225] pb-[10px]' htmlFor="">Password</label>
                        <input
                            name='password'
                            onChange={handleChangeInput}
                            value={registerInput.password || ''}
                            type="password"
                            className="w-[350px] h-[44px] px-4 py-2 gap-2 rounded border border-[#D2D2D5]    focus:outline-none" placeholder='Enter at least 8 characters'
                        />
                    </div>
                </div>
            </div>

            <div className='pt-[20px]'>
                <button
                    onClick={() => {
                        console.log(registerInput)
                        seterror(validateInputs(registerInput))
                    }}
                    className="w-[220px] h-[44px] px-4 py-2 gap-2 rounded bg-[#1971F6] text-white border "
                >
                    Continue
                </button>
            </div>
        </div>
    )
}

export default RegisterLeft