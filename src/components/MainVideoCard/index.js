import React from 'react';
import './main-video-card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const MainVideoCard = ({ currentVideo, currentVideoStatistics }) => {
	return (
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
					{currentVideoStatistics && (
						<div className="statistics">
							<span>
								<span className="count-wievs"> {currentVideoStatistics.viewCount}</span>
								views
							</span>
							<span>
								<span>
									<FontAwesomeIcon icon={faThumbsUp} />
									<span className="count-up"> {currentVideoStatistics.likeCount}</span>
								</span>
								<span>
									<FontAwesomeIcon icon={faThumbsDown} />
									<span className="count-down"> {currentVideoStatistics.dislikeCount}</span>
								</span>
							</span>
						</div>
					)}
				</h2>
				<p>{currentVideo.snippet.description}</p>
			</div>
		</div>
	);
};

export default MainVideoCard;
