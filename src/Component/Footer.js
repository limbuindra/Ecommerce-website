import React from "react";
import { BsFacebook, BsTwitter, BsGoogle, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="footer-col">
							<h4>company</h4>
							<ul>
								<li>
									<Link to="/about"> about us</Link>
								</li>
								<li>
									<Link to=""> our services</Link>
								</li>
								<li>
									<Link to=""> privacy policy</Link>
								</li>
								<li>
									<Link to=""> contact us</Link>
								</li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>get help</h4>
							<ul>
								<li>
									<Link to=""> FAQ</Link>
								</li>
								<li>
									<Link to=""> shipping</Link>
								</li>
								<li>
									<Link to=""> returns</Link>
								</li>
								<li>
									<Link to=""> order status</Link>
								</li>
								<li>
									<Link to=""> payment options</Link>
								</li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>online shop</h4>
							<ul>
								<li>
									<Link to=""> Men's clothing</Link>
								</li>
								<li>
									<Link to=""> Women's clothing</Link>
								</li>
								<li>
									<Link to=""> Jewelery</Link>
								</li>
								<li>
									<Link to=""> electronics</Link>
								</li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>follow us</h4>
							<div className="social-links">
								<Link to=""> 
									<BsFacebook />
								</Link>
								<Link to=""> 
									<BsTwitter />
								</Link>
								<Link to=""> 
									<BsGoogle />
								</Link>
								<Link to=""> 
									<BsInstagram />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
