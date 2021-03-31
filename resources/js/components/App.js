import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import {toast} from "react-toastify";
import Login from "./Login";
import UserHome from './userDashbord';
toast.configure()
function App() {

    const [loggedIn ,setLogggedIn] = React.useState(false)

    return (

        <>
        
        {

if (loggededIn){
    return <UserHome />
}
            
        }

           <Login  />
        
        </>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
