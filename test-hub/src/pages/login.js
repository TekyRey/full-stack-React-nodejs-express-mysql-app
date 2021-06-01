import React, {useState} from 'react';
import Axios from 'axios';
import './App.css';

function Login() {
//wewe agesa
  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')

//   var [loginStatus, setLoginStatus] = useState('')

  const register =()=>{
    Axios.post('http://localhost:5000/register', {
      username: usernameReg, 
      password: passwordReg
    }).then((response) =>{
      console.log(response);
    })
  };

//   const login =()=>{
//     Axios.post('http://localhost:5000/register', {
//       username: username, 
//       password: password
//     }).then((response) =>{
//       if(response.data.message){
//         setLoginStatus=(response.data.message)
//       }else{
//         setLoginStatus(response.data[0].username)
//       }
//       console.log(response.data);
//     })
//   };

  return (
    <div className="loginContainer">
      <label>Username:</label>
      <input
        type="text"
        onChange={(event) => {
          setUsernameReg(event.target.value);
        }}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(event) => {
          setPasswordReg(event.target.value);
        }}
      />

      <button onClick={register}> Login </button>
    </div>
  );
}

export default Login;
