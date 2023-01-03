import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { delItem } from "./redux/actions";
import { Link } from "react-router-dom";

const Cart = () => {
	const state = useSelector((state) => state.addItem);
	const dispatch = useDispatch();

	const handleClose = (item) => {
		dispatch(delItem(item));
	};

	const cartItems = (cartItem) => {
		return (
			<div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
				<div className="container py-4">
					<button
						onClick={() => handleClose(cartItem)}
						className="btn-close float-end"
						aria-label="Close"
					></button>
					<div className="row justify-content-center">
						<div className="col-md-4">
							<img
								src={cartItem.image}
								alt={cartItem.title}
								heigh="180px"
								width="150px"
							/>
						</div>
						<div className="col-md-4">
							<h3>{cartItem.title}</h3>
							<p className="lead fw-bold">${cartItem.price}</p>
						</div>
					</div>
				</div>
			</div>
		);
	};
	const emptyCart = () => {
		return (
			<div className="px-4 my-5 bg-light rounded-3 py-5">
				<div className="container py-4">
					<div className="row text-center">
						<h3>Your Cart is Empty</h3>
					</div>
				</div>
			</div>
		);
	};

	const button = () => {
		return (
			<div className="container">
				<div className="row">
					<Link to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">
						Proceed To checkout
					</Link>
				</div>
			</div>
		);
	};

	return (
		<>
			{state.length === 0 && emptyCart()}
			{state.length !== 0 && state.map(cartItems)}
			{state.length !== 0 && button()}
		</>
	);
};

export default Cart;
