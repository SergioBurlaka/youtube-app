import axios from 'axios';

const PATH = 'https://www.googleapis.com/youtube/v3';
// const KEY_MY =  'AIzaSyCWmYzAoHjALFX-lmmsS48zjt3kjjTu4WE';
const KEY_MAMY = 'AIzaSyAnpvzda8hL_Hw-JqFwPL4vTmH5NkE2fKs';

class ApiService {
	getVideos(query) {
		return axios.get(PATH + '/search', {
			params: {
				part: 'snippet',
				maxResult: 7,
				key: KEY_MAMY,
				q: query,
				type: 'video',
				textFormat: 'plainText'
			}
		});
	}

	getCommentsToVideo(videoId) {
		return axios.get(PATH + '/commentThreads', {
			params: {
				part: 'snippet',
				maxResult: 10,
				key: KEY_MAMY,
				videoId: videoId,
				textFormat: 'plainText'
			}
		});
	}

	getStatisticToVideo(videoId) {
		return axios.get(PATH + '/videos', {
			params: {
				part: 'statistics',
				key: KEY_MAMY,
				id: videoId
			}
		});
	}
}

export default new ApiService();

