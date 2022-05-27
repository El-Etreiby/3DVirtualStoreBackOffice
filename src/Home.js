import {React, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';
import LoginForm from './LoginForm';
import NavBar from './NavBar';
import axios from 'axios';

import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/core/Menu'

function Home() {
    
    const navigate = useNavigate();
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");


    

  return (
    <div className="App">
      {(error != "") ? (
        <div className="error">{error}</div>
      ) : 
      ""
      }
    <LoginForm/>
    </div>
  );
}

export default Home;
