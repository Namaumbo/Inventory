import React from 'react';
import AddItem from "./pathComponents/components Assets/AddItem";
import {Link, Route,BrowserRouter as Router} from 'react-router-dom'
import AllItems from "./pathComponents/components Assets/AllItems";
// import AddItem from "./pathComponents/components Assets/AllItems";


function InnerNavbar(){
    return (
        <>
            <Router>
       <div>
           <ul className="nav nav-pills">
               <li className="nav-item">
                   <Link to="/allItems">ALL</Link>
               </li>
               <li className="nav-item">
                   <Link to="/addItem">ADD ITEM</Link>
               </li>
               <li className="nav-item">
                   <Link to="/removeItem">REMOVE ITEM</Link>
               </li>
               <li className="nav-item">
                   <Link to="/editItem">EDIT ITEM</Link>
               </li>
           </ul>
       </div>
            <div>
                <Route exact path="/allItems" component={AllItems}/>
                <Route  path="/addItem" component={AddItem}/>
            </div>
            </Router>
        </>
        )

    }
    export default InnerNavbar;
