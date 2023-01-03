import React from "react";

const Signup = () => {
	return (
		<div>
			<button
				type="button"
				className="btn btn-outline-dark ms-2 my-2"
				data-bs-toggle="modal"
				data-bs-target="#signupModal"
			>
				<span className="fa fa-user-plus me-1"></span> Register
			</button>

			<div
				className="modal fade"
				id="signupModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
				aria-modal="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title fs-2 text-center"
								id="exampleModalLabel "
							>
								Register
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<button className="btn btn-outline-dark w-100 mb-4">
								<span className="fa fa-google me-2"></span>
								Sign up With Google
							</button>
							<button className="btn btn-outline-dark w-100 mb-4">
								<span className="fa fa-facebook me-2 "></span>
								Sign up With Facebook
							</button>
							<form>
								<div className="mb-3">
									<label htmlFor="exampleInput" className="form-label">Username</label>
									<input
										type="text"
										className="form-control"
										id="exampleInput"
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="email" className="form-label">
										Email address
									</label>
									<input
										type="email"
										className="form-control"
										id="email"
										aria-describedby="emailHelp2"
									/>
									<div id="emailHelp1" className="form-text">
										We'll never share your email with anyone else.
									</div>
								</div>
								<div className="mb-3">
									<label htmlFor="password" className="form-label">
										Password
									</label>
									<input
										type="password"
										className="form-control"
										id="password"
									/>
								</div>
								<div className="mb-3 form-check">
									<input
										type="checkbox"
										className="form-check-input"
										id="checkbox"
									/>
									<label className="form-check-label" htmlFor="checkbox">
										Check me out
									</label>
								</div>
								<button
									type="submit"
									className="btn btn-outline-dark w-100 mt-5"
								>
									Register
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
