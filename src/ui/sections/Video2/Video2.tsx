import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './Video2.module.css';

interface Video1Props {
  src: string
}

const Video2: FC<Video1Props> = (props) => {
  const videoRef = useRef(null);

  const [isFullScreen, setIsFullScreen] = useState(false);


  const [isHeightHigh, setIsHeightHigh] = useState(false);
  const handleOrientationChange = () => {

    console.log("screen:", window.screen)
    console.log("angle:", window.screen.orientation.angle)
    let height = window.screen.availHeight
    let width = window.screen.availWidth

    if(height > width){
      setIsHeightHigh(true) 
    }else {
      setIsHeightHigh(false)
    }


    // if (window.screen.orientation.angle === 90 || window.screen.orientation.angle === 270) {
    //   setIsFullScreen(true);
    // } else {
    //   setIsFullScreen(false);
    // }
  };

  const handleFullScreenChange = () => {
    console.log("handleFullScreenChange screen:", window.screen)
    console.log("handleFullScreenChange angle:", window.screen.orientation.angle)
    setIsFullScreen(document.fullscreenElement !== null);
  };

 

  useEffect(() => {

    console.log("angle useEffect:", window.screen.orientation)
    handleOrientationChange()
   
    window.addEventListener('orientationchange', handleOrientationChange);
    document.addEventListener('fullscreenchange', handleFullScreenChange);


    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    
    };
  }, []);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      const videoElement : any = videoRef.current;
      //document.getElementById('videoPlayer');

      if (videoElement) {
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) {
          videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) {
          videoElement.webkitRequestFullscreen();
        }
      }
    }
  };

  
return  (
  // <div className={styles.Video1}>
  <div className={`${styles.videoContainer} ${isFullScreen ? styles.fullScreen : ''}`}>
  <video
    ref={videoRef}
    className={isHeightHigh ? styles.video90 : styles.video}
    controls
    autoPlay
    loop
  >
    <source src={props.src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  {!isFullScreen && (
    <button
      className={styles.fullScreenButton}
      onClick={toggleFullScreen}
    >
      Full Screen
    </button>
  )}
</div>
  // </div>
)};

export default Video2;
