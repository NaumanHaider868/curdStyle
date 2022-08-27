import { Routes, Route } from "react-router-dom"
import Dashboard from './Pages/Dashboard';
import Cars from './Pages/Cars';
import EditCar from "./Pages/EditCar";
import Login from "./Pages/Login";
import AddCar from "./Pages/AddCar";
import Post from "./Pages/Post";
import EditPost from "./Pages/EditPost";
import AddPost from "./Pages/AddPost";
import Product from "./Pages/Product";
import EditProduct from "./Pages/EditProduct";
import Todo from "./Pages/Todo";
import EditTodo from "./Pages/EditTodo";
import AddTodo from "./Pages/AddTodo";
import AddProduct from "./Pages/AddProduct";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/EditProfile' element={<EditProfile/>} />
        <Route path='/Dashboard' element={<Dashboard/>} />

        <Route path='/Cars' element={<Cars/>} />
        <Route path='/EditCar/:id' element={<EditCar/>} />
        <Route path='/AddCar' element={<AddCar/>} />

        <Route path='/Post' element={<Post/>} />
        <Route path='/EditPost/:id' element={<EditPost/>} />
        <Route path='/AddPost' element={<AddPost/>} />

        <Route path='/Product' element={<Product/>} />
        <Route path='/EditProduct/:id' element={<EditProduct/>} />
        <Route path='/AddProduct' element={<AddProduct/>} />

        <Route path='/Todo' element={<Todo/>} />
        <Route path='/EditTodo/:id' element={<EditTodo/>} />
        <Route path='/AddTodo' element={<AddTodo/>} />
      </Routes>
      {/* <Dashboard/> */}
    </div>
  );
}

export default App;
