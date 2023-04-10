import UIVideo from '../UI/UIVideo/UIVideo';
import videoHanSolo from './video/han-solo.mp4'
import css from './ErrorMessage.module.css';

const ErrorMessage = ()=>{
  return(
    <>
      <p className={css.text}>The dark side of force has won.<br />
        We cannot display data.<br />
        Come back when we fix everything.
      </p>
      <UIVideo 
        src={videoHanSolo}
        playbackRate={1.0}
        classes={css.video}
      />
    </>
  );
}

export default ErrorMessage;