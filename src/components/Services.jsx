import React from 'react'
import '../styles/services.css';
import Card from './Card';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

//imagenes de fondo tarjetas
import cm from '../assets/services/cm.png';
import desarrollo from '../assets/services/desarrollo.png';
import diseño from '../assets/services/diseño.png';
import ecommerce from '../assets/services/ecommerce.png';
import edicion from '../assets/services/edicion.png';
import publicidad from '../assets/services/publicidad.png';

//iconos tarjetas
import iconcm from '../assets/services/cm-i.png';
import icondesarrollo from '../assets/services/desarrollo-i.png';
import icondiseño from '../assets/services/diseño-i.png';
import iconecommerce from '../assets/services/ecommerce-i.png';
import iconedicion from '../assets/services/media-i.png';
import iconpublicidad from '../assets/services/publicidad-i.png';

const Services = () => {
  return (
    <div className='services__main' id='servicios'>
      <div className='services__title' data-aos="fade-up"> 
        <h2>NUESTROS <span>SERVICIOS</span></h2>
      </div>
      <div className='cards__container'>
        <a href="https://wa.link/5vtds6" target='_blank' rel="noopener noreferrer" data-aos="fade-up">
          <Card bg={desarrollo} icon={icondesarrollo} title="Desarrollo Web" text="Diseño y desarrollo de sitios corporativos y landing pages. 100% responsive."/>
        </a>

        <a href="https://wa.link/wmerxs" target='_blank' rel="noopener noreferrer" data-aos="fade-up">
          <Card bg={publicidad} icon={iconpublicidad}  title="Publicidad Online" text="Aumentá tu visibilidad, atrae clientes y maximiza tus ventas."/>
        </a>

        <a href="https://wa.link/20rdx8" target='_blank' rel="noopener noreferrer" data-aos="fade-up">
          <Card bg={diseño} icon={icondiseño} title="Diseño Gráfico" text="Destaca de la competencia con diseños elegantes y personalizados."/>
        </a>

        <a href="https://wa.link/0bgxbi" target='_blank' rel="noopener noreferrer" data-aos="fade-up">
          <Card bg={ecommerce} icon={iconecommerce} title="Tienda Virtual" text="Desarrollo, optimización y estrategias para vender en linea."/>
        </a>
        
        <a href="https://wa.link/pvzs14" target='_blank' rel="noopener noreferrer" data-aos="fade-up">
          <Card bg={cm} icon={iconcm} title="Community Manager" text="Creamos contenido relevante y optimizamos tu presencia en linea."/>
        </a>

        <a href="https://wa.link/chdxmj" target='_blank' rel="noopener noreferrer" data-aos="fade-up">
          <Card bg={edicion} icon={iconedicion} title="Edición Multimedia" text="Editamos tus videos y fotos para lograr un producto atractivo y profesional."/>
        </a>
      
      </div>
    </div>
  )
}

export default Services