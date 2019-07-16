import React from "react";
import "./EverythingContainer.css";
import Card from "react-bootstrap/Card";

function EverythingContainer({ children }) {
    return (
		<div id="everthing-container">
			<div className="row text-center">{children}</div>
		</div>
	);
}

export default EverythingContainer;