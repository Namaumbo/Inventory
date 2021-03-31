import React from 'react'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import AllClients from "./components Assets/clientComponent/AllClients";
import AddClient from "./components Assets/clientComponent/AddClient";
import RemoveClient from "./components Assets/clientComponent/RemoveClient";
import EditClient from "./components Assets/clientComponent/EditClient";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/ButtonGroup";
function UserInnerNav(){
    return(
        <>
            <Router>

                <div style={{width:"1436px",marginTop:"24.5px",borderRadius:"15%"}}>
                    <Navbar bg="dark" variant="dark">
                        <Nav className="mr-auto">
                            <Nav.Link ><Link  className="links" to="/allClients">Overview</Link></Nav.Link>
                            <Nav.Link ><Link  className="links" to="/addClient">add </Link></Nav.Link>
                            <Nav.Link ><Link className="links" to="/removeClient">Remove client</Link></Nav.Link>
                            <Nav.Link > <Link className="links" to="/editClient">Edit client</Link></Nav.Link>
                        </Nav>
                    </Navbar>
                </div>

                <div>
                    <Route exact path="/allClients" component={AllClients}/>
                    <Route  path="/addClient" component={AddClient}/>
                    <Route  path="/removeClient" component={RemoveClient}/>
                    <Route  path="/editClient" component={EditClient}/>
                </div>
            </Router>
        </>
    )
}
export default UserInnerNav;
