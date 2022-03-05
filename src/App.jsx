// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Settings from "./pages/settings/Settings";
// import Write from "./pages/write/Write";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Single from "./pages/single/Single";
import { Route, Routes } from "react-router-dom";
import Aposts from "./pages/posts/Aposts";
import { GlobalStyle } from "./globalStyle";
import React from 'react'
import ScrollButton from "./components/scrolltotop/ScrollButton";




function App() {

  return (
    <div>
      <Topbar />
      <GlobalStyle />
      <Routes >
        <Route exact path="/" element={<Homepage />} />
        <Route path="/blogs" element={<Aposts />} />
        <Route path="/blog/" element={<Single />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}

        {/* <Route path="/write" element={<Login />} /> */}
        {/* <Route path="/settings" element={<Login />} /> */}
      </Routes >
      <ScrollButton />
    </div>
  );
}

export default App;
