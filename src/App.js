import React from 'react';

import Header from "./components/Header"
import VideoContainer from "./components/VideoContainer"
import Controller from "./components/Controller"


function App() {
    return (
        <div className="flex flex-col h-full">
        <Header />
        <VideoContainer />
        <Controller />
        </div>
  );
}

export default App;
