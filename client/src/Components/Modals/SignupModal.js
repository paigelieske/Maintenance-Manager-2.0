import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import axios from 'axios';
import "./modal.css";

class MyVerticallyCenteredModal extends React.Component {
	state = {
		username: "",
		password: "",
		success: "",
		error: ""
	}

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
		console.log(`signup-form, username: ${this.state.username}`);

		axios.post("/signup", {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response);
				if (response.status === 200) {
					this.setState({ success: "Registration Successful!" }, () => {
						setTimeout(() => {
							this.props.onHide();
							this.setState({ success: "" });
							this.setState({
								username: "",
								password: ""
							})
						}, 2000)
					})
				}
				else {
					this.setState({ error: "User exists or Bad request!" }, () => {
						setTimeout(() => {
							this.setState({ error: "" });
						}, 5500)
					});
				}
			})
			.catch(error => {
				console.error(error);
				this.setState({ error: "User exists or Bad request!" }, () => {
					setTimeout(() => {
						this.setState({ error: "" });
					}, 5500)
				});
			})
	}

	render() {
		return (
			<Modal
				{...this.props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Register
        </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form
						method="POST"
						className="passport-form"
					>
						<div className="username">
							<label>Username:</label>
							<input
								type="text"
								name="username"
								id="username-form"
								value={this.state.username}
								onChange={this.handleChange}
							/>
						</div>
						<div className="password">
							<label>Password:</label>
							<input
								type="password"
								name="password"
								id="password-form"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>
						<div id="login-btn">
							<input
								type="submit"
								id="submit-form"
								value="Register"
								onClick={this.handleSubmit}
							// formaction="/signup"
							/>
						</div>
						{this.state.error ? <div className="login-error"><h6>{this.state.error}</h6></div> : null}
						{this.state.success ? <div className="signup-success"><h6>{this.state.success}</h6></div> : null}
					</form>
				</Modal.Body>
			</Modal>
		);
	}
}

function SignupModal() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<ButtonToolbar>
			<Button
				className="signup-button"
				variant="primary"
				onClick={() => setModalShow(true)}
			>
				Register
			</Button>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</ButtonToolbar>
	);
}

export default SignupModal;