import React from 'react'
import '../styles/services.css';
import Card from './Card';

//imagenes background tarjetas
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
    <div className='services__main' id='services'>
      <div className='services__title'> 
        <h2>NUESTROS <span>SERVICIOS</span></h2>
      </div>
      <div className='cards__container'>
        <a href="https://wa.link/8ixr1q"><Card bg={desarrollo} icon={icondesarrollo} title="Desarrollo Web" text="Diseño y desarrollo de sitios corporativos y landing pages. 100% responsive"/></a>
        <Card bg={publicidad} icon={iconpublicidad} title="Publicidad Online" text="Aumentá tu visibilidad, atrae clientes y maximiza tus ventas."/>
        <Card bg={diseño} icon={icondiseño} title="Diseño Gráfico" text="Destaca de la competencia con diseños elegantes y personalizados."/>
        <Card bg={ecommerce} icon={iconecommerce} title="Tienda Virtual" text="Desarrollo, optimización y estrategias para vender en linea."/>
        <Card bg={cm} icon={iconcm} title="Community Manager" text="Creamos contenido relevante y optimizamos tu presencia en linea."/>
        <Card bg={edicion} icon={iconedicion} title="Edición Multimedia" text="Editamos tus videos y fotos para lograr un producto atractivo y profesional."/>
      </div>
    </div>
  )
}

export default Services