import logo from '../../assets/img/logo.png';

const Navbar = () => {
    return (
        <header>
            <div id='tienda'>
                <img src={logo} alt="logo"/>
                <h2>Filolearning shop</h2>
            </div>
            <nav>
                <a href="#">Apuntes</a>
                <a href="#">Utiles</a>
                <a href="#">Mochilas y accesorios</a>
            </nav>
        </header> 
    )
}

export { Navbar }