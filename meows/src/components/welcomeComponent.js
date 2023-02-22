function WelcomeComponent() {

    return (
        <div>
            <header className='primary-header'>
                <p>MEOWS</p>
                <nav className='navbar-container'>
                    <ul>
                        <li className="link">
                            <a href="#grid-container">About</a>
                        </li>
                        <li className="link">
                            <a href="#contactComponent">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default WelcomeComponent;