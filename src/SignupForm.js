import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import signupImage from './images/signupImage.png';
import { Grid, TextField, Button, InputAdornment, Link } from '@material-ui/core';
import logo from './images/logo.png'
import { AccountCircle, LockRounded } from "@material-ui/icons"
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

function SignupForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

  const submitHandler = async(e) =>{
      e.preventDefault();
  
    console.log(1);
    const data = {firstName:firstName, lastName:lastName, phone:phone, username:username, email:email, password:password };
    let response = await axios.post('http://localhost:2000/api/user/signup', data)
        .then(response => {
          console.log("in");
            if(response.statusCode==1){
              console.log("status code error");
                setError(response.message);
                return;
            }else{
              console.log("data");
              console.log(data);
              navigate(`/${data.username}`,{state:data});
            }

        }
            );
      console.log("submitted");
     
    }
  return (

    <div>
        <Grid container style={{ minHeight: "100vh" }}>
          <Grid item xs={12} sm={6}>
            <img
              src={signupImage}
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
              <TextField label="first name" margin="normal" onChange={e => setFirstName(e.target.value)} InputProps={{ startAdornment: <InputAdornment position="start">< BadgeIcon/></InputAdornment>}}/>
              <TextField label="last name" margin="normal" onChange={e => setLastName(e.target.value)} InputProps={{ startAdornment: <InputAdornment position="start">< BadgeIcon/></InputAdornment>}}/>
              <TextField type="number" label="phone number" onChange={e => setPhone(e.target.value)} margin="normal" InputProps={{ startAdornment: <InputAdornment position="start">< ContactPhoneIcon/></InputAdornment>}}/>
              <TextField label="username" margin="normal" onChange={e => setUsername(e.target.value)} InputProps={{ startAdornment: <InputAdornment position="start">< AccountCircle/></InputAdornment>}}/>
              <TextField type="email" label="email" margin="normal" onChange={e => setEmail(e.target.value)} InputProps={{ startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>}} />
              <TextField type="password" label="password" onChange={e => setPassword(e.target.value)} margin="normal" InputProps={{ startAdornment: <InputAdornment position="start">< LockRounded/></InputAdornment>}}/>
             
              <div style={{ height: 20 }} />
              <Button color="primary" variant="contained" onClick={(event) => { submitHandler(event) }}>
                Sign up
              </Button>
           
            </div>
            <Grid container justify="center" spacing={2}>
              
          </Grid>
        </Grid>
        </Grid>
      </div>


  )
}

export default SignupForm