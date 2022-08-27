import React, { useState, useEffect } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import Footer from '../Layouts/Footer'
import Navbar from '../Layouts/Navbar'
import SideBar from '../Layouts/SideBar'
import axios from 'axios'

function Cars() {

    const [cars, setCars] = useState([]);
    const navigate = useNavigate();
    function editPage(id){
        navigate('/EditCar/' + id)
    }
    function GetCar(){
        axios.get('http://testapi.techenablers.info/api/car', {
            headers: {
                Authorization: `Bearer` + localStorage.getItem('access_token')
            }
        }).then((resp) => {
            setCars(resp.data[0].data)
        })
    }
    useEffect(() => {
        GetCar();
    },[])

    function deleteCars(id) {
        fetch(`http://testapi.techenablers.info/api/car/${id}`, {
            headers: {
                Authorization: `Bearer` + localStorage.getItem('access_token')
            },
            method: 'DELETE'
        }).then((reuslt) => {
            reuslt.json().then((resp) => {
                console.log(resp)
                GetCar()
            })
        })
    }

    return (
        <>
            <Navbar />
            <SideBar className='Car-side' />
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Cars</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Cars</li>
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
                                        <h3 className="card-title">Cars</h3>
                                    </div>
                                    <div className="card-header">
                                        <Link to='/AddCar'><button type="button" className="btn btn-primary">Add Cars</button></Link>
                                    </div>
                                    {/* <!-- /.card-header --> */}
                                    <div className="card-body">
                                        <table id="example2" className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Company</th>
                                                    <th>Modal</th>
                                                    <th>color</th>
                                                    <th>Price</th>
                                                    <th>Image</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>

                                            {cars.map((car, index) => {
                                                return (
                                                    <tr key={index}>

                                                        <td>{car.name}</td>

                                                        <td>{car.company}</td>

                                                        {/* <td>{car.status}</td> */}

                                                        <td>{car.model}</td>

                                                        {/* <td><img src='{car.image}'/></td> */}

                                                        <td>{car.color}</td>

                                                        <td>{car.price}</td>

                                                        <td><img scr={car.image} /></td>

                                                        {/* <td><button>Edit</button></td> */}
                                                        <td onClick={() => editPage(car.id)} ><i class="fas fa-pencil-alt"></i></td>

                                                        <td onClick={() => deleteCars(car.id)}><i class="fas fa-trash"></i></td>
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

export default Cars