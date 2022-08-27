import React, { useState, useEffect } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import Footer from '../Layouts/Footer'
import Navbar from '../Layouts/Navbar'
import SideBar from '../Layouts/SideBar'
import axios from 'axios'

function Post() {
    const [Posts, setPosts] = useState([]);
    const navigate = useNavigate();

    function editPost(id){
        navigate('/EditPost/' + id)
    }

    function GetPost(){
        axios.get('http://testapi.techenablers.info/api/posts', {
            headers: {
                Authorization: `Bearer` + localStorage.getItem('access_token')
            }
        })
            .then((resp) => {
                setPosts(resp.data.data)
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    useEffect(()=>{
       GetPost()
    },[]);

    function deletePost(id){
        fetch(`http://testapi.techenablers.info/api/post/${id}`,{
            headers: {
                Authorization: `Bearer` + localStorage.getItem('access_token')
            },
            method: 'DELETE'
        })
        .then((resp)=>{
            resp.json().then((response)=>{
                console.log(response);
                GetPost()
            })
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
                                <h1>Post</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Post</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Post</h3>
                                    </div>
                                    <div className="card-header">
                                        <Link to='/AddPost'><button type="button" className="btn btn-primary">Add Post</button></Link>
                                    </div>
                                    <div className="card-body">
                                        <table id="example2" className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Body</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>

                                            {Posts.map((post, index) => {
                                                return (
                                                    <tr key={index}>

                                                        <td>{post.title}</td>

                                                        <td>{post.body}</td>

                                                        <td onClick={() => editPost(post.id)} ><i class="fas fa-pencil-alt"></i></td>

                                                        <td onClick={() => deletePost(post.id)}><i class="fas fa-trash"></i></td>
                                                    </tr>
                                                )
                                            })}

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
    </>
  )
}

export default Post