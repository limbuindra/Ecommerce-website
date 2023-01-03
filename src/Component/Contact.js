import React from "react";

const Contact = () => {
	return (
		<div>
			<div className="container mb-5">
				<div className="row">
					<div className="col-12 text-center py-5 my-4">
						<h1>Have Some Question?</h1>
						<hr />
					</div>
				</div>
				<div className="row">
					<div className="col-md-5 d-flex justify-content-center">
						<img
							src="/images/contact.jpg"
							alt="contact"
							height="300px"
							width="300px"
						/>
					</div>
					<div className="col-md-6">
						<form>
							<div className="mb-3">
								<label htmlFor="username" className="form-label">
									Username
								</label>
								<input
									type="text"
									className="form-control"
									id="username"
									placeholder="Username"
								/>
							</div>
              <div className="mb-3">
								<label htmlFor="emailname" className="form-label">
									Email address
								</label>
								<input
									type="email"
									className="form-control"
									id="emailname"
									placeholder="name@example.com"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="exampleForm" className="form-label">
									Example textarea
								</label>
								<textarea
									className="form-control"
									id="exampleForm"
									rows="4"
								></textarea>
							</div>
              <button type="submit" className="btn btn-outline-dark">Send Message</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
