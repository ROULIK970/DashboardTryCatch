import { useState, useEffect } from "react";
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from 'react-router-dom'
import CategoryList from "./components/Category/CategoryList";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import ProductList from "./components/Product/ProductList";
import AddCategory from "./components/Category/AddCategory";
import AddProduct from "./components/Product/AddProduct";

function App() {
  
  const [categories, setCategories] = useState([]);
  
    // { id: 1, fullName: "Jon Snow", avatar:"", description: "He knows nothin'" },
    // { id: 2, fullName: "Cersei Lannister", avatar:"", description: "she knows somethin'" }
  

  const [products, setProducts] = useState([]);

  //  {
  //     id: 1,
  //     fullName: "Billy Earth",
  //     avatar: "",
  //     category: "Men's",
  //     price: "20",
  //     discount: "3",
  //     sold: "yes",
  //     tags: "blah",
  //     description: "Just a test",
  //   },
  //   {
  //     id: 2,
  //     fullName: "Killy Earth",
  //     avatar: "",
  //     category: "Women's",
  //     price: "20",
  //     discount: "3",
  //     sold: "yes",
  //     tags: "blahblah",
  //     description: "Just a test out",
  //   },
  

  useEffect(() => {
    try {
      axios
        .get("https://684677e37dbda7ee7aaf1e2b.mockapi.io/mock/category")
        .then((res) => setCategories(res.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      axios
        .get("https://684677e37dbda7ee7aaf1e2b.mockapi.io/mock/Products")
        .then((res) => setProducts(res.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/category" element={<CategoryList categories={categories}/>} />
        <Route path="/add-category" element={<AddCategory categories={categories} setCategories={setCategories}/>}/>
        <Route path="/product" element={<ProductList products={products}/>} />
        <Route path="/add-product" element={<AddProduct products={products} setProducts={setProducts}/>}/>
      </Route>
    </Routes>
  );
}

export default App;
