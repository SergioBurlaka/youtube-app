import React, { useState, useEffect } from 'react';

import VideContext from './videoContext';
import ApiService from '../ApiService/index';

const getCommentsToVideo = (videoId, addComments) => {
	ApiService.getCommentsToVideo(videoId)
		.then((res) => {
			const users = res.data;
			if (users.items.length > 0) {
				addComments(users.items);
			}
		})
		.catch((err) => {
			console.log('catch err ', err);
		});
};

const getStatisticToVideo = (videoid, addStatistic) => {
	ApiService.getStatisticToVideo(videoid)
		.then((res) => {
			const users = res.data;
			if (users.items.length > 0) {
				addStatistic(users.items[0].statistics);
			}
		})
		.catch((err) => {
			console.log('err ', err);
		});
};

const getVideos = (inputValue, changeInputValue, addVideos) => {
	ApiService.getVideos(inputValue)
		.then((res) => {
			const users = res.data;
			if (users.items.length > 0) {
				addVideos(users.items);
			}
			return res;
		})
		.catch((err) => {
			console.log('err ', err);
			console.log('error message', err.response.data.error.message);
		});
	changeInputValue();
};

const GlobalState = (props) => {
	const [ videosToShow, setVideosToShow ] = useState([]);
	const [ videos, setVideos ] = useState([]);
	const [ commentList, setComments ] = useState([]);
	const [ previousVideos, setPreviousVideos ] = useState([]);
	const [ currentVideo, setVideo ] = useState(null);
	const [ currentVideoStatistics, setVideoStatistics ] = useState(null);

	const [ currentInput, setInputValue ] = useState('');

	//  let currentInputValue = ''
	//  let currentChangeInputValue = () =>{};

	const addVideos = (newVideos) => {
		console.log('addVideos', newVideos);
		setVideos(newVideos);
		setCurrentVideo(newVideos[0]);
		setVideosToShow([ ...previousVideos, ...newVideos.slice(1) ]);
	};

	const setCurrentVideo = (video) => {
		console.log('setCurrentVideo', video);
		setVideo(video);
		getCommentsToVideo(video.id.videoId, setComments);
		getStatisticToVideo(video.id.videoId, setVideoStatistics);
	};

	//   useEffect(() => {
	//     console.log('Do something after counter has changed', currentInput);
	//     // getVideos(currentInputValue, currentChangeInputValue, addVideos)

	//  }, [currentInput]);

	const serachVideos = (inputValue, changeInputValue) => {
		setInputValue(inputValue);
		//  currentInputValue = inputValue
		//  currentChangeInputValue = changeInputValue;
		setPreviousVideos(videos.slice(0, 2));
		getVideos(inputValue, changeInputValue, addVideos);
	};

	return (
		<VideContext.Provider
			value={{
				videos: videos,
				videosToShow: videosToShow,
				commentList: commentList,
				currentVideo: currentVideo,
				previousVideos: previousVideos,
				currentVideoStatistics: currentVideoStatistics,
				setCurrentVideo: setCurrentVideo,
				serachVideos: serachVideos
			}}
		>
			{props.children}
		</VideContext.Provider>
	);
};

export default GlobalState;
