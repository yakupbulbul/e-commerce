import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate
} from "react-router-dom";
// import Navbar from "./components/Navbar";


import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";

//Category
import Category from "./pages/Categories/Category";
import AddCategory from "./pages/Categories/AddCategory";
import UpdateCategory from "./pages/Categories/UpdateCategory";

//Collection

import Colection from "./pages/Colections/Colection";
import AddColection from "./pages/Colections/AddColection";
import UpdateColection from "./pages/Colections/UpdateColection";

// Urun

import Product from "./pages/Products/Product";
import AddProduct from "./pages/Products/AddProduct";
import UpdateProduct from "./pages/Products/UpdateProduct";

//User

import Users from "./pages/Users/Users";



import "./style.scss";
import { AuthContext } from "./context/authContext";
import { useContext, useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate(); // move the hook inside this component

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  return (
    <>
      <div className="sidebar">
        <Sidebar />
      </div>
      {/* <Navbar/> */}
      <Outlet/>
      {/* <Footer/> */}
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/post/:id",
          element: <Single/>,
        },
      
        {
          path: "/cat/:id",
          element: <Single/>,
        },
        {
          path: "/write",
          element: <Write/>,
        },
        {
          path: "/cats",
          element: <Category/>,
        },
        {
          path: "/addcat",
          element: <AddCategory/>,
        },
        {
          path: "/update/cat/:id",
          element: <UpdateCategory/>,
        },
        {
          path: "/colections",
          element: <Colection/>,
        },
        {
          path: "/addcolection",
          element: <AddColection/>,
        },
        {
          path: "/update/colection/:id",
          element: <UpdateColection/>,
        },
        {
          path: "/products",
          element: <Product/>,
        },
        {
          path: "/addproduct",
          element: <AddProduct/>,
        },
        {
          path: "/update/product/:id",
          element: <UpdateProduct/>,
        },
        {
          path: "/users",
          element: <Users/>,
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
