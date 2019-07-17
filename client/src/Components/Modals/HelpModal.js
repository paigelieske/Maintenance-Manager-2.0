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
					Help
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
                    This is a space to type a tutorial and/or add in a video of gif of how to use the New Task options.
                </p>
			</Modal.Body>
		</Modal>
	);
}

function HelpModal() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<ButtonToolbar>
			<Button
				className="help-button"
				variant="primary"
				onClick={() => setModalShow(true)}
			>
				Help
			</Button>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</ButtonToolbar>
	);
}

export default HelpModal;
