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
       
          <Card img={desarrollo} icon={icondesarrollo} href="https://wa.link/5vtds6" title="Desarrollo Web" text="Diseño y desarrollo de sitios corporativos y landing pages. 100% responsive." data-aos="fade-up"/>

          <Card img={publicidad} icon={iconpublicidad} href="https://wa.link/wmerxs"  title="Publicidad Online" text="Aumentá tu visibilidad, atrae clientes y maximizá tus ventas." data-aos="fade-up"/>


          <Card img={diseño} icon={icondiseño} href="https://wa.link/20rdx8" title="Diseño Gráfico" text="Destacá de la competencia con diseños elegantes y personalizados." data-aos="fade-up"/>

          <Card img={ecommerce} icon={iconecommerce} href="https://wa.link/0bgxbi" title="Tienda Virtual" text="Desarrollo, optimización y estrategias para vender en linea." data-aos="fade-up"/>

          <Card img={cm} icon={iconcm} href="https://wa.link/pvzs14" title="Community Manager" text="Creamos contenido relevante y optimizamos tu presencia en linea." data-aos="fade-up"/>
        

        <Card img={edicion} icon={iconedicion} href="https://wa.link/chdxmj" title="Edición Multimedia" text="Editamos tus videos y fotos para lograr un producto atractivo y profesional." data-aos="fade-up"/>
      
      </div>
    </div>
  )
}

export default Services