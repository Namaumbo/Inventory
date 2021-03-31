import React from 'react'
import {Button, Card} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Spinner from 'react-bootstrap/Spinner'
import {toast} from "react-toastify";
import items from './pathComponents/Items'
import App from "./App";
import Navigation from "./Navigation";

function Login(){

     const [state,setState] = React.useState({
         redirect: false,
         errMsgEmail: "",
         errMsgPwd: "",
         isAuthed: false,
         loader:""
     })
    const [credentialsState , setCredentialsState] = React.useState({
        email:"",
        password:""
    })
    function handleChange(e) {
        setCredentialsState ({...credentialsState, [e.target.name] : e.target.value})

    }
    function checkInDatabase() {
         setState({...state, loader:"border"})
         async  function authenticate(){
             const  fetch = axios.post('/api/user_login',credentialsState).then(response=>{
                 setState({...state, loader:"" });
                 ///////logic to data parse by the user
                 console.log(response.data.success)

                 if (response.data.success === true) {

                     localStorage.setItem("isLoggedIn", true);
                     localStorage.setItem("userData", JSON.stringify(response.data.data));
                     setState({
                         ...state,
                         redirect: true,
                     });

                     const login = localStorage.getItem("isLoggedIn");
                     if (login) {
                         window.location.replace("/dashboard")
                     }

                 }
                 else if (
                     response.data.success !== false && response.data.success === undefined
                 ) {
                     setState({
                         ...state,
                         errMsgEmail:"unable to log in , wrong Email",
                         errMsgPwd:"unable to log in, wrong password"
                     });
                     setTimeout(() => {setState({ ...state,errMsgEmail: "", errMsgPwd: "" });
                     }, 2000);
                 }

             }).catch(error => {
                 if (error) {
                     setState({...state, loader:"" });
                     toast.error("Oops wrong Credentials", {
                     position: toast.POSITION.TOP_CENTER,
                     autoClose: 2000
                 })}
             })
             }authenticate().then(null)


     }

    return(
        <div className="container">

            <div style={{
                marginTop:"22%",
                marginLeft:"25%",
                marginRight:"25%",
                borderLeft:"1.7px solid grey",
                boxShadow:"-5px 0 10px grey",
                borderRadius:"5px"
            }}>
                <Card>
                    <Card.Header as="h3">Login</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Card.Title>Email </Card.Title>
                                <Form.Control type="email" placeholder="email@gmail.com" value={credentialsState.email} name="email" onChange={handleChange}/>
                            </Form.Group>
                            <p className="text-danger">{state.errMsgEmail}</p>
                            <Form.Group controlId="formBasicText">
                                <Card.Title>Password</Card.Title>
                                <Form.Control type="password" placeholder="make it undefined" value={credentialsState.password} name="password" onChange={handleChange}/>
                            </Form.Group>
                            <p className="text-danger">{state.errMsgPwd}</p>
                        </Form>
                    </Card.Body>
                    <Button variant="primary" type="submit" onClick={checkInDatabase}>
                        <Spinner
                            as="span"
                            size="sm"
                            role="status"
                         animation={state.loader}/>
                        Login
                    </Button>
                </Card>
                 </div>
        </div>
    )
}
export default Login;
