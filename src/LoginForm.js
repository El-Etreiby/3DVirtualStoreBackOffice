import React, { useState } from 'react';
import SignupForm from './SignupForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid, TextField, Button, InputAdornment, Link } from '@material-ui/core';
import homeImage from './images/homeImage.jpeg'
import logo from './images/logo.png'
import { LockRounded } from "@material-ui/icons"
import EmailIcon from '@mui/icons-material/Email';

function LoginForm() {

  const navigate = useNavigate();
  // const [details, setDetails] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const [error, setError] = useState("");


  const Login = async (event) => {
    setError("");
    
   
    let data = { email: email, password: password };
   
    let response = await axios.post('http://localhost:2000/api/user/signin', data)
      .then(response => {
        console.log(response);
        if (response.data.statusCode == 1) {
          console.group("status code 1");
          setError(response.data.message);
          return;
        } else {
          navigate(`/${response.data.data.username}`, { state: data });
        }

      }
      );

  }
  const submitHandler = e => {
    e.preventDefault();

    console.log("submitted");
    Login(e);
  }

  const signupPage = e => {
    navigate("/signup");
  }

  return (
    <div>
      {(error != "") ? (
        <div className="error">{error}</div>
      ) :
        ""
      }
      <div>
        <Grid container style={{ minHeight: "100vh" }}>
          <Grid item xs={12} sm={6}>
            <img
              src={homeImage}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="brand"
            />
          </Grid>
          <Grid container item xs={12} sm={6} alignItems="center" direction="column" justify="space-between" style={{ padding: 10 }}>
            <div />
            <div style={{ display: "flex", flexDirection: "column", maxWidth: 400, minWidth: 300, }}>
              <Grid container justify="center">
                <img
                  src={logo}
                  width={200}
                  alt="logo"
                />
              </Grid>
              <TextField type="email" label="email" margin="normal" onChange={e => setEmail(e.target.value)} InputProps={{ startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>}} />
              <TextField type="password" label="password" onChange={e => setPassword(e.target.value)} margin="normal" InputProps={{ startAdornment: <InputAdornment position="start">< LockRounded/></InputAdornment>}}/>
              <div style={{ height: 20 }} />
              <Button color="primary" variant="contained" onClick={(event) => { submitHandler(event) }}>
                Login
              </Button>
              <div style={{ height: 20 }} />
              <span>
              Not a user? 
              <span> </span>  
              <Link href="/signup" >
                sign up.
              </Link>
              </span>
            </div>
            <Grid container justify="center" spacing={2}>
             
          </Grid>
        </Grid>
        </Grid>
      </div>


      {/* <form onSubmit = {submitHandler}>
      <div className="form-inner">
          <h2>Login</h2>
             
           <div className="form-group">
           <label htmlFor="email">Email:</label>
           <input type="email" name="email" id="email" onChange = {e => setDetails({...details, email: e.target.value})} value={details.email}/>
             </div> 
             
           <div className="form-group">
           <label htmlFor="password">Password:</label>
           <input type="password" name="password" id="password" onChange = {e => setDetails({...details, password: e.target.value})} value={details.password} />
             </div>  
             <input type="submit" value = "login"/>
              <div className="not-a-user"> Not a user? 
              <Link to = "/signup" style={{ textDecoration: 'none' }}> 
                    <button onClick={signupPage}>
                 signup 
                      </button> 
                      </Link>
      </div>
      </div>
  
    </form> */}
    </div>
  )
}

export default LoginForm;