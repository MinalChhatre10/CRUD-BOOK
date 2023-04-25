import axios from 'axios';
import React, { useState } from 'react'

const LoginAdmin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        axios.post("http://localhost:8800/login",{username,password})
        .then(res=> console.log(res))
        .catch(err=>console.log(err));
    }
  return (
    <div className="form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input type="text" name="username" onChange={e=>setUsername(e.target.value)} placeholder='UserName' />
      <input type="password" name="password" onChange={e=>setPassword(e.target.value)} placeholder='Password' />
       <button className="formButton" onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default LoginAdmin
