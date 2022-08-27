import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Footer from '../Layouts/Footer'
import Navbar from '../Layouts/Navbar'
import SideBar from '../Layouts/SideBar'

function EditPost() {
    const [posts, setPost] = useState();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        axios.get(`http://testapi.techenablers.info/api/post/${params.id}`, {
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('access_token'),
            }
        })
            .then((resp) => {
                setPost(resp.data.data);
                setTitle(resp.data.data.title);
                setBody(resp.data.data.body)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    const addPost = (e) => {
        e.preventDefault();
        const data = { title, body }
        // console.log(data);
        axios.put(`http://testapi.techenablers.info/api/post/${params.id}`, data, {
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('access_token')
            }
        })
            .then((response) => {
                navigate('/Post');
                setTitle('');
                setBody('');
                setPost([...posts, response.data.data])
            })
            .catch((error) => {
                console.log(error)
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
                                <h1>Edit Post</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Edit Post</li>
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
                                                <label>Title</label>
                                                <input type="text" className="form-control" placeholder="Title" onChange={(e) => { setTitle(e.target.value) }} value={title} />
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className="form-group">
                                                <label>Body</label>
                                                <input type="text" className="form-control" placeholder="Body" onChange={(e) => { setBody(e.target.value) }} value={body} />
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary" onClick={(e) => { addPost(e) }}>Submit</button>
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

export default EditPost