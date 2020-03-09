import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import './VideoPage.scss';
import Button from '../components/Button';
// import Input from "../components/Input";

import VideContext from '../context/videoContext';





const VideoPage = () => {
	const [ inputValue, changeInputvalue ] = useState('');

	return (
		<VideContext.Consumer>
			{({ 
        videos,
        currentVideo,
        serachVideos,
        videosToShow,
        previousVideos,
        commentList,
        currentVideoStatistics,
        setCurrentVideo 
      }) => (
				<div className="main-container">
					<div className="users-section">
						{/* <Input
                      onClick={ () =>{this.getYouTubeVideo()} } 
                      name = {'Load youtube video'}
                    /> */}

						<input value={inputValue} onChange={(event) => changeInputvalue(event.target.value)} />

						<Button
							onClick={() =>
								serachVideos(
									inputValue,
									() => {
										changeInputvalue('');
										console.log('Consumer videos', videos);
									}
									
								)}
							name={'Search'}
						/>
						<Button
							onClick={() => {
                console.log('previousVideos ', previousVideos);
                // getStatisticToVideo(currentVideo.id.videoId)
							}}
							name={'check'}
						/>
					</div>

          {videosToShow.length > 0 && <h1>Videos to show</h1>}
							{videosToShow.length > 0 &&
								videosToShow.map((item, index) => {
									return (
										<div className="video-card" key={index}>
											<div className="header">
												<img alt="" src={item.snippet.thumbnails.medium.url} />
											</div>
											<div className="body">
												<h2>{item.snippet.title}</h2>
											</div>
										</div>
									);
								})}
          {previousVideos.length > 0 && <h1>Previos Video</h1>}
							{previousVideos.length > 0 &&
								previousVideos.map((item, index) => {
									return (
										<div className="video-card" key={index}>
											<div className="header">
												<img alt="" src={item.snippet.thumbnails.medium.url} />
											</div>
											<div className="body">
												<h2>{item.snippet.title}</h2>
											</div>
										</div>
									);
								})}

					<div className="video-container">
						<div className="main-video-wrapper">
							{currentVideo && (
								<div className="main-video-card">
									<div className="header">
										<iframe
                      title="myFrame"
											type="text/html"
											src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
											frameBorder="0"
										/>
									</div>
									<div className="body">
										<h2>
                      {currentVideo.snippet.title}
                      {currentVideoStatistics &&
                      <div className="statistics">
                        <span> 
                          <span className="count-wievs"> {currentVideoStatistics.viewCount}</span>
                          views
                        </span>
                        <span>
                          <span>
                            <FontAwesomeIcon icon={faThumbsUp}/> 
                            <span className="count-up"> {currentVideoStatistics.likeCount}</span>
                          </span>
                          <span>
                            <FontAwesomeIcon icon={faThumbsDown}/>
                            <span className="count-down"> {currentVideoStatistics.dislikeCount}</span>
                          </span>
                        </span>
                      </div>
                      }
                     

                    </h2>
										<p>{currentVideo.snippet.description}</p>
									</div>
								</div>
							)}
						</div>
						<div className="video-list-wrapper">
            {videos.length > 0 && <h1>Related</h1>}
							{videos.length > 0 &&
								videos.map((item, index) => {
									return (
										<div className="video-card" onClick={() => setCurrentVideo(item)} key={index}>
											<div className="header">
												<img alt="" src={item.snippet.thumbnails.medium.url} />
											</div>
											<div className="body">
												<h2>{item.snippet.title}</h2>
											</div>
										</div>
									);
								})}
               
						</div>
						<div className="comments-list">
							{commentList.length > 0 &&
								commentList.map((comment, index) => {
									return (
										<div className="comment-card" key={index}>
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
									);
								})}
						</div>
					</div>
				</div>
			)}
		</VideContext.Consumer>
	);
};

export default VideoPage;
