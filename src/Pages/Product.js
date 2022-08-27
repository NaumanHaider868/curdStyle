import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Footer from '../Layouts/Footer'
import Navbar from '../Layouts/Navbar'
import SideBar from '../Layouts/SideBar'
import axios from 'axios'

function Product() {
    const [Products, setProducts] = useState([]);
    const navigate = useNavigate();
    
    function GetProducts() {
        axios.get('http://testapi.techenablers.info/api/products', {
            headers: {
                Authorization: `Bearer` + localStorage.getItem('access_token')
            }
        })
            .then((res) => {
                console.log(res.data)
                setProducts(res.data[0].data)
            })
    }

    useEffect(() => {
        GetProducts()
    }, []);

    const editProduct = (id) => {
        navigate('/EditProduct/' + id)
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
                                <h1>Product</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Product</li>
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
                                        <h3 className="card-title">Product</h3>
                                    </div>
                                    <div className="card-header">
                                    <Link to='/AddProduct'><button type="button" className="btn btn-primary">Add Product</button></Link>
                                    </div>
                                    <div className="card-header">
                                        <table id="example2" className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>

                                                    <th>category</th>

                                                    <th>Price</th>

                                                    <th>Edit</th>
                                                </tr>
                                            </thead>

                                            {Products.map((product, index) => {
                                                return (
                                                    <tr key={index}>

                                                        <td>{product.name}</td>

                                                        <td>{product.category}</td>

                                                        <td>{product.price}</td>

                                                        <td onClick={() => editProduct(product.id)}><i class="fas fa-pencil-alt"></i></td>

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

export default Product