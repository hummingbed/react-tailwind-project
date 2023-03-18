import stew from '../../Assets/img/stew.jpg'

const NavComponent = () => {
    return (
        <div className='text-grey-600'>
            <div>
                <nav>
                    <div>
                        <h1 className='font-bold uppercase p-4 border-b border-grey-100'>
                            <a className='font-nunito' href="/">Food Ninja</a>
                        </h1>
                    </div>
                    <ul>
                        <li className='text-gray-700 font-bold'>
                            <a href="#home">
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                <span>About</span>
                            </a>
                        </li>
                        <li>
                            <a href="#app">
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <main className='px-16 py-6'>
                <div>
                    <a className='text-primary' href="#app">Log in</a>
                    <a className='text-primary' href="#app">Sign up</a>
                </div>

                <header >
                    <h2 className='text-gray-700 font-semibold text-6xl'>Recipes</h2>
                    <h3 className='font-semibold text-2xl'>For Ninjas</h3>
                </header>

                <div>
                    <h4 className='font-bold mt-12 pb-2 border-b border-grey-200'>Latest Recipes</h4>

                    <div className='mt-8'>

                        <div >
                            <img src={stew} alt="stew" />
                            <div>
                                <span>5 Bean Chili Stew</span>
                                <span>Recipe by Mario</span>
                            </div>
                        </div>
                    </div>

                    <h4 className='font-bold mt-12 pb-2 border-b border-grey-200'>Most Popular</h4>

                    <div className='mt-8'>
                        {/* cards */}
                    </div>
                </div>
                    
                <div>
                    <div className='bg-secondary-100 text-secondary-200'>Load more</div>
                </div>
            </main>
        </div>
    );
}

export default NavComponent;