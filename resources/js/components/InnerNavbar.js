import React from 'react';
import AddItem from "./pathComponents/components Assets/AddItem";
import {Link, Route,BrowserRouter as Router} from 'react-router-dom'
import AllItems from "./pathComponents/components Assets/AllItems";
import RemoveItem from "./pathComponents/components Assets/RemoveItem";
import EditItem from "./pathComponents/components Assets/EditItem";
import Nav from 'react-bootstrap/Nav'
import innerNav from './CSS/innerNav.css'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/ButtonGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'

import AddBrandAndCategory from "./pathComponents/components Assets/AddBrandAndCategory";


function InnerNavbar(){
    return (
        <>
            <Router>
                <div style={{width:"1436px",marginTop:"24.5px",borderRadius:"15%"}}>
                    <Navbar bg="dark" variant="dark">
                        <Nav className="mr-auto">
                        <Nav.Link ><Link  className="links" to="/allItem">List item</Link></Nav.Link>
                            <Nav.Link ><Link  className="links" to="/addItem">Add item</Link></Nav.Link>
                            <Nav.Link ><Link  className="links" to="/removeItem">Remove item</Link></Nav.Link>
                            <Nav.Link ><Link  className="links" to="/editItem">Edit item</Link></Nav.Link>
                            <Nav.Link ><Link  className="links" to="/addFields">Add category & brand</Link></Nav.Link>
                        </Nav>

                    </Navbar>
                </div>
       <div>


       </div>

            <div>
                <Route exact path="/allItem" component={AllItems}/>
                <Route  path="/addItem" component={AddItem}/>
                <Route  path="/removeItem" component={RemoveItem}/>
                <Route  path="/editItem" component={EditItem}/>
                <Route  path="/addFields" component={AddBrandAndCategory}/>
            </div>
            </Router>
        </>
        )

    }
    export default InnerNavbar;
