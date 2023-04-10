import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';

import css from './FavouritesPage.module.css';


const FavouritesPage = ()=>{
  const [people, setPeople] = useState([]);
  const storeData = useSelector(state=>state.favouriteReducer);

  // console.log('val', Object.values(storeData));
  // console.log('ent', Object.entries(storeData));
  // console.log(storeData);

  useEffect(()=>{
    const arr = Object.entries(storeData);
    if(arr.length > 0){
      const res = arr.map(item=>{
        return {
          id: item[0],
          name: item[1].name,
          img: item[1].img
        }
      });
      // console.log(res);
      setPeople(res);
    }
  }, []);
  // console.log(people);

  return(
    <>
      <h1 className='header__text'>Favourites</h1>
      {people.length > 0 ? <PeopleList people={people}/> : <h2 className={css.comment}>No Data</h2>}
    </>
  );
}

export default FavouritesPage;