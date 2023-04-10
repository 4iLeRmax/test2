import PropTypes from 'prop-types';
import cn from 'classnames';

import css from './UIVideo.module.css';
import { useEffect, useRef } from 'react';

const UIVideo = ({
  src,
  playbackRate = 1.0,
  classes
})=>{
  const videoRef = useRef(null);
  useEffect(()=>{
    videoRef.current.playbackRate = playbackRate;
    console.log(videoRef.current);
  }, []);

  return(
    <>
      <video 
        loop
        muted
        autoPlay
        className={cn(css.video, classes)}
        ref={videoRef}
      >
        <source src={src}/>
      </video>
    </>
  );
}

UIVideo.propTypes = {
  src: PropTypes.string,
  playbackRate: PropTypes.number,
  classes: PropTypes.string,
}

export default UIVideo;