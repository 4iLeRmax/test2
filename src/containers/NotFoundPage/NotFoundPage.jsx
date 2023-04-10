import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import img from './img/404.png'
import css from './NotFoundPage.module.css';

const NotFoundPage = ()=>{
  let location = useLocation();
  // console.log(location);


  return(
    <>
      <h1 className='header__text'>NotFoundPage</h1>
      <img className={css.img} src={img} alt="Not Found"/>
      <p className={css.text}>No match for <u>{location.pathname}</u></p>
    </>
  );
}

export default NotFoundPage;