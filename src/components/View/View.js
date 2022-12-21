import React from 'react';
import YoutubePlayer from 'react-youtube-player';
import YouTube from 'react-youtube';

const View = () => {

  const opts = {
    // height: '390',
    // width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  
  return (
    <React.Fragment>
      <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between'}}>
        
        <div style={{width: '30%', }}>
          <YouTube
            videoId='QItzy50v3cs'
            opts={opts}
            onPlay={(e)=> {
              console.log(e)
              console.log("Started")
            }}
            onPause={
              () => {
                console.log("Pause");
              }
            }
            onStop={
              () => {
                console.log("Stopped");
              }
            }
          />
        </div>
        <div style={{width: '30%', }}>
          <YouTube
            videoId='8ri6DkfhIro'
            opts={opts}
            onPlay={(e)=> {
              console.log(e)
              console.log("Started")
            }}
            onPause={
              () => {
                console.log("Pause");
              }
            }
            onStop={
              () => {
                console.log("Stopped");
              }
            }
          />
        </div>
        <div style={{width: '30%', }}>
          <YouTube
            videoId='bN4oY_-bTOI'
            opts={opts}
            onPlay={(e)=> {
              console.log(e)
              console.log("Started")
            }}
            onPause={
              () => {
                console.log("Pause");
              }
            }
            onStop={
              () => {
                console.log("Stopped");
              }
            }
          />
        </div>
      </div>

    </React.Fragment>
  )
}

export default View