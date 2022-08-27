import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Footer from '../Layouts/Footer'
import Navbar from '../Layouts/Navbar'
import SideBar from '../Layouts/SideBar'

function AddTodo() {
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [status,setStatus] = useState('');

    
    async function addTodo(e){
        const formData = new FormData();
        formData.append('name',name);
        formData.append('status',status);
        navigate('/Todo');
        e.preventDefault();
        axios.post('http://testapi.techenablers.info/api/add_task',formData,{
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('access_token'),
                'Content-type': 'application/json'
            }
        })
        // .then((response)=>{
        //     // response.json();
            
        //     // console.log(response.data);
        // }).catch((error)=>{
        //     console.log(error)
        // })
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
                                <h1>Add Todo</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Add Todo</li>
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
                                    <div className='row'>


                                        <div className='col-sm-6'>
                                            <div className="form-group">
                                                <label>Enter Name</label>
                                                <input type="text" className="form-control" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className="form-group">
                                                <label>Enter Status</label>
                                                <input type="text" className="form-control" placeholder="Status" onChange={(e) => { setStatus(e.target.value) }} />
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <button type="submit" onClick={addTodo} className="btn btn-primary">Submit</button>
                                        </div>
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

export default AddTodo