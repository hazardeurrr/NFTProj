import React, {useEffect, Suspense} from 'react';
import ReactPlayer from 'react-player/lazy';


const VideoCrab = () => {


    return (
      <ReactPlayer
      muted={true}
      url= 'assets/video/videocrab.mp4'
      playing={true}
      loop={true}
      width='100%'
      height='100%'
      controls = {false}
      playbackRate = {1.35}
  />

    )
}

export default VideoCrab;
