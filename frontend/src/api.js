import axios from 'axios';

//For MNIST
export const getImagePrediction = (data) => {
    return axios.post('/predict/image', data)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      alert(err);
    })
}

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

//For GPT2
export const getTextPrediction = (data) => {
    return axios.post('/predict/text', data)
    .then(res => {
        return res.data
    })
    .catch(err => {
        alert(err);
    })
}