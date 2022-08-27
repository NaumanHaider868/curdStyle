import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Footer from '../Layouts/Footer'
import Navbar from '../Layouts/Navbar'
import SideBar from '../Layouts/SideBar'

function EditProduct() {
    const [posts, setPosts] = useState([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState();
    

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        axios.get(`http://testapi.techenablers.info/api/show_product/${params.id}`, {
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('access_token')
            }
        })
            .then(resp => {
                // console.log('resp.data[0].data', resp.data[0].name);
                setPosts(resp.data[0]);
                setName(resp.data[0].name);
                setPrice(resp.data[0].price);
                setCategory(resp.data[0].category);

            })
    }, [])

    const addTask = (e) => {
        e.preventDefault()
        const data = { name, category, price } // {"name": name }
        // console.log(data)
        axios.put(`http://testapi.techenablers.info/api/update_product/${params.id}`, data, {
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('access_token'),
            }
        })
            .then(function (response) {
                navigate('/Product')
                setName("");
                setCategory('');
                setPrice();
                setPosts([...posts, response.data[0]]);

            })
            // .then(function (resp){
            //     navigate('/CarPage')
            // })
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
                                <h1>Edit Product</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Edit Product</li>
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
                                                <label>Enter Price</label>
                                                <input type="text" className="form-control" placeholder="Category" onChange={(e) => { setCategory(e.target.value) }} value={category} />
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className="form-group">
                                                <label>Enter Price</label>
                                                <input type="text" className="form-control" placeholder="Price" onChange={(e) => { setPrice(e.target.value) }} value={price} />
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary" onClick={(e) => { addTask(e) }}>Submit</button>
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

export default EditProduct