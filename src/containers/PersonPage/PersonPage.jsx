import PropTypes from 'prop-types';
import React, { useEffect, useState, Suspense } from 'react';
import { useSelector } from 'react-redux';

import { withErrorApi } from '../../hoc-helpers/withErrorApi';

import PersonInfo from '../../components/PersonPage/PersonInfo/PersonInfo';
import PersonPhoto from '../../components/PersonPage/PersonPhoto/PersonPhoto';
// import PersonFilms from '../../components/PersonPage/PersonFilms/PersonFilms';
import PeopleLinkBack from '../../components/PersonPage/PeopleLinkBack/PeopleLinkBack';

import UILoading from '../../components/UI/UILoading/UILoading';

import { useParams } from 'react-router';
import { getApiResourse } from '../../utils/network';
import { getPeopleImage } from '../../services/getPeopleData';

import { API_PERSON } from '../../constants/api';
import css from './PersonPage.module.css';
const PersonFilms = React.lazy(()=> import('../../components/PersonPage/PersonFilms/PersonFilms'));


const PersonPage = ({ setErrorApi }) => {
  const [personId, setPersonId] = useState(null);

  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavourite, setPersonFavourite] = useState(false);

  const storeData = useSelector(store=> store.favouriteReducer);

  const id = useParams().id;

  useEffect(() => {
    (async () => {
      const res = await getApiResourse(`${API_PERSON}/${id}/`);
      setErrorApi(!res);
      setPersonId(id);

      storeData[id] ? setPersonFavourite(true) : setPersonFavourite(false);

      // console.log(res.films);

      setPersonInfo([
        { title: 'Height', data: res.height },
        { title: 'Mass', data: res.mass },
        { title: 'Hair color', data: res.hair_color },
        { title: 'Skin color', data: res.skin_color },
        { title: 'Eye color', data: res.eye_color },
        { title: 'Birth year', data: res.birth_year },
        { title: 'Gender', data: res.gender },
      ]);

      setPersonName(res.name);
      setPersonPhoto(getPeopleImage(id));
      
      // console.log(res.films);
      res.films.length && setPersonFilms(res.films);

    })();
  }, []);

  return (
    <>
      <PeopleLinkBack />
      <div className={css.wrapper}>
        <span className={css.person__name}>{personName}</span>
        <div className={css.container}>
          <PersonPhoto
            personId={personId}
            personPhoto={personPhoto}
            personName={personName}
            personFavourite={personFavourite}
            setPersonFavourite={setPersonFavourite}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}

          {personFilms && (
            <Suspense fallback={<UILoading />}>
              <PersonFilms personFilms={personFilms}/>
            </Suspense>
          )}
          {/* {personFilms && <PersonFilms personFilms={personFilms}/>} */}
        </div>
      </div>
    </>
  );
}

PersonPage.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage);