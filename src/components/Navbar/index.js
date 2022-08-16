import logo from '../../assets/img/logo.png';
import { CartWidget } from '../CartWidget';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <NavLink to="/" id='tienda'>
                <img src={logo} alt="logo"/>
                <h2 id="tienda_nombre">Filolearning shop</h2>
            </NavLink>
            <nav>
                <NavLink to="category/apuntes">Apuntes</NavLink>
                <NavLink to="category/utiles">Útiles</NavLink>
                <NavLink to="category/accesorios">Mochilas y accesorios</NavLink>
                <NavLink to="category/calculadoras">Calculadoras</NavLink>
                <CartWidget/>
            </nav>
        </header> 
    )
}

export { Navbar }