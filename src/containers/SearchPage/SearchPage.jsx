import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getApiResourse } from '../../utils/network';
import { API_SEARCH } from '../../constants/api';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';

import UIInput from '../../components/UI/UIInput/UIInput';

import SearchPageInfo from '../../components/SearchPage/SearchPageInfo/SearchPageInfo';

import css from './SearchPage.module.css';

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [people, setPeople] = useState([]);

  const getResponse = async param => {
    // console.log(param);
    const res = await getApiResourse(API_SEARCH + param);

    if (res) {
      // console.log(res);
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url).trim();
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img
        }
      });
      // console.log(peopleList);
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  }

  useEffect(() => {
    getResponse('');
  }, []);

  const debounceGetResponse = useCallback(
    debounce(value => getResponse(value), 300),
    []
  );

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    // getResponse(value);
    debounceGetResponse(value);
  }

  return (
    <>
      <h1 className='header__text'>Search</h1>
      <UIInput
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder='Enter character name'
        classes={css.input__search}
      />
      <SearchPageInfo people={people} />
    </>
  );
}

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(SearchPage);