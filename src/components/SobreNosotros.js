import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import mate1 from '../images/mate1.jpg';
import mate2 from '../images/mate2.jpg';
import mate3 from '../images/mate3.jpg';

const SobreNosotros = () => {
  const carouselStyle = {
    maxWidth: '400px',
    margin: '0 auto',
  };

  const imageStyle = {
    width: '100%',
    maxHeight: '300px',
    maxWidth: '300px',
    objectFit: 'cover',
  };

  return (
    <div className="page-content">
      <h2>Sobre Nosotros</h2>
      <p>
        Somos una empresa que se dedica a la venta de Mates Artesanales elaborados por pequeños
        emprendimientos. Nos enorgullece apoyar a estos pequeños negocios y ofrecer productos de
        calidad a nuestros clientes.
      </p>

      <Carousel showThumbs={false} style={carouselStyle}>
        <div>
          <img src={mate1} alt="Mate 1" style={imageStyle} />
        </div>
        <div>
          <img src={mate2} alt="Mate 2" style={imageStyle} />
        </div>
        <div>
          <img src={mate3} alt="Mate 3" style={imageStyle} />
        </div>
      </Carousel>
    </div>
  );
};

export default SobreNosotros;
