import React, { useEffect } from 'react';
import '../styles/home.css';
import video from '../assets/bg-video.mp4';
import videomb from '../assets/videomb.mp4';

<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
const Home = () => {

  useEffect(() => {
    const head = document.querySelector('head');
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    window.Calendly.showPopupWidget('https://calendly.com/contacto-xv2x/30min');
  };

  return (
    <div className='home__container'>
      <video autoPlay loop muted className='home__video_destock'>
        <source src={video} type='video/mp4' />
      </video>
      <video autoPlay loop muted className='home__video_mb'>
            <source src={videomb} type='video/mp4' />
      </video>
      <div className='home__content'>
        <h1>MARKETING DIGITAL <br /><span>COMPROMETIDO</span> <br />CON SU CRECIMIENTO.</h1>
        <p>Contar con una estrategía de marketing digital es esencial para garantizar el progreso y la prosperidad de su negocio.</p>
        <p>Una comprensión profunda de sus objetivos, sus clientes y el panorama competitivo, le aseguran una presencia sólida y efectiva en la web.</p>
        <a href="https://calendly.com/contacto-xv2x/30min" onClick={handleClick}>Asesoría sin cargo</a>
      </div>
    </div>
  )
}

export default Home