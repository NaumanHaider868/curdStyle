import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Footer from '../Layouts/Footer'
import Navbar from '../Layouts/Navbar'
import SideBar from '../Layouts/SideBar'

function Todo() {
    const [Todos, setTodo] = useState([]);

    const navigate = useNavigate();

    const editTodos = (id) => {
        navigate('/EditTodo/' + id)
    }

    function GetTodos() {
        axios.get('http://testapi.techenablers.info/api/tasks', {
            headers: {
                Authorization: `Bearer` + localStorage.getItem('access_token')
            }
        })
            .then((res) => {
                setTodo(res.data[0])
            })
    }

    useEffect(() => {
        GetTodos()
    }, []);

    function deleteTodos(id) {
        fetch(`http://testapi.techenablers.info/api/delete_task/${id}`, {
            headers: {
                Authorization: `Bearer` + localStorage.getItem('access_token')
            },
            method: 'DELETE'
        }).then((reuslt) => {
            reuslt.json().then((resp) => {
                console.log(resp)
                GetTodos()
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
                                <h1>Todo</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Todo</li>
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
                                        <h3 className="card-title">Todo</h3>
                                    </div>
                                    <div className="card-header">
                                        <Link to='/AddTodo'><button type="button" className="btn btn-primary">Add Todo</button></Link>
                                    </div>
                                    <div className="card-header">
                                        <table id="example2" className="table table-bordered table-hover">
                                            <thead>
                                                <tr>

                                                    <th>Name</th>

                                                    <th>Status</th>

                                                    <th>Edit</th>

                                                    <th>Delete</th>

                                                </tr>
                                            </thead>

                                            {Todos.map((todo, index) => {
                                                return (
                                                    <tr key={index}>

                                                        <td>{todo.name}</td>

                                                        <td>{todo.status}</td>

                                                        <td  onClick={() => editTodos(todo.id)}><i class="fas fa-pencil-alt"></i></td>

                                                        <td onClick={() => deleteTodos(todo.id)}><i class="fas fa-trash"></i></td>

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

export default Todo