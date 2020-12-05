import axios from 'axios';


//For Emotify Playlist
export const getEmotionPrediction = (data) => {
    return axios.post('/predict/emotion', data)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      alert(err);
    })
}

