import React from 'react';

export default React.createContext({
	videos: [],
	commentList: [],
	currentVideo: null,
	currentVideoStatistics: null,
	previousVideos: [],
	videosToShow: [],
	addVideos: (videos) => {},
	setCurrentVideo: (video) => {},
	serachVideos: (video) => {}
});
