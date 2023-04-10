import PropTypes, { element } from 'prop-types';
import cn from 'classnames';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '../../../context/ThemeProvider';

import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgFalcon from './img/falcon.jpg';

import css from './ChooseSide.module.css';

const ChooseSideItem = ({
  classes,
  theme,
  text,
  img
}) => {
  const isTheme = useTheme();

  return (
    <div
      className={cn(css.item, classes)}
      onClick={() => isTheme.change(theme)}
    >
      <div className={css.item__header}>{text}</div>
      <img
        className={css.item__img}
        src={img}
        alt={text}
      />
    </div>
  )
}
ChooseSideItem.propTypes = {
  classes: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
}

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: 'Light Side',
      img: imgLightSide,
      classes: css.item__light
    },
    {
      theme: THEME_DARK,
      text: 'Dark Side',
      img: imgDarkSide,
      classes: css.item__dark
    },
    {
      theme: THEME_NEITRAL,
      text: 'I`m Han Solo',
      img: imgFalcon,
      classes: css.item__neitral
    }
  ];


  return (
    <div className={css.container}>
      {elements.map(({theme, text, img, classes}, index) =>
        <ChooseSideItem
          key={index}
          theme={theme}
          text={text}
          img={img}
          classes={classes}
        />
      )}
      {/* <ChooseSideItem
        theme={THEME_LIGHT}
        text={'Light Side'}
        img={imgLightSide}
      />
      <ChooseSideItem
        theme={THEME_DARK}
        text={'Dark Side'}
        img={imgDarkSide}
      />
      <ChooseSideItem
        theme={THEME_NEITRAL}
        text={'I`m Han Solo'}
        img={imgFalcon}
      /> */}
    </div>
  );
}

ChooseSide.propTypes = {
  // text: PropTypes.string,
}

export default ChooseSide;

