import PropTypes from 'prop-types';
import { Link, useLocation, useParams } from 'react-router-dom';

import css from './PeopleList.module.css';


const PeopleList = ({people})=>{
  // console.log(people);

  return(
    <>
      <ul className={css.list__container}>
        {people.map(({name, url, img, id}) => 
          <li className={css.list__item} key={id}>
            <Link to={`/people/${id}`}>
              <img className={css.person__photo} src={img} alt={name}/>
              <p>{name}</p>
            </Link>
          </li>
        )}
      </ul>
    </>
  );
}
PeopleList.propTypes = {
  people: PropTypes.array
}

export default PeopleList;