import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './home/home';
import EMOTION from './emotion/emotion';
import TopBar from './topbar/topbar';

function App() {
  const [prediction, setPrediction] = useState(-1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("emotion", selectedFile);
    axios.post('/predict/emotion', formData)
    .then(res => {
      setPrediction(res.data)
    })
    .catch(err => {
      alert(err);
    })
  }

  const setFileAndImage = (file) => {
    setSelectedFile(file);
    setImage(URL.createObjectURL(file));
  }


  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/emotion">
          <TopBar title="Spotify Playlist Generator"/>
          <EMOTION/> 
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      </div>
    </Router>

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

export default App;
