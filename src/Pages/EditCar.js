import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Footer from '../Layouts/Footer'
import Navbar from '../Layouts/Navbar'
import SideBar from '../Layouts/SideBar'


function EditCar() {

  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://testapi.techenablers.info/api/car/${params.id}`, {
      headers: {
        Authorization: 'Bearer' + localStorage.getItem('access_token')
      }
    })
      .then(resp => {
        setPosts(resp.data[0]);
        setName(resp.data[0].name);
        setCompany(resp.data[0].company);
        setModel(resp.data[0].model);
        setColor(resp.data[0].color);
        setPrice(resp.data[0].price);
        setImage(resp.data[0].image);
      })
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    navigate('/Cars')
    const data = { name, company, model, color, price, image }
    console.log(data)
    axios.put(`http://testapi.techenablers.info/api/car/${params.id}`, data, {
      headers: {
        Authorization: 'Bearer' + localStorage.getItem('access_token')
      }
    })
      .then(function (response) {

        setName("");
        setCompany("");
        setModel("");
        setColor("");
        setPrice("");
        setImage()
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
                <h1>Edit Car</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Edit Car</li>
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
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name" onChange={(e) => { setName(e.target.value) }} value={name} />
                      </div>
                    </div>
                      <div className='col-sm-6'>
                      <div className="form-group">
                        <label>Company</label>
                        <input type="text" className="form-control" placeholder="Company" onChange={(e) => { setCompany(e.target.value) }} value={company} />
                      </div>
                      </div>
                      <div className='col-sm-6'>
                      <div className="form-group">
                        <label>Model</label>
                        <input type="text" className="form-control" placeholder="Model" onChange={(e) => { setModel(e.target.value) }} value={model} />
                      </div>
                      </div>
                      <div className='col-sm-6'>
                      <div className="form-group">
                        <label>Image</label><br />
                        <input type="file" onChange={(e) => { setImage(e.target.value) }} />
                      </div>
                      </div>
                      <div className='col-sm-6'>
                      <div className="form-group">
                        <label>Color</label>
                        <input type="text" className="form-control" placeholder="Color" onChange={(e) => { setColor(e.target.value) }} value={color} />
                      </div>
                      </div>
                      <div className='col-sm-6'>
                      <div className="form-group">
                        <label>Price</label>
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

export default EditCar