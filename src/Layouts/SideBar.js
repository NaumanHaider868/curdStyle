import React from 'react';
import { Link, useNavigate } from "react-router-dom"


function SideBar() {
    const navigate = useNavigate();
    function logout(){
        localStorage.clear()
        navigate('/')
    }
    return (

        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a className="brand-link">
                    <img src="../asset/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '0.8' }} />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="../asset/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>

                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <Link to='/Cars' style={{color:'black'}}>
                                    <a className="nav-link">
                                        <p>
                                            Cars
                                        </p>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Post' style={{color:'black'}}>
                                    <a className="nav-link">
                                        <p>
                                            Post
                                        </p>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Product' style={{color:'black'}}>
                                    <a className="nav-link">
                                        <p>
                                            Product
                                        </p>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Todo' style={{color:'black'}}>
                                    <a className="nav-link">
                                        <p>Todo</p>
                                    </a>
                                </Link>
                            </li>
                            <hr/>
                            <li className="nav-item">
                                <Link to='/Profile' style={{color:'black'}}>
                                    <a className="nav-link">
                                        <p>Profile</p>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                
                                    <a className="nav-link">
                                        <p onClick={logout}>LogOut</p>
                                    </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            <aside className="control-sidebar control-sidebar-dark">
                {/* <!-- Control sidebar content goes here --> */}
            </aside>
        </>





    )
}

export default SideBar