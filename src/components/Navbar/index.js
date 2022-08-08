import logo from '../../assets/img/logo.png';
import { CartWidget } from '../CartWidget';

const Navbar = () => {
    return (
        <header>
            <div id='tienda'>
                <img src={logo} alt="logo"/>
                <h2>Filolearning shop</h2>
            </div>
            <nav>
                <a href="#">Apuntes</a>
                <a href="#">Útiles</a>
                <a href="#">Mochilas y accesorios</a>
                <a href="#">Calculadoras</a>
                <CartWidget/>
            </nav>
        </header> 
    )
}

export { Navbar }