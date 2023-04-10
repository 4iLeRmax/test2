import PropTypes from 'prop-types';
import cn from 'classnames';
import icon from './img/cancel.svg';

import css from './UIInput.module.css';

const UIInput = ({
  value,
  handleInputChange,
  placeholder,
  classes
}) => {
  return (
    <div className={cn(css.wrapper__input, classes)}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
        className={css.input}
      />
      <img
        className={cn(css.clear)}
        onClick={()=> value && handleInputChange('')}
        src={icon}
        alt="cancel"
      />
    </div>
  );
}

UIInput.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string
}

export default UIInput;