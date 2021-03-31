import React, {useEffect} from 'react'

import Form from 'react-bootstrap/Form'
import {Button, Card} from "react-bootstrap";
import {toast} from "react-toastify";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import axios from "axios";
export default function AddClient(){

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [state,setState] = React.useState({
        firstName:"",
        middleName:"",
        lastName:"",
        password:"",
        phoneNumber:"",
        Role:"",
        userName:"",
        email:""
    });


    function handleChange(event) {
        setState({
            ...state,
            [event.target.name]:event.target.value
        })
    }
    function addUserToDatabase(e) {
        e.preventDefault();

        try{
           async function addUser() {
               const  request = axios.post('api/users',state).then(res =>{
                   toast.success("Client created successfully",{position : toast.POSITION.TOP_CENTER,autoClose:2000})
                   setState({
                       firstName:"",
                       middleName:"",
                       lastName:"",
                       password:"",
                       phoneNumber:"",
                       isAdmin:"",
                       userName:"",
                       email:""
                   })
                   return request;
               }).catch(error =>{
                   if (error)toast.error("Oops already in  Database",{position : toast.POSITION.TOP_CENTER,autoClose:2000})
               })
               }addUser().then(r => console.log(r))}catch(e) {
        }
    }
    ///getting new items
    const [clientState ,setClient] = React.useState([])

    useEffect(() => {
        async  function getAllItems(){
            const request = await axios.get('/api/users') ;
            setClient(request.data.users);
            return request;
        }
        getAllItems().then(response=>console.log(response));
    }, ['/api/users'])
    return(
        <>
<div>
    <h4 style={{display:"flex",justifyContent:"center"}}>EMPLOYEE LIST</h4>
            <Button variant="primary" onClick={handleShow}>
                Add a client
            </Button>
    <br />

</div>
<>

    <Table striped bordered hover>
        <thead>
        <tr>
            <th>#</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Role</th>
            <th>Phone Number</th>

        </tr>
        </thead>
        {
            clientState.map(user=>
                <tbody>
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.Role}</td>
                <td>{user.phoneNumber}</td>
            </tr>
            </tbody>
        )
        }
    </Table>

</>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add a client</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                          <div className="card w-90">
                            <div className="card-body">
                                <Card>
                                    <Card.Header as="h3">REGISTER A CLIENT</Card.Header>
                                    <Card.Body>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Card.Title>First Name</Card.Title>
                                                <Form.Control type="text" placeholder="Enter name" value={state.firstName} name="firstName" onChange={handleChange}/>
                                            </Form.Group>
                        {/**/}
                                            <Form.Group controlId="formBasicText">
                                                <Card.Title>Last Name</Card.Title>
                                                <Form.Control type="text" placeholder="second name" value={state.lastName} name="lastName" onChange={handleChange}/>
                                            </Form.Group>
                        {/**/}
                                            <Form.Group controlId="formBasicText1">
                                                <Card.Title>Middle Name</Card.Title>
                                                <Form.Control type="text" placeholder="if any" value={state.middleName} name="middleName" onChange={handleChange} />
                                            </Form.Group>
                        {/**/}
                                            <Form.Group controlId="formBasicText2">
                                                <Card.Title>Enter Email</Card.Title>
                                                <Form.Control type="email" placeholder="xxx@gmail.com" value={state.email}  name="email" onChange={handleChange}/>
                                            </Form.Group>
                        {/**/}
                                            <Form.Group controlId="formBasicPassword">
                                                <Card.Title>Enter Password</Card.Title>
                                                <Form.Control type="password" placeholder="make it unique" value={state.password} name="password" onChange={handleChange}/>
                                            </Form.Group>
                        {/**/}
                                            <Form.Group controlId="formBasicText3">
                                                <Card.Title>Phone Number</Card.Title>
                                                <Form.Control type="text" placeholder="+265*********" value={state.phoneNumber} name="phoneNumber" onChange={handleChange}/>
                                            </Form.Group>
                        {/**/}
                                            <Form.Group controlId="formBasicText4">
                                                <Card.Title>ROLE</Card.Title>
                                                <Form.Control type="text" placeholder="supplier OR customer" value={state.Role} name="Role" onChange={handleChange} />
                                            </Form.Group>
                        {/**/}
                                            <Form.Group controlId="formBasicText5">
                                                <Card.Title>Choose a User Name</Card.Title>
                                                <Form.Control type="text" placeholder="DoeJon"  value={state.userName} name="userName" onChange={handleChange}/>
                                            </Form.Group>
                        {/**/}
                                            <Button variant="primary" type="submit" onClick={addUserToDatabase}>
                                                Register
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                             </div>
                        </div>
                    </>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        DONE
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}
