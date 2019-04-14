import FooterShape from '../../assets/images/sticky_bg_shape.png';

export default {
  backgroundColor: '#C00026',
  linkStyles: {
    textDecoration: 'none',
    color: 'white',
  },
  footer: {
    backgroundColor: '#C00026',
    color: 'white',
    bottom: '0',
    height: '60px',
    width: '100%',
    backgroundImage: `url(${FooterShape})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat-x',
    display: 'table',
  },
};
