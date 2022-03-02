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

function App() {

  return (
    <div>
      <Topbar />
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/posts" element={<Aposts />} />
        <Route path="/post/" element={<Single />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}

        {/* <Route path="/write" element={<Login />} /> */}
        {/* <Route path="/settings" element={<Login />} /> */}
      </Routes >
    </div>
  );
}

export default App;
