import React from "react";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Category from "./components/category/Category";
import Orders from "./components/orders/Orders";
import Products from "./components/products/Products.js";
import Items from "./components/items/Items";
import AddItem from "./components/items/AddItem";
import EditItems from "./components/items/EditItems";
import AddCategory from "./components/category/AddCategory";
import EditCategory from "./components/category/EditCategory";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Dashboard />} />
          <Route path="/SignIn" element={< SignIn />} />
          <Route path="/SignUp" element={< SignUp />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/product" element={<Products />} />
          <Route path="/items" element={<Items />} />
          <Route path="/createitem" element={<AddItem />} />
          <Route path="/edititem" element={<EditItems />} />
          <Route path="/category" element={<Category />} />
          <Route path="/createcategory" element={<AddCategory />} />
          <Route path="/editcategory" element={<EditCategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};