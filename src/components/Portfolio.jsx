import React from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import '../styles/portfolio.css';

//importancion de img para galeria
import gallery00 from '../assets/portfolio/d0.png';
import gallery01 from '../assets/portfolio/d1.png';
import gallery02 from '../assets/portfolio/d2.png';
import gallery03 from '../assets/portfolio/d3.png';
import gallery04 from '../assets/portfolio/d4.png';
import gallery05 from '../assets/portfolio/lp0.png';
import gallery06 from '../assets/portfolio/lp1.png';
import gallery07 from '../assets/portfolio/lp2.png';
import gallery08 from '../assets/portfolio/e0.png';
import gallery09 from '../assets/portfolio/e1.png';
import gallery10 from '../assets/portfolio/e2.png';
import gallery11 from '../assets/portfolio/d5.png';
import gallery12 from '../assets/portfolio/d6.png';

const images = {
    gallery00,
    gallery01,
    gallery02,
    gallery03,
    gallery04,
    gallery05,
    gallery06,
    gallery07,
    gallery08,
    gallery09,
    gallery10,
    gallery11,
    gallery12
};

const Portfolio = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 350;
    } else {
      current.scrollLeft += 350;
    }
  };

  return (
    <div className='portfolio__main'id='portfolio'>
      <div className='portfolio__content' data-aos="fade-up">
        <h2>PORTFOLIO</h2>
        <p>Estos son nuestros proyectos más destacados. Cada imagen representa el esfuerzo y la creatividad que dedicamos a nuestros clientes.</p>
        <p>Explorá y descubrí cómo transformamos ideas en resultados tangibles! →</p>
        <a href='https://www.instagram.com/sunflower_agencia/'>Ver más</a>
      </div>
      <div className='gallery-images'data-aos="fade-up">
        <div className='gallery-images_container'  ref={scrollRef}>
        {[images.gallery00, images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06, images.gallery07, images.gallery08, images.gallery09, images.gallery10, images.gallery11, images.gallery12].map((image, index) => (
            <div className="gallery-images_card" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="mockup" />
            </div>
          ))}
        </div>

        <div className='gallery-images_arrows'>
          <BsArrowLeftShort  className='gallery__arrow-icon' onClick={()=> scroll('left')} />
          <BsArrowRightShort  className='gallery__arrow-icon' onClick={()=> scroll('right')} />
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Portfolio