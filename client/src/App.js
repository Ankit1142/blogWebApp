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
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/Update';
// import Banner from './components/home/Banner';
// import Categories from './components/home/Categories';
function App() {
  return (
     <BrowserRouter>
       <Header/>
       <Box style={{marginTop:64}}>
       <Routes>
          <Route exact path='/' element= {<Home/>}/>
          <Route exact path='/details/:id'  element={<DetailView/>}/>
          <Route exact path='/create'  element={<CreateView/>}/>
          <Route exact path='/update/:id'  element={<UpdateView/>}/>
        </Routes>
       </Box>
     </BrowserRouter>
  );
}
export default App;
