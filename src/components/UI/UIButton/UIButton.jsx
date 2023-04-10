import cn from 'classnames';
import PropTypes from 'prop-types';

import css from './UIButton.module.css';

const UIButton = ({
  text,
  onClick,
  disabled,
  theme='dark',
  classes
})=>{
  return(
    <>
      <button 
        onClick={onClick}
        disabled={disabled}
        className={cn(css.button, css[theme], classes)}
      >
        {text}
      </button>
    </>
  );
}

UIButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  classes: PropTypes.string
}

export default UIButton;