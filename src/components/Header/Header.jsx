import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '../../context/ThemeProvider';

import Favourite from '../Favourite/Favourite';

import imgDroid from './img/droid.svg';
import imgLightsaber from './img/lightsaber.svg';
import imgSpaceStation from './img/space-station.svg';

import css from './Header.module.css';



const Header = ()=>{
  const [icon, setIcon] = useState(imgDroid);
  const isTheme = useTheme();

  useEffect(()=>{
    switch (isTheme.theme) {
      case THEME_LIGHT: setIcon(imgLightsaber); break;
      case THEME_DARK: setIcon(imgSpaceStation); break;
      case THEME_NEITRAL: setIcon(imgDroid); break;
      default: setIcon(imgDroid);
    }
  }, [isTheme]);

  return(
    <div className={css.container}>
      <img className={css.logo} src={icon} alt='Star Wars'/>
      <ul className={css.list__container}>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/people?page=1" >People</NavLink></li>
        <li><NavLink to="/search" >Search</NavLink></li>
        <li><NavLink to="/fail" >Fail</NavLink></li>
        <li><NavLink to="/not-found" >404</NavLink></li>
      </ul>
      <Favourite />
    </div>
  );
}

export default Header;