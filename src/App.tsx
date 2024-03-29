import React from 'react';
import './App.css';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AddNewBlog from './pages/add-blog';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-blog' element={<AddNewBlog />} />
      </Routes>
    </div>
  );
}

export default App;
