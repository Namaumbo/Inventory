import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import AllUsers from "./components Assets/statisticsComponent/AllUsers";
import Available from "./components Assets/statisticsComponent/ItemsAvailable";

function Statistics (){
    const [state , setState] = React.useState({
        name : ""
    })
    function handleAllChange(e) {
        setState({
            ...state,
            name : e .target.value
        })
    }

    return(
        <div>
            <Router>
            <div style={{width:"1436px",marginTop:"24.5px",borderRadius:"15%"}}>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link ><Link  className="links" to="/all-Users">Users</Link></Nav.Link>
                        <Nav.Link ><Link  className="links" to="/AllItems">Items</Link></Nav.Link>
                    </Nav>
                    <div style={{ display:"flex"}}>
                        <form className="row g-3">
                            <div className="col-12">

                                <input type="text"
                                       className="form-control"
                                       name="name"
                                       onChange={handleAllChange}
                                       value={state.name}
                                       placeholder ="search..."
                                />
                            </div>
                        </form>
                        <div style={{ marginLeft:"7px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </div>
                    </div>
                </Navbar>
            </div>
            <div>
                <Route exact path="/all-Users" component={AllUsers}/>
                <Route  path="/AllItems" component={Available}/>
            </div>
            </Router>

</div>
    )
}
export default Statistics;
