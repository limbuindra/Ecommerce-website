import React from "react";
import {Link } from 'react-router-dom';
const About = () => {
	return (
		<div>
			<div className="container py-5 my-5">
				<div className="row">
					<div className="col-md-6">
						<h1 className="text-primary fw-bold mb-4">About Us</h1>
						<p className="lead mb-4">
             <b>Hello and welcome to We-Sell !</b> <br/><hr/> 
              We are We-Sell, a small but motivated company specializing in
               different products.
              We aim to offer our customers a variety of the latest products
              (Men's cloth, Women's cloth, Jewelery, Electronics).
              We've come a long way, so we know exactly which direction
              to take when supplying you with high quality ye budget-friendly 
              products.We offer all of this while providing excellent 
              customer service and friendly support.
              We always keep an eye on the latest trends in all men's
              cloth,Women's cloth ,Jewelery and put our customer's wishes
              first.The interests of our customers are always top priority for us,
              so we hopw you will enjoy our products as much as we enjoy
              making them available to you.  
      
               
						</p>
						<Link to="/contact" className="btn btn-outline-dark px-3">
							Contact Us
						</Link>
					</div>
          <div className="col-md-6 d-flex justify-content-center py-4">
            <img src="/images/img4.jpg" alt="image" height='400px' width='560px' />
          </div>
				</div>
			</div>
		</div>
	);
};

export default About;
