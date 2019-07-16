import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
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
								/>
							</div>
						</form>
      </Modal.Body>

    </Modal>
  );
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