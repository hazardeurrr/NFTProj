import React from "react";
import ReactDOM from "react-dom";
import PlayPause from "./PlayPause";


const PlayButton = () => {

    const [showPlayButton, setPlayButton] = React.useState(true)

    return (
            
      <div className="App">
      <button
        onClick={() => setPlayButton(!showPlayButton)}
        className="play-button"
        style={{
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
    </div>

    )
}

export default PlayButton;
