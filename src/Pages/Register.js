import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [next, setNext] = useState();
  const navigate = useNavigate();

  let payload ={
    name : name,
    email : email,
    password : password,
    password_confirmation : next
  }

  function signUp(e){
    e.preventDefault();
    axios.post('http://testapi.techenablers.info/api/auth/register',payload)
    .then((resp)=>{
      console.log(resp.data.data);
      // setName(resp.data.name);
      // setEmail(resp.data.email);
      // setPassword(resp.data.password);
      // setNext(resp.data.comfirm_Password);
      navigate('/Cars')
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              {/* <div className="container-image">
             <img src='./asset/img/a.png' alt="profile" className="profile"/>

           </div> */}


            </div>
            <div className='Register'>
              <h1>Register Page</h1>
              <div>
                {/* <img src='./asset/img/email.jpg' alt="email" className="email"/> */}
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="login-input" />
              </div>
              <div className='second-input'>
                {/* <img src='./asset/img/email.jpg' alt="email" className="email"/> */}
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="login-input" />
              </div>
              <div className="second-input">
                {/* <img src='./asset/img/pass.png' alt="pass" className="email"/> */}
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="login-input" />
              </div>
              <div className="second-input">
                
                <input type="password" value={next} onChange={(e) => setNext(e.target.value)} placeholder="Confirm Password" className="login-input" />
              </div>
              <div className="login-button">
                <button className='login-btnn' onClick={signUp}>Register</button>
              </div>

              {/* <p className="link">
              <a className='login-txt'>If you are not register</a> Click <Link className='login-btn' to="login">Register</Link>
          </p> */}


            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Register