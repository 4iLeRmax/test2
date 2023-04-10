import css from './PersonInfo.module.css';
import PropTypes from 'prop-types';

const PersonInfo = ({ personInfo }) => {
  return (
    <>
      <div className={css.wrapper}>
        <ul className={css.list__container}>
          {personInfo.map(({ title, data }) =>
            data && (
              <li className={css.list__item} key={title}>
                <span className={css.item__title}>{title}: {data}</span>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}

PersonInfo.propTypes = {
  personInfo: PropTypes.array
}

export default PersonInfo;