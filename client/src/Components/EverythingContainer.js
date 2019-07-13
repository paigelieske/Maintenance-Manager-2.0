import React from "react";


function EverythingContainer({ children }) {
    return (
        <div id="everthing-container">
            <div className="row text-center">
                {children}
            </div>
        </div>
    );
}

export default EverythingContainer;