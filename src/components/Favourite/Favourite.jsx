import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import icon from './img/fav.svg';

import css from './Favourite.module.css';
import { useEffect, useState } from 'react';

const Favourite = () => {
  const [count, setCount] = useState(null);
  const storeData = useSelector(store=> store.favouriteReducer);

  useEffect(()=>{
    const length = Object.keys(storeData).length;
    setCount(length);
    // console.log(length);
  });

  return (
    <div className={css.container}>
      <Link to="/favourites">
        <span className={css.counter}>{count >= 9 ? '...' : count}</span>
        <img
          src={icon}
          className={css.icon}
          alt='Favourites'
        />
      </Link>

    </div>
  );
}


export default Favourite;