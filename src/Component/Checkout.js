import React from "react";

const Checkout = () => {
	return (
		<>
		<div className="container my-5 py-5">

			<form>
				<h1 className="mb-5">Checkout</h1>
				<div>

				<label htmlFor="cardNumber">
					Card Number:
					<input type="text" name="cardNumber" />
				</label>
				</div>

                <br />
				<div>

				<label htmlFor="cardNumber">
					Expiration Date:
					<input type="text" name="cardNumber" />
				</label>
				</div>
                <br />
				<div>

				<label htmlFor="cardNumber">
					Security Code:
					<input type="text" name="cardNumber" />
				</label>
				</div>
                <br />
                <button className="btn btn-outline-dark" type="submit">Purchase</button>
			</form>
		</div>
		</>
	);
};

export default Checkout;
