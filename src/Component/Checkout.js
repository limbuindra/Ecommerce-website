import React from "react";

const Checkout = () => {
	return (
		<>
			<form>
				<h1>Checkout</h1>
				<label htmlFor="cardNumber">
					Card Number:
					<input type="text" name="cardNumber" />
				</label>
                <br />
				<label htmlFor="cardNumber">
					Expiration Date:
					<input type="text" name="cardNumber" />
				</label>
                <br />
				<label htmlFor="cardNumber">
					Security Code:
					<input type="text" name="cardNumber" />
				</label>
                <br />
                <button type="submit">Purchase</button>
			</form>
		</>
	);
};

export default Checkout;
