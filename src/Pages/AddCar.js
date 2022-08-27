import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Layouts/Footer'
import Navbar from '../Layouts/Navbar'
import SideBar from '../Layouts/SideBar'
import axios from 'axios';

function AddCar() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [model, setModel] = useState("");
    const [color, setColor] = useState("");
    const [image,setImage] = useState(null);
    const [price, setPrice] = useState();

    async function addCar(e){
        const formData = new FormData();
        formData.append('name',name);
        formData.append('company',company);
        formData.append('model',model);
        formData.append('color',color);
        formData.append('image',image);
        formData.append('price',price);

        e.preventDefault();
        navigate('/Cars')
        axios.post('http://testapi.techenablers.info/api/car',formData,{
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('access_token'),
                'Content-type': 'application/json'
            }
        }).then((response)=>{
            response.json();
            console.log(response.data);
        }).catch((error)=>{
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
                <h1>Add Car</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Add Car</li>
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
                        <input type="text" className="form-control" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
                      </div>
                    </div>
                      <div className='col-sm-6'>
                      <div className="form-group">
                        <label>Company</label>
                        <input type="text" className="form-control" placeholder="Company" onChange={(e) => { setCompany(e.target.value) }} />
                      </div>
                      </div>
                      <div className='col-sm-6'>
                      <div className="form-group">
                        <label>Model</label>
                        <input type="text" className="form-control" placeholder="Model" onChange={(e) => { setModel(e.target.value) }} />
                      </div>
                      </div>
                      <div className='col-sm-6'>
                      <div className="form-group">
                        <label>Image</label><br />
                        <input type="file" accept="image/*" multiple={true} onChange={(e) => { setImage(e.target.files[0]) }} />
                      </div>
                      </div>
                      <div className='col-sm-6'>
                      <div className="form-group">
                        <label>Color</label>
                        <input type="text" className="form-control" placeholder="Color" onChange={(e) => { setColor(e.target.value) }} />
                      </div>
                      </div>
                      <div className='col-sm-6'>
                      <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="form-control" placeholder="Price" onChange={(e) => { setPrice(e.target.value) }} />
                      </div>
                      </div>
                    

                    <div className="card" style={{marginLeft: '10px'}}>
                      <button type="submit" onClick={addCar} className="btn btn-primary">Submit</button>
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

export default AddCar