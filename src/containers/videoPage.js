import React, { useState, useContext } from 'react';

import './VideoPage.scss';
import Button from '../components/Button';
import CommentCard from '../components/CommentCard';
import SmallVideoCard from '../components/SmallVideoCard';
import MainVideoCard from '../components/MainVideoCard';
import VideContext from '../context/videoContext';

const VideoPage = () => {
	const [ inputValue, changeInputvalue ] = useState('');
	const { serachVideos, videos, currentVideo, currentVideoStatistics, commentList, setCurrentVideo } = useContext(
		VideContext
	);

	return (
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
			</div>

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
	);
};

export default VideoPage;
