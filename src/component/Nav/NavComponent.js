const NavComponent = () => {
    return (
        <div>
            <div>
                <nav>
                    <div>
                        <h1>
                            <a href="/">Food Ninja</a>
                        </h1>
                    </div>
                    <ul>
                        <li>
                            <a href="#app">
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#app">
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

            <main>
                <div>
                    <a href="#app">Log in</a>
                    <a href="#app">Sign up</a>
                </div>

                <header>
                    <h2>Recipes</h2>
                    <h3>For Ninjas</h3>
                </header>

                <div>
                    <h4>Latest Recipes</h4>

                    <div>
                        
                        <div>
                            <img src="img/stew.jpg" alt="stew"/>
                                <div>
                                    <span>5 Bean Chili Stew</span>
                                    <span>Recipe by Mario</span>
                                </div>
                        </div>
                    </div>

                    <h4>Most Popular</h4>

                    <div>
                        
                    </div>
                </div>

                <div>
                    <div>Load more</div>
                </div>
            </main>
        </div>
    );
}

export default NavComponent;