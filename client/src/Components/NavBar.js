import React from "react";

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href>Task Manager</a>
        <button className="navbar-toggler" data-toggle="collapse" ata-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" className="collapse navbar-collapse">
           <ul className="navbar-nav">
               <li id="nav-item-index" className="nav-item">
                   <a className="nav-link active" href="index.html">Home</a>
               </li>
            </ul> 
        </div>
    </nav>
);

export default NavBar;