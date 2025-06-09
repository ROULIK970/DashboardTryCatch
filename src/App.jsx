import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from 'react-router-dom'
import Category from "./components/Category/Category";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import Product from "./components/Product/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product/>} />
      </Route>
    </Routes>
  );
}

export default App;
