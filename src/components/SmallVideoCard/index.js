import React from 'react';
import './small-video-card.scss';


const SmallVideoCard  = ({videoData, onClickAction}) => {

  return (  	
  <div className="video-card" onClick={() => onClickAction(videoData)} >
    <div className="header">
      <img alt="" src={videoData.snippet.thumbnails.medium.url} />
    </div>
    <div className="body">
      <h2>{videoData.snippet.title}</h2>
    </div>
  </div>
  )
            
}



export default SmallVideoCard;