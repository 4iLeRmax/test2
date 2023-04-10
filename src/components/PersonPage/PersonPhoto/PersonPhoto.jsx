import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setPersonToFavourite, removePersonFromFavourite } from '../../../store/actions';
import favIcon from './img/fav.svg';
import favIconActive from './img/fav active.svg';

import css from './PersonPhoto.module.css';

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavourite,
  setPersonFavourite
}) => {
  const dispatch = useDispatch();

  // console.log(personFavourite);

  const dispatchFavouritePeople = () => {
    if (personFavourite) {
      dispatch(removePersonFromFavourite(personId));
      setPersonFavourite(false);
    }
    else {
      dispatch(setPersonToFavourite({
        [personId]: {
          name: personName,
          img: personPhoto
        }
      }));
      setPersonFavourite(true);
    }
  }


  return (
    <>
      <div className={css.container}>
        <img className={css.photo} src={personPhoto} alt={personName} />
        <img
          className={css.icon}
          onClick={dispatchFavouritePeople}
          src={personFavourite ? favIconActive : favIcon}
        />
      </div>
    </>
  );
}

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
  personFavourite: PropTypes.bool,
  setPersonFavourite: PropTypes.func
}

export default PersonPhoto;