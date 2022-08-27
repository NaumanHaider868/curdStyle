import React, {useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const  handleChangeEmail = (e) =>{
    setEmail(e.target.value);
  }
  const  handleChangePassword = (e) =>{
    setPassword(e.target.value);
    console.log(password);  
  }
  const handleSubmit = (event) =>{
    // e.prevantDefault();
    event.preventDefault();
    let payload ={
      email : email,
      password : password
    }   
    console.log(payload)
    axios.post('http://testapi.techenablers.info/api/auth/login',payload)
    .then(result => {
      // navigate('CarPage');
      // navigate('TodoList');
      // navigate('ProductList');
      // navigate('PostList');
      navigate('/Profile');
      // navigate('Cars');
      localStorage.setItem('access_token', result.data.access_token);
    })
  }
  return (
    <div>
        <div className="login-main">
     <div className="login-sub-main">
       <div>
         <div className="imgs">
           {/* <div className="container-image">
             <img src='./asset/img/a.png' alt="profile" className="profile"/>

           </div> */}


         </div>
         <div>
           <h1>Login Page</h1>

           <div className='second-input'>
             {/* <img src='./asset/img/email.jpg' alt="email" className="email"/> */}
             <input type="text" placeholder="Email" className="login-input" name='email' onChange={handleChangeEmail}/>
           </div>
           <div className="second-input">
             {/* <img src='./asset/img/pass.png' alt="pass" className="email"/> */}
             <input type="password" placeholder="Password" className="login-input" name='password' onChange={handleChangePassword}/>
           </div>
           
          <div className="login-button">
          <button className='login-btnn' onClick={handleSubmit}>Login</button>
          </div>

          <p className="link">
              {/* <a className='login-txt'>If you are not register</a>  <a className='login-btn'>Login</a> */}
              <a className='login-txt'>If you dont have account click  <Link to='/Register' className='login-btn'>Register</Link></a>
              
          </p>
           
           
 
         </div>
       </div>
       

     </div>
    </div>
    </div>
  )
}

export default Login