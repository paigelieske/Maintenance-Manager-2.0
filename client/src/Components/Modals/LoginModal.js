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
		console.log(`login, username: ${this.state.username}`);

		axios.post("/login", {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response);
				if (response.status === 200 && response.data === "OK") {
					this.setState({ error: "User already logged in, please logout first!" }, () => {
						setTimeout(() => {
							this.setState({ error: "" });
						}, 5500)
					});

				}
				else if (response.status === 200 && response.data !== "OK") {
					this.props.onHide();
					sessionStorage.setItem("sessionUsername", response.data.username);
					window.location.reload();
					this.setState({
						username: "",
						password: ""
					});
				}
				else {
					this.setState({ error: "Incorrect Username or Password!" }, () => {
						setTimeout(() => {
							this.setState({ error: "" });
						}, 5500)
					});
				}
			})
			.catch(error => {
				this.setState({ error: "Incorrect Username or Password!" }, () => {
					setTimeout(() => {
						this.setState({ error: "" });
					}, 5500)
				});
				console.log(error);
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
						Sign In
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
								value="Log In"
								id="submit-form"
								onClick={this.handleSubmit}
							/>
						</div>
						{this.state.error ? <div className="login-error"><h6>{this.state.error}</h6></div> : null}
					</form>
				</Modal.Body>

			</Modal>
		);
	}
}

function LoginModal() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<ButtonToolbar>
			<Button
				className="login-button"
				variant="primary"
				onClick={() => setModalShow(true)}
			>
				Sign In
			</Button>


			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</ButtonToolbar>
	);
}

export default LoginModal;