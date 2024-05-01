import {React, useState, useEffect} from 'react';
import '../styles/navbar.css';

import Burguer from './Burguer';


//logos
import logo from '../assets/logos/logo.png';
import mb from '../assets/logos/logomb.png';

const Navbar = () => {

  const[click, setClick] = useState(false);
  const handleClick = () =>{
  //setear el booleano opuesto al actual cuando se hace click en el boton
    setClick(!click);
  }

  const [navbarColor, setNavbarColor] = useState('transparent');

  useEffect(() => {
      const changeNavbarColor = () => {
          if(window.scrollY) {
              setNavbarColor('rgb(1, 1, 2, 0.9)');
          } else {
              setNavbarColor('transparent');
          }
      };
      window.addEventListener('scroll', changeNavbarColor);
      return () => {
          window.removeEventListener('scroll', changeNavbarColor);
      };
  }, []);

  return (
    <div className='navbar__main' style={{backgroundColor: navbarColor}}>
      <div className='navbar__logo'>
        <a href="#" className='navbar__logo_sf'><img src={logo} alt="logo sunflower" /></a>
        <a href="#" className='navbar__logo_mb'><img src={mb} alt="logo flor" /></a>
      </div>
      <nav className={`links ${click ? 'active' : ''}`}>
        <a href="#" className='inicio_mb'>Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto" className='contact_link'>Contactar</a>

        <div className='navbar__btn'>
          <a href='#contacto'>Contactarse</a>
        </div> 
      </nav>

      <div className="burguer">
        <Burguer handleClick={handleClick}/> 
      </div>
    </div>
  )
}

export default Navbar