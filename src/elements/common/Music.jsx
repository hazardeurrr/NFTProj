import { SettingsEthernetTwoTone } from '@material-ui/icons';
import React, {Suspense, useEffect} from 'react';
import Sound from 'react-sound'
import CrabLoopMP3 from '../../../public/assets/music/crab_loop.mp3'
import PlayButton from './PlayButton';
import ReactDOM from "react-dom";
import PlayPause from "./PlayPause";
import Ripples from 'react-ripples'

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
    const [playStatus, setPlayStatus] = React.useState(Sound.status.STOPPED)
    const [showPlayButton, setPlayButton] = React.useState(true)

    return (
        <div>
            <button
                onClick={() => {
                    if(showPlayButton){
                        setPlayStatus(Sound.status.PLAYING)
                    } else {
                        setPlayStatus(Sound.status.PAUSE)
                    }
                    setPlayButton(!showPlayButton)
                } 
                }
                className="play-button"
                style={{
                marginRight: 15,
                border: "none",
                backgroundColor: "#f8014d",
                boxShadow: "0 0 4px 2px rgba(0,0,0,.2)",
                cursor: "pointer",
                height: 40,
                outline: "none",
                borderRadius: "100%",
                width: 40
                }}
            >
                <PlayPause buttonToShow={showPlayButton ? "play" : "pause"} />
            </button>
            <Sound
                url={CrabLoopMP3}
                playStatus={playStatus}
                position={statusPlaying}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
                onLoading={handleSongLoading}
            /> 
        </div>

    )
}

export default Music;
