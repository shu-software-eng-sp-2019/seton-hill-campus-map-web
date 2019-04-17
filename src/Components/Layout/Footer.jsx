import React from 'react';
import styles from './styles';

const Footer = () => (
  <footer id="footer" className="footer navbar fixed-bottom text-center" style={styles.footer}>
    <p className="" style={{ position: 'relative', top: '50%', transform: 'translateY(50%)' }}>
      &copy;
      {` ${new Date().getFullYear()} Seton Hill University Computer Science`}
    </p>
  </footer>
);

Footer.propTypes = {

};

export default Footer;
