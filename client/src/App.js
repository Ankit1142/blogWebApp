// import logo from './logo.svg';
// import './App.css';
// components
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Box} from '@material-ui/core';
// import Box from '@mui/material/Box';
import Header from './components/Header';
import Home from './components/home/Home';
import DetailView from './components/post/DetailView';
// import Banner from './components/home/Banner';
// import Categories from './components/home/Categories';
function App() {
  return (
     <BrowserRouter>
       <Header/>
       <Box style={{marginTop:64}}>
       <Routes>
          <Route exact path='/' component= {Home}/>
          <Route exact path='/details' component={DetailView}/>
        </Routes>
       </Box>
     </BrowserRouter>
  );
}
export default App;
