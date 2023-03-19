import stew from '../../Assets/img/stew.jpg';
import noodles from '../../Assets/img/noodles.jpg';
import curry from '../../Assets/img/curry.jpg';


const NavComponent = () => {
    return (
        <div className='text-grey-600 grid md:grid-cols-3'>
            <div className='md:col-span-1 md:flex md:justify-end'>
                <nav className='text-right'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold uppercase p-4 border-b border-grey-100'>
                            <a className='hover:text-green-500 font-nunito md:text-red-500 sm:text-yellow-500 xm:text-green-500' href="/">Foodie</a>
                        </h1>
                        <div className='px-4 cursor-pointer md:hidden'>
                            <svg className='w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </div>
                    </div>
                    <ul className='text-sm mt-6 hidden md:block'>
                        <li className='text-gray-700 font-bold py-1 hover:text-primary'>
                            <a href="#home" className='px-4 flex justify-end space-x-2'>
                                <span>Home</span>
                                <svg className='w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>

                            </a>
                        </li>
                        <li className='text-gray-700 font-bold py-1 hover:text-primary'>
                            <a href="#about" className='px-4 flex justify-end space-x-2'>
                                <span>About</span>
                                <svg className='w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                </svg>

                            </a>
                        </li>
                        <li className='text-gray-700 font-bold py-1 hover:text-primary'>
                            <a href="#app" className='px-4 flex justify-end space-x-2'>
                                <span>Contact</span>
                                <svg className='w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>

                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <main className='px-16 py-6 bg-grey-100 md:col-span-2'>
                <div className='flex justify-center md:justify-end'>
                    <a className='text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500' href="#app">Log in</a>
                    <a className='text-primary ml-2 btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500' href="#app">Sign up</a>
                </div>

                <header >
                    <h2 className='text-gray-700 font-semibold text-6xl'>Recipes</h2>
                    <h3 className='font-semibold text-2xl'>For Foodies</h3>
                </header>

                <div>
                    <h4 className='font-bold mt-12 pb-2 border-b border-grey-200'>Latest Recipes</h4>

                    <div className='mt-8 grid lg:grid-cols-3 md:grid-cols-2 gap-10'>

                        <div className='card hover:shadow-lg'>
                            <img src={stew} className='w-full h-32 sm:h-48 object-cover' alt="stew" />
                            <div className='m-4'>
                                <span className='font-bold'>5 Bean Chili Stew</span>
                                <span className='block text-sm text-gray-500'>Recipe by Mario</span>
                            </div>
                            <div className='badge flex flex-row'>
                                <svg className='w-5 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className='mt-1 ml-1'>25 mins</span>
                            </div>
                        </div>

                        <div className='card hover:shadow-lg'>
                            <img src={noodles} className='w-full h-32 sm:h-48 object-cover' alt="stew" />
                            <div className='m-4'>
                                <span className='font-bold'>5 Bean Chili Stew</span>
                                <span className='block text-sm text-gray-500'>Recipe by Mario</span>
                            </div>
                            <div className='badge flex flex-row'>
                                <svg className='w-5 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className='mt-1 ml-1'>25 mins</span>
                            </div>
                        </div>

                        <div className='card hover:shadow-lg'>
                            <img src={curry} className='w-full h-32 sm:h-48 object-cover' alt="stew" />
                            <div className='m-4'>
                                <span className='font-bold'>5 Bean Chili Stew</span>
                                <span className='block text-sm text-gray-500'>Recipe by Mario</span>
                            </div>
                            <div className='badge flex flex-row'>
                                <svg className='w-5 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className='mt-1 ml-1'>25 mins</span>
                            </div>
                        </div>

                    </div>

                    <h4 className='font-bold mt-12 pb-2 border-b border-grey-200'>Most Popular</h4>

                    <div className='mt-8'>
                        {/* cards */}
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='bg-secondary-100 text-secondary-200 btn hover:shadow-inner cursor-pointer transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300'>Load more</div>
                </div>
            </main>
        </div>
    );
}

export default NavComponent;