import React,{useEffect, useState} from 'react'
import Footer from '../Layouts/Footer'
import SideBar from '../Layouts/SideBar'
import Navbar from '../Layouts/Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Profile() {
    const [posts,setPosts] = useState([]);
    const [name,setName] = useState('');
    const [email,setEmail] = useState();
    
    
        useEffect(()=>{
            axios.get('http://testapi.techenablers.info/api/auth/profile',{
            headers : {
                Authorization : 'Bearer' + localStorage.getItem('access_token')
            }
        })
        .then((resp)=>{
            console.log(resp.data)
            setName(resp.data.name);
            setEmail(resp.data.email);
            setPosts([...posts, resp.data]);
        })
        },[])
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
                      
                    
                    <Link to='/EditProfile'>
                    <div>
                      <button type="submit" className="btn btn-primary">Edit Profile</button>
                    </div>
                    
                  </Link>
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

export default Profile