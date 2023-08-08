import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Contactenos = () => {
  return (
    <div className="page-content">
      <h2>Contáctenos</h2>
      <p>
        Nos puede contactar a través de nuestras redes sociales, o enviando un correo electrónico a{' '}
        <a href="mailto:matescancheros@gmail.com">matescancheros@gmail.com</a>.
      </p>

      <div className="social-icons">
        <a href="https://www.instagram.com">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.facebook.com">
          <FaFacebook className="social-icon" />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contactenos;
