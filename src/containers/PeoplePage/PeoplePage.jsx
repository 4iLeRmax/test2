import React, { useState, useEffect, Fragment, useRef } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation/PeopleNavigation'
import { getApiResourse, changeHTTP } from '../../utils/network';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '../../services/getPeopleData';
import { API_PEOPLE } from '../../constants/api';
import { useQueryParams } from '../../hooks/useQueryParams';

import css from './PeoplePage.module.css';


const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(null);
 
// ===========================================
  // const query = useQueryParams();
  // const queryPage = query.get('page');
  const queryPage = useQueryParams('page');
  // console.log(queryPage, prevPage, nextPage);
// ===========================================

  const getResourse = async (url) => {
    const res = await getApiResourse(url);
    // console.log(res);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url).trim();
        const img = getPeopleImage(id);

        return {
          name,
          url,
          img,
          id
        }
      });
      setPeople(peopleList);

      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));

      setCounterPage(getPeoplePageId(url));
      
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }

  }


  useEffect(() => {
    getResourse(API_PEOPLE+queryPage);
    // getResourse(API_PEOPLE+1);
    // getResourse('https://swapi.dev/api/people/?page=1')
  }, [queryPage]);
  // }, []);

  return (
    <>
      <PeopleNavigation 
        getResourse={getResourse} 
        nextPage={nextPage}
        prevPage={prevPage}
        counterPage={counterPage}
      />
      {!people && <div className={css.loader}></div>}
      {people && 
        <>
          <PeopleList people={people} />
        </>
      }
    </>
  );
}
PeoplePage.prototype = {
  setErrorApi: PropTypes.func
}


export default withErrorApi(PeoplePage);