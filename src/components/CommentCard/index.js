import React from 'react';
import './comment-card.scss';


const CommentCard  = ({comment}) => {

  return (  	
  <div className="comment-card">
    <div className="header">
      <img
        alt=""
        src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
      />
    </div>
    <div className="body">
      <h2>{comment.snippet.topLevelComment.snippet.authorDisplayName}</h2>
      <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
    </div>
  </div>
  )
            
}



export default CommentCard;