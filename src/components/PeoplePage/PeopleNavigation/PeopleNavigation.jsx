import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './PeopleNavigation.module.css';
import UIButton from '../../UI/UIButton/UIButton';

const PeopleNavigation = ({
  getResourse,
  prevPage,
  nextPage,
  counterPage
})=>{

  const handleChangePrev = ()=> getResourse(prevPage);
  const handleChangeNext = ()=> getResourse(nextPage);

  return(
    <div className={css.buttons}>
      <Link to={`/people/?page=${
        counterPage > 1 ? counterPage-1 : counterPage
      }`}>
        <UIButton 
          text="Prev"
          onClick={handleChangePrev}
          disabled={!prevPage}
        />
      </Link>
      <Link to={`/people/?page=${
        counterPage < 9 ? counterPage+1 : counterPage
      }`}>
        <UIButton 
          text="Next"
          onClick={handleChangeNext}
          disabled={!nextPage}
          // theme='dark'
          // classes={css.test}
        />
      </Link>
    </div>
  );
}

// PeopleNavigation.PropTypes ={
//   getResourse: PropTypes.func,
//   prevPage: PropTypes.string,
//   nextPage: PropTypes.string,
//   counterPage: PropTypes.number,
// }


export default PeopleNavigation;