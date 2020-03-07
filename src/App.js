import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import {BrowserRouter as Router,Route} from'react-router-dom'
import Navbar from './components/Navbar'
import createPost from './components/createPost'
import editPost from './components/editPost'
import listPost from './components/listPost';
import deletePost from './components/deletePost'

function App() {
  
  return (
    <Router>
    <div className="container">
      <Navbar/>
    <Route path="/create" exact component={createPost}/>
    <Route path="/edit/:id" exact component={editPost}/>
    <Route path="/delete/:id" exact component={deletePost}/>
    <Route path="/" exact component={listPost}/>
    </div>
  </Router>
    
  );
}

export default App;
