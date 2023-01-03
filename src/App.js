import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Products from "./Component/Products";
import ProductDetails from "./Component/ProductDetails";
import Footer from "./Component/Footer";
import Cart from "./Component/Cart";
import Checkout from "./Component/Checkout";
const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/products" element={<Products />} />
				<Route path="/products/:id" element={<ProductDetails />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/checkout" element={<Checkout/>}/>
			</Routes>

			<Footer />
		</div>
	);
};

export default App;
