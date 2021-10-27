import { SettingsEthernetTwoTone } from '@material-ui/icons';
import React, {Suspense, useEffect} from 'react';
import Sound from 'react-sound'
import CrabLoopMP3 from '../../../public/assets/music/crab_loop.mp3'


const Music = () => {

    const handleSongLoading = () => {
        console.log("loading")
    }

    const handleSongPlaying = (e) => {
        setStatusPlaying(e.position)
    }

    const handleSongFinishedPlaying = () => {
        setStatusPlaying(0)
    }

    const [statusPlaying, setStatusPlaying] = React.useState(0)
    // const [volume, setVolume] = React.useState(0)
    // const [playStatus, setPlayStatus] = React.useState(Sound.status.STOPPED)

    return (
            
            <Sound
                url={CrabLoopMP3}
                playStatus={Sound.status.PLAYING}
                position={statusPlaying}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
                onLoading={handleSongLoading}
                // volume={volume}
            /> 

    )
}

export default Music;
