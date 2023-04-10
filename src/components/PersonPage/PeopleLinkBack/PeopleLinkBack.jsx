import { useNavigate } from 'react-router-dom';
import icon from './img/back.svg';
import css from './PeopleLinkBack.module.css';

const PeopleLinkBack = ()=>{
  const history = useNavigate();

  const handleGoBack = e =>{
    e.preventDefault();
    // console.log(history.goBack);
    history('/people?page=1');
  }

  return(
    <>
      <a 
        href="#"
        onClick={handleGoBack}
        className={css.link}
      >
        <img className={css.link__img} src={icon} alt="GO Back"/>
        <span>Go Back</span>
      </a>
    </>
  );
}

export default PeopleLinkBack;