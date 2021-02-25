import React from 'react';
import AddItem from "./pathComponents/components Assets/AddItem";
import {Link, Route,BrowserRouter as Router} from 'react-router-dom'
import AllItems from "./pathComponents/components Assets/AllItems";
import RemoveItem from "./pathComponents/components Assets/RemoveItem";
import EditItem from "./pathComponents/components Assets/EditItem";
import innerNav from './CSS/innerNav.css'
import AddBrandAndCategory from "./pathComponents/components Assets/AddBrandAndCategory";


function InnerNavbar(){
    return (
        <>
            <Router>
       <div>
           <ul className="nav nav-pills">
               <li className="nav-link">
                   <Link to="/allItem">ALL</Link>
               </li>
               <li className="nav-link">
                   <Link to="/addItem">ADD ITEM</Link>
               </li>
               <li className="nav-link">
                   <Link to="/removeItem">REMOVE ITEM</Link>
               </li>
               <li className="nav-link">
                   <Link to="/editItem">EDIT ITEM</Link>
               </li>
               <li className="nav-link">
                   <Link to="/addFields">ADD CATEGORY&BRAND</Link>
               </li>
           </ul>
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
