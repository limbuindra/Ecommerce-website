import React from "react";
import { Link } from "react-router-dom";
import Login from "../Buttons/Login";
import Signup from "../Buttons/Signup";
import Cart from "../Buttons/CartBtn";
import { useSelector } from "react-redux";

const Navbar = () => {
	return (
		<div className="sticky-top">
			<nav className="navbar  navbar-expand-lg navbar-light  bg-white py-3 shadow-sm ">
				<div className="container-fluid">
					<Link className="navbar-brand fw-bold fs-4 " to="/">
						We-Sell
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/products">
									Products
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">
									Contact
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									About Us
								</Link>
							</li>
						</ul>

						<Login />
						<Signup />
						<Cart />
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
