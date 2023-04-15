import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/index";

// Components
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";
import Nav from "./Components/Nav";
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoID" element={<VideoPlayer />} />
      </Routes>
    </Provider>
  );
}

export default App;
