import './App.css';
import Login from './Components/Login/index';
import SignUp from './Components/SignUp/index';
import PasswordReset from './Components/Login/passwordReset';
import ForgotPassword from './Components/Login/forgotPassword';
import Home from './Components/Home/index'
import Items from './Components/Pages/Items/index';
import Scrap from './Components/Pages/Scrap/index';
import Resell from './Components/Pages/Resell/index';
import Reports from './Components/Pages/Reports/Reports/index';
import logo from './logo.svg';

// import Header from './Components/Layout/Header/index';
// import SideBar from './Components/Layout/SideBar/index';


import React from 'react';
// import { useEffect, useState } from 'react';

import { BrowserRouter, Route, Routes, useHistory } from 'react-router-dom';




function App() {
  return (



    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/passwordReset" element={<PasswordReset />} />
          {/* <Route path='/ForgotPassword/:id/:token' element={<ForgotPassword />} /> */}
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />

          <Route path="items" element={<Items />} />
          {/* <Route path="maintenance" element={<Maintenance />} /> */}
          <Route path="scrap" element={<Scrap />} />
          <Route path="resell" element={<Resell />} />
          <Route path="reports" element={<Reports />} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
          {/* <Route path="/items" element={<Items />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/scrap" element={<Scrap />} />
          <Route path="/resell" element={<Resell />} />
          <Route path="/reports" element={<Reports />} /> */}
        </Routes>
      </BrowserRouter>
    </div>

    // <div className="App">
    //   <Header />
    //   <SideBar />
    //   <Switch >
    //     <Route exact path="/">
    //       <Login />
    //     </Route>
    //     <Route exact path="/passwordReset">
    //       <PasswordReset />
    //     </Route>
    //     <Route exact path="/forgotPassword">
    //       <ForgotPassword />
    //     </Route>
    //     <Route exact path="/home">
    //       <Home />
    //     </Route>
    //     <Route exact path="/items">
    //       <Items />
    //     </Route>
    //     {/* <Route path="/items/:id">
    //       <Item />
    //     </Route> */}

    //     <Route exact path="/maintenance">
    //       <Maintenance />
    //     </Route>
    //     <Route exact path="/scrap">
    //       <Scrap />
    //     </Route>
    //     <Route exact path="/resell">
    //       <Resell />
    //     </Route>
    //     <Route exact path="/reports">
    //       <Reports />
    //     </Route>
    //   </Switch>
    // </div>

    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
