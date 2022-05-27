
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import UserPage from './UserPage';
function App() {  

  return (
   <Router>
     <Routes>
       <Route exact path="/" element= {<Home />} /> 
       <Route exact path="/:username" element= {<UserPage />} /> 
       <Route exact path="/login" element= {<LoginForm />} /> 
       <Route exact path="/signup" element= {<SignupForm />} /> 
     </Routes>
   </Router>
  );
}

export default App;
