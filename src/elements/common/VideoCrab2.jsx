import React, {useEffect, Suspense} from 'react';
import ReactPlayer from 'react-player/lazy';


const VideoCrab2 = () => {


    return (
      <ReactPlayer
      muted={true}
      url= 'assets/video/crab1.mp4'
      playing={true}
      loop={true}
      width='100%'
      height='100%'
      controls = {false}
  />

    )
}

export default VideoCrab2;
