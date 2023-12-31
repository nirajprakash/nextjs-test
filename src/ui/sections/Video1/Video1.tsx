import React, { FC, useEffect, useState } from 'react';
import styles from './Video1.module.css';

interface Video1Props {
  src: string
}

const Video1: FC<Video1Props> = (props) => {
  
  const [isFullScreen, setIsFullScreen] = useState(false);
  const handleOrientationChange = () => {

    console.log("screen:", window.screen)
    console.log("angle:", window.screen.orientation.angle)
    if (window.screen.orientation.angle === 90 || window.screen.orientation.angle === 270) {
      setIsFullScreen(true);
    } else {
      setIsFullScreen(false);
    }
  };

 

  useEffect(() => {

    console.log("angle useEffect:", window.screen.orientation)
    handleOrientationChange()
   
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      const videoElement : any = document.getElementById('videoPlayer');

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
    <div className={`td-w-full ${isFullScreen ? 'td-h-screen' : 'td-h-[60vh]'} td-relative`}>
      <video
        id="videoPlayer"
        className="td-w-full td-h-full td-object-cover"
        controls
        autoPlay
        loop
      >
        <source src={props.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isFullScreen && (
        <button
          className="td-absolute td-top-4 td-right-4 td-bg-blue-500 td-text-white td-px-4 py-2 td-rounded"
          onClick={toggleFullScreen}
        >
          Full Screen
        </button>
      )}
    </div>
  // </div>
)};

export default Video1;
