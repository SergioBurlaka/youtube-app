import React from 'react';
import './App.css';
import VideoPage from "./containers/videoPage";
import GlobalState from "./context/GlobalState";


function App() {
  return (
    <GlobalState>
       <div className="App">
      <VideoPage/>
      </div>
    </GlobalState>
   
  );
}

export default App;
