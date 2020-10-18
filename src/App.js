import React from 'react';
// import StyledForm from './styles'

import Header from "./components/Header"
import VideoWrapper from "./components/VideoWrapper"
import Controls from "./components/Controls"


function App() {
  return (
    <>
    <Header />
    <VideoWrapper />
    <Controls />
    {/* <StyledForm>
      <form>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </StyledForm> */}
    </>
  );
}

export default App;
