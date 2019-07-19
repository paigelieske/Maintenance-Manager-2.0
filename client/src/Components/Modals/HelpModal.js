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
					Maintenance requests are organized into three categories: 
					<ul>
						<li>New Requests</li>
						<li>Scheduled, or pending requests</li>
						<li>Completed, or requests that have been deemed solved or excusable</li>
					</ul>
				</p>
				<p>
                    To begin submitting a new maintenance request, click "New Request" and follow the buttons that appear below to submit a maintenance order for a specific location of the facility. 
				</p>
				<p>
					Your request will be taken care of in order of which it was submitted, or by level of severity. Your request will be immediately sent to the building administrator via email and handled appropriately. Any additional questions regarding handling of maintenance and maintenance procedures can be addessed to Paige Lieske. 
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
