import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Footer from '../Layouts/Footer'
import Navbar from '../Layouts/Navbar'
import SideBar from '../Layouts/SideBar'

function EditTodo() {
    const [posts, setPosts] = useState([]);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('')

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://testapi.techenablers.info/api/show_task/${params.id}`, {
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('access_token')
            }
        })
            .then(resp => {
                setPosts(resp.data[0]);
                setName(resp.data[0].name);
                setStatus(resp.data[0].status);

            })
    }, [])

    const addTodo = (e) => {
        e.preventDefault()
        const data = { name, status } 
        axios.put(`http://testapi.techenablers.info/api/update_task/${params.id}`, data, {
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('access_token'),
            }
        })
            .then(function (response) {
                navigate('/Todo')
                setName("");
                setStatus("");
                setPosts([...posts, response.data[0]]);

            })
            
            .catch(function (error) {
                console.log(error);
            });
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
                                <h1>Edit Todo</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Edit Todo</li>
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
                                                <input type="text" className="form-control" placeholder="Name" onChange={(e) => { setName(e.target.value) }} value={name} />
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className="form-group">
                                                <label>Enter Status</label>
                                                <input type="text" className="form-control" placeholder="Status" onChange={(e) => { setStatus(e.target.value) }} value={status} />
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary" onClick={(e) => { addTodo(e) }}>Submit</button>
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

export default EditTodo