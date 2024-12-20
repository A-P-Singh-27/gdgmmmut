import React from 'react'
import gdgLogo from './../assets/GdgLogo.svg';
// import signupphoto from './../assets/signupphoto.svg';
import { Link } from 'react-router-dom';
import { Login } from '@/utils/login';


function Signup() {
    return (
        <section className="bg-white" >
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src={"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Copy%2520of%2520DF24-Key-Art-Vertical-Editable_gVvdCR7.jpg"}
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />

                    <div className="hidden lg:relative lg:block lg:p-12">
                        <h2 className="mt-6 text-3xl relative top-5 font-bold text-blue-600 sm:text-3xl md:text-4xl">
                            Welcome to
                            <span className='text-[#DB4437] text-xl'>&nbsp;G</span>
                            <span className='text-[#0F9D58] text-xl'>D</span>
                            <span className='text-[#F4B400] text-xl'>G</span>
                            <span className=' text-xl'>-MMMUT</span>
                        </h2>

                        <p className="mt-4 leading-relaxed text-[#646362]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                            quibusdam aperiam voluptatum.
                        </p>
                    </div>
                </section>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block lg:hidden">
                            <Link
                                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                                to={"/"}
                            >
                                <img src={gdgLogo} alt="" className='rounded-full h-[6rem] w-[8rem]' />
                            </Link>

                            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                Welcome to
                                <span className='group '>
                                    <span className='text-[#DB4437] text-2xl group-hover:text-4xl transition-all duration-100'>&nbsp;G</span>
                                    <span className='text-[#0F9D58] text-2xl group-hover:text-3xl transition-all duration-100'>D</span>
                                    <span className='text-[#F4B400] text-2xl group-hover:text-2xl transition-all duration-100'>G</span>
                                    <span className='text-[#4285F4] text-2xl group-hover:text-3xl transition-all duration-100'>-MMMUT</span>
                                </span>
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                                quibusdam aperiam voluptatum.
                            </p>
                        </div>
                        <div>
                            <img src={gdgLogo} className='justify-self-center' alt="" />
                            <div className="block justify-self-center absolute left-[20rem] bottom-[15rem] text-teal-600 lg:hidden ">
                                <span className='text-[#DB4437] text-xl'>G</span>
                                <span className='text-[#0F9D58] text-xl'>D</span>
                                <span className='text-[#F4B400] text-xl'>G</span>
                                <span className='text-[#4285F4] text-xl'>-MMMUT</span>
                            </div>
                        </div>

                        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    id="FirstName"
                                    name="first_name"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    id="LastName"
                                    name="last_name"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                                    Password Confirmation
                                </label>

                                <input
                                    type="password"
                                    id="PasswordConfirmation"
                                    name="password_confirmation"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="MarketingAccept" className="flex gap-4">
                                    <input
                                        type="checkbox"
                                        id="MarketingAccept"
                                        name="marketing_accept"
                                        className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                                    />

                                    <span className="text-sm text-gray-700">
                                        I want to receive emails about events, product updates and company announcements.
                                    </span>
                                </label>
                            </div>

                            <div className="col-span-6">
                                <p className="text-sm text-gray-500">
                                    By creating an account, you agree to our
                                    <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                                    and
                                    <a href="#" className="text-gray-700 underline">privacy policy</a>.
                                </p>
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <Link to={'/'}>
                                <button
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                >
                                    Create an account
                                </button></Link>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Already have an account?&nbsp;
                                    <Login/>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Signup