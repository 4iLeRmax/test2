import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { makeConcurrentRequest } from '../../../utils/network';
import { changeHTTP } from '../../../utils/network';

import css from './PersonFilms.module.css';

const PersoneFilms = ({ personFilms }) => {
  const [filmsName, setFilmsName] = useState([]);


  useEffect(() => {
    (async () => {
      // const filmsHTTPS = personFilms.map(url => changeHTTP(url));
      const filmsHTTPS = personFilms.map(url =>
        url.search('http://') === 0 ? changeHTTP(url) : url
      );
      const response = await makeConcurrentRequest(filmsHTTPS);
      setFilmsName(response);
    })();
  }, []);

  // const arr = [4,5,6,1,2,3];
  // const resArr = arr.sort((a,b)=>a-b);
  // console.log(resArr);


  return (
    <div className={css.wrapper}>
      <ul className={css.list__container}>
        {filmsName
          .sort((a,b)=>a.episode_id-b.episode_id)
          .map(({ title, episode_id }) =>
            <li key={episode_id} className={css.list__item}>
              <span className={css.item__episode}>Episode {episode_id}</span>
              <span className={css.item__colon}> : </span>
              <span className={css.item__title}>{title}</span>
            </li>
          )}
      </ul>
    </div>
  );
}

PersoneFilms.propTypes = {
  personFilms: PropTypes.array,
}

export default PersoneFilms;