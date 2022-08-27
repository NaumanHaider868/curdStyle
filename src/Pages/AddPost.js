import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Layouts/Footer'
import Navbar from '../Layouts/Navbar'
import SideBar from '../Layouts/SideBar'
import axios from 'axios';

function AddPost() {

    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    async function addPost(e) {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        e.preventDefault();
        navigate('/Post');
        axios.post('http://testapi.techenablers.info/api/post', formData, {
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('access_token'),
                'Content-type': 'application/json'
            }
        })
            .then((resp) => {
                console.log(resp)
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
                                <h1>Add Post</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Add Post</li>
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
                                                <input type="text" className="form-control" placeholder="Title" onChange={(e) => { setTitle(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className="form-group">
                                                <label>Body</label>
                                                <input type="text" className="form-control" placeholder="Body" onChange={(e) => { setBody(e.target.value) }} />
                                            </div>
                                        </div>

                                        <div className="card" style={{marginLeft: '10px'}}>
                                            <button type="submit" onClick={addPost} className="btn btn-primary">Submit</button>
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

export default AddPost