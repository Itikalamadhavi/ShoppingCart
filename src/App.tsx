import React from 'react';
import './App.css';
import { Navigation } from './Navigation/Navigation';
import { ImageCards } from './ImageCards/ImageCards';
import { Login } from './Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<ImageCards />} />
      </Routes>
    </Router>
  );
}

export default App;
