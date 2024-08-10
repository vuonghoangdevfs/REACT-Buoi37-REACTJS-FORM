import React from 'react'
import {useFormik} from 'formik'; //get value
import * as yup from 'yup'; //validation

const RegistrationForm = () => {
    const frmRegister = useFormik({
        initialValues: {
            userName: '',
            email: '',
            gender: true,
            country: 'US',
            password:'',
        },
        validationSchema: yup.object().shape({
            userName: yup.string().required('User name is a required'),
            email: yup.string().required('Email is a required').email('Email is invalid !'),
            password:yup.string().required('Password is required').min(8,'The password must be at least 8 characters long.'),
        }),
        onSubmit:(values) => {
            console.log(values)
        }
    })
    return (
        <div className='flex items-center min-h-screen'>
            <div className='w-full mx-auto card max-w-lg rounded overflow-hidden shadow-lg bg-white'>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">User Registration</h2>
                    </div>

                    <div className="mt-10 md:mx-auto sm:w-full md:max-w-md">
                        <form className="space-y-4" onSubmit={frmRegister.handleSubmit}>
                        <div>
                            <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                            <div className="mt-2">
                                <input id="name" name="userName" type="name" autoComplete="name" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={frmRegister.handleChange}/>
                                {frmRegister.errors.userName && <p className='text-red-500 my-1'>{frmRegister.errors.userName}</p>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur}/>
                                {frmRegister.errors.email && <p className='text-red-500 my-1'>{frmRegister.errors.email}</p>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor='gender' className='mb-1 block text-sm font-medium leading-6 text-gray-900'>Gender</label>
                            <div className='flex gap-2'>
                                <div className="flex items-center mb-4">
                                    <label htmlFor='male'>Male</label>
                                    <input checked className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300' id="male" name='gender' type='radio' placeholder='' value={true} onChange={frmRegister.handleChange}/>
                                </div>
                                <div className="flex items-center mb-4">
                                    <label htmlFor='female' className='ms-2'>Female</label>
                                    <input className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300' id="female" name='gender' type='radio' placeholder='' value={false}  onChange={frmRegister.handleChange}/>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Country</label>
                            <select onChange={frmRegister.handleChange}  id="countries" name="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option defaultValue={'US'} value={'US'}>United States</option>
                                <option value={'CA'}>Canada</option>
                                <option value={'UK'}>UK</option>
                                <option value={'AU'}>Australia</option>
                            </select>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={frmRegister.handleChange}/>
                                {frmRegister.errors.password && <p className='text-red-500 my-1'>{frmRegister.errors.password}</p>}
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm