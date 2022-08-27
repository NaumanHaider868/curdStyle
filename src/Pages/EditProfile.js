import React, {useState,useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import Footer from '../Layouts/Footer'
import SideBar from '../Layouts/SideBar'
import Navbar from '../Layouts/Navbar'

function EditProfile() {
    
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    // navigate('/Profile');

    const data = {name,email};
    function editProfile(){
        navigate('/Profile');
        axios.put('http://testapi.techenablers.info/api/auth/profile/update?name=Update profile&email=update@profile.com&password=123456&password_confirmation=123456',data,{
        headers:{
            Authorization : 'Bearer' + localStorage.getItem('access_token')
        }
    })
    .then((res)=>{
        setName(res.data.name);
        setEmail(res.data.email);
        setPosts(res.data);
        
    })
    }
  return (
    <>
    <Navbar />
        <SideBar />
        <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Profile</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Profile</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className='content'>
          <div className='container-fluid'>
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Quick Example</h3>
              </div>

              <form>
              <div className="card-body">
                
                  
                    
                    
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name" onChange={(e) => { setName(e.target.value) }} value={name} />
                      </div>
                    
                      
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Company" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                      </div>
                      
                    
                    
                    <div>
                      <button type="submit" onClick={editProfile} className="btn btn-primary">Save Profile</button>
                    </div>
                    
                  
                  </div>
                
              </form>

            </div>


          </div>
        </section>

        </div>
        <Footer />
    </>
  )
}

export default EditProfile