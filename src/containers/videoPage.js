import React, { useState } from 'react';

import './VideoPage.scss';
import Button from '../components/Button';
import CommentCard from '../components/CommentCard';
import SmallVideoCard from '../components/SmallVideoCard';
import MainVideoCard from '../components/MainVideoCard';
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
						<input value={inputValue} onChange={(event) => changeInputvalue(event.target.value)} />

						<Button
							onClick={() =>
								serachVideos(inputValue, () => {
									changeInputvalue('');
									console.log('Consumer videos', videos);
								})}
							name={'Search'}
						/>
						{/* <Button
							onClick={() => {
							console.log('previousVideos ', previousVideos);
							// getStatisticToVideo(currentVideo.id.videoId)
							}}
							name={'check'}
						/> */}
					</div>

					{/* {videosToShow.length > 0 && <h1>Videos to show</h1>}
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
								})} */}

					<div className="video-container">
						<div className="main-video-wrapper">
							{currentVideo && (
								<MainVideoCard currentVideo={currentVideo} currentVideoStatistics={currentVideoStatistics} />
							)}
						</div>
						<div className="video-list-wrapper">
							{videos.length > 0 && <h1>Related</h1>}
							{videos.length > 0 &&
								videos.map((item, index) => {
									return <SmallVideoCard videoData={item} onClickAction={setCurrentVideo} key={index} />;
								})}
						</div>
						<div className="comments-list">
							{commentList.length > 0 &&
								commentList.map((comment, index) => {
									return <CommentCard comment={comment} key={index} />;
								})}
						</div>
					</div>
				</div>
			)}
		</VideContext.Consumer>
	);
};

export default VideoPage;
