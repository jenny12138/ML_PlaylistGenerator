import React, {useState} from 'react';
import axios from 'axios';
import './emotion.css';
import { getEmotionPrediction } from '../api';

function EMOTION() {
  const [prediction, setPrediction] = useState(-1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    getEmotionPrediction(formData)
    .then(res => {
      setPrediction(res);
    })

  }

  const setFileAndImage = (file) => {
    setSelectedFile(file);
    if (file !== null){
      setImage(URL.createObjectURL(file));
    } else{
      setImage(null);
      setPrediction(null);
    }
    
  }

  if (prediction == "Happy")
  {
    return (
      <div className="main-div">
      <form onSubmit={e => submitForm(e)} >
        <input 
          type="file"
          onChange={e => setFileAndImage(e.target.files[0])}
        /> <br/>
        <button type="submit">
          Get Spotify Playlist!
        </button>
      </form>

      <img src={image}>
      </img>
      <p>{prediction == -1 ? "Please upload a selfie to get a playlist corresponding to your emotion!" : `The current prediction is ${prediction}`}</p>
      <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    );
  }

  if (prediction == "Sad")
  {
    return (
      <div className="main-div">
      <form onSubmit={e => submitForm(e)} >
        <input 
          type="file"
          onChange={e => setFileAndImage(e.target.files[0])}
        /> <br/>
        <button type="submit">
          Get Spotify Playlist!
        </button>
      </form>

      <img src={image}>
      </img>
      <p>{prediction == -1 ? "Please upload a selfie to get a playlist corresponding to your emotion!" : `The current prediction is ${prediction}`}</p>
      <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3YSRoSdA634" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    );
  }

  if (prediction == "Angry")
  {
    return (
      <div className="main-div">
      <form onSubmit={e => submitForm(e)} >
        <input 
          type="file"
          onChange={e => setFileAndImage(e.target.files[0])}
        /> <br/>
        <button type="submit">
          Get Spotify Playlist!
        </button>
      </form>

      <img src={image}>
      </img>
      <p>{prediction == -1 ? "Please upload a selfie to get a playlist corresponding to your emotion!" : `The current prediction is ${prediction}`}</p>
      <iframe src="https://open.spotify.com/embed/playlist/7L08IETH8EQmm7k4r8rivb" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    );
  }

  if (prediction == "Surprise")
  {
    return (
      <div className="main-div">
      <form onSubmit={e => submitForm(e)} >
        <input 
          type="file"
          onChange={e => setFileAndImage(e.target.files[0])}
        /> <br/>
        <button type="submit">
          Get Spotify Playlist!
        </button>
      </form>

      <img src={image}>
      </img>
      <p>{prediction == -1 ? "Please upload a selfie to get a playlist corresponding to your emotion!" : `The current prediction is ${prediction}`}</p>
      <iframe src="https://open.spotify.com/embed/playlist/69fEt9DN5r4JQATi52sRtq" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    );
  }

  if (prediction == "Neutral")
  {
    return (
      <div className="main-div">
      <form onSubmit={e => submitForm(e)} >
        <input 
          type="file"
          onChange={e => setFileAndImage(e.target.files[0])}
        /> <br/>
        <button type="submit">
          Get Spotify Playlist!
        </button>
      </form>

      <img src={image}>
      </img>
      <p>{prediction == -1 ? "Please upload a selfie to get a playlist corresponding to your emotion!" : `The current prediction is ${prediction}`}</p>
      <iframe src="https://open.spotify.com/embed/playlist/1r27x3vwUcmopK0ipzAIy3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    );
  }

  return (
      <div className="main-div">
      <form onSubmit={e => submitForm(e)} >
        <input 
          type="file"
          onChange={e => setFileAndImage(e.target.files[0])}
        /> <br/>
        <button type="submit">
          Get Spotify Playlist!
        </button>
      </form>

      <img src={image}>
      </img>
      <p>{prediction == -1 ? "Please upload a selfie to get a playlist corresponding to your emotion!" : `The current prediction is ${prediction}`}</p>
      </div>
  );

  
}

// class App extends React.Component {
// 	constructor(props) {
//     super(props);
//     this.state = {
//     file: ''
//     };
//   }

//   render() {
//     return <div>
//     <input type='file' onChange={(e) => {
//     this.setState({file: e.target.files[0]}, () => {
//     	console.log('state', this.state);
//     })
//     }} />
//     </div>;
//   }
// }

export default EMOTION;
