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
                <NavLink to="category/apuntes">
                    <a href="#">Apuntes</a>
                </NavLink>
                <NavLink to="category/utiles">
                    <a href="#">Útiles</a>            
                </NavLink>
                <NavLink to="category/accesorios">
                    <a href="#">Mochilas y accesorios</a>                    
                </NavLink>
                <NavLink to="category/calculadoras">
                    <a href="#">Calculadoras</a>                   
                </NavLink>
                <CartWidget/>
            </nav>
        </header> 
    )
}

export { Navbar }