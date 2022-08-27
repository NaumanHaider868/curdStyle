import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
import Footer from '../Layouts/Footer'
import Navbar from '../Layouts/Navbar'
import SideBar from '../Layouts/SideBar'

function AddProduct() {
  const [name,setName] = useState('');
        const [category,setCategory] = useState('');
        const [price,setPrice] = useState();
        const navigate = useNavigate();

        async function addProduct(e){
            const formData = new FormData();
            formData.append('name',name);
            formData.append('category',category);
            formData.append('price',price);
            navigate('/Product')
            e.preventDefault();
            axios.post('http://testapi.techenablers.info/api/add_product', formData,{
                headers: {
                    Authorization: 'Bearer' + localStorage.getItem('access_token'),
                    'Content-type': 'application/json'
                }
            })
            .then((resp)=>{
                console.log(resp)
            })
            .catch((error)=>{
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
                                <h1>Add Product</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Add Product</li>
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


                                            <div className="form-group">
                                                <label>Enter Name</label>
                                                <input type="text" className="form-control" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
                                            </div>
                                            <div className="form-group">
                                                <label>Enter Category</label>
                                                <input type="text" className="form-control" placeholder="Category" onChange={(e) => { setCategory(e.target.value) }} />
                                            </div>
                                            <div className="form-group">
                                                <label>Enter Price</label>
                                                <input type="text" className="form-control" placeholder="Price" onChange={(e) => { setPrice(e.target.value) }} />
                                            </div>
                                            <div className="card-footer" style={{backgroundColor: '#fff', padding: '0px'}}>
                                                <button type="submit" onClick={addProduct} className="btn btn-primary">Submit</button>
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

export default AddProduct