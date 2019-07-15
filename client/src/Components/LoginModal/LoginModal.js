import React, { Component } from 'react';

class LoginModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHidden: false
		};
	}

	showModal = (e) => {
		this.setState({
			isHidden: true
		});
	};

	hideModal = (e) => {
		this.setState({
			isHidden: false
		});
	};

	render() {
		return (
            <div id="click-to-login">
                    <button 
						id="button-for-login"
						onClick={this.showModal}
					>
						Login
					</button>
			<div className="bg-modal">
				
				<div className="modal-content">
					<form
						action="/login"
						method="post"
						className="passport-form"
					>
						<div className="username">
							<label>Username:</label>
							<input
								type="text"
								name="username"
								id="username-form"
							/>
						</div>
						<div className="password">
							<label>Password:</label>
							<input
								type="password"
								name="password"
								id="password-form"
							/>
						</div>
						<div id="login-btn">
							<input
								type="submit"
								value="Log In"
								id="submit-form"
								onClick={this.hideModal}
							/>
						</div>
					</form>
				</div>
			</div>
            </div>
		);
	}
}

export default LoginModal;