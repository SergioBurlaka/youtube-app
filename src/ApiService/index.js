import axios from 'axios';

const PATH =  'https://www.googleapis.com/youtube/v3';
const KEY =  'AIzaSyCWmYzAoHjALFX-lmmsS48zjt3kjjTu4WE';


class ApiService {


    getVideos(query) {
        return axios.get(PATH + "/search", {
            params:{
                part: 'snippet',
                maxResult: 7,
                key: KEY,
                q: query,
                type: 'video',
                textFormat: 'plainText',
            }
        });
    }

    getCommentsToVideo(videoId) {
        return axios.get(PATH + "/commentThreads", {
            params:{
                part: 'snippet',
                maxResult: 10,
                key: KEY,              
                videoId: videoId,
                textFormat: 'plainText'
            }
        });
    }

    getStatisticToVideo(videoId) {
        return axios.get(PATH + "/videos", {
            params:{
                part: 'statistics',
                key: KEY,              
                id: videoId,
            }
        });
    }



}

export default new ApiService();