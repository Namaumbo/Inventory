import React, {useEffect} from 'react'
import Table from "react-bootstrap/Table";
import axios from "axios";
import {Button, Card} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function EditClient(){

    //////initials states////////
    // const [users ,setUsers] = React.useState([])
    const [firstName,setFirstName] = React.useState("")
    const [ middleName,setMiddleName] = React.useState("")
      const [lastName,setLastName] = React.useState("")
       const[ id,setId] = React.useState(null)
       const [ phoneNumber,setPhoneNumber] = React.useState("")
        const [Role ,setRole] = React.useState("")
        const[userName,setUsername]= React.useState("")
        const[email,setEmail] = React.useState("")
    const [state,setState] = React.useState([])
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true

    );




    useEffect(() => {``
        async  function getAllClients(){
           const request =  await axios.get('/api/users')
                 // setUsers(response.data)
                 setState(request.data.users);
           setId(request.data.users[0].id)
                 setFirstName(request.data.users[0].firstName)
                 setMiddleName(request.data.users[0].middleName)
                 setLastName(request.data.users[0].lastName)
                 setPhoneNumber(request.data.users[0].phoneNumber)
                 setRole(request.data.users[0].Role)
                 setUsername(request.data.users[0].userName)
                 setEmail(request.data.users[0].email)

        }
        getAllClients().then();
    }, ['/api/users'])

    console.log(state)
        function UpdateInDatabase(){

    }

    function handleChange() {

    }

    function selectUser(id) {
        let user = state[id];
        setId(user.id)
        setState(user);
        setFirstName(user.firstName)
        setMiddleName(user.middleName)
        setLastName(user.lastName)
        setPhoneNumber(user.phoneNumber)
        setRole(user.Role)
        setUsername(user.userName)
        setEmail(user.email)

    }

    return(
        <>

            <Table striped bordered hover >
                <thead>
                <tr>
                    <th>#</th>
                    <th>First name</th>
                    <th>Middle Name</th>
                    <th>Last name</th>
                    <th>Role</th>
                    <th>Option</th>
                </tr>
                </thead>
                {
                    state.map(user=>
                        <tbody key={user.id}>
                        <tr >
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.middleName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.Role}</td>
                            <td>
                                <Button variant="primary" onClick={(event)=>{
                                    handleShow();
                                    selectUser(user.id, event)
                                }} >
                                Edit
                            </Button></td>
                        </tr>
                        </tbody>
                    )
                }
            </Table>
            <>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit client</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
                            <>
                                <div className="card w-90">
                                    <div className="card-body">
                                        <Card>
                                            <Card.Header as="h3">REGISTER A CLIENT</Card.Header>
                                            <Card.Body>
                                                <Form>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Card.Title>First Name</Card.Title>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter name"
                                                            value={firstName}
                                                            name="firstName"
                                                            onChange={handleChange}/>
                                                    </Form.Group>
                                                    {/**/}
                                                    <Form.Group controlId="formBasicText">
                                                        <Card.Title>Last Name</Card.Title>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="second name"
                                                            value={lastName}
                                                            name="lastName"
                                                            onChange={handleChange}/>
                                                    </Form.Group>
                                                    {/**/}
                                                    <Form.Group controlId="formBasicText1">
                                                        <Card.Title>Middle Name</Card.Title>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="if any"
                                                            value={middleName}
                                                            name="middleName"
                                                            onChange={handleChange} />
                                                    </Form.Group>
                                                    {/**/}
                                                    <Form.Group controlId="formBasicText2">
                                                        <Card.Title>Enter Email</Card.Title>
                                                        <Form.Control
                                                            type="email"
                                                            placeholder="xxx@gmail.com"
                                                            value={email}
                                                            name="email"
                                                            onChange={handleChange}/>
                                                    </Form.Group>
                                                    {/**/}
                                                    <Form.Group controlId="formBasicPassword">
                                                        <Card.Title>Enter Password</Card.Title>
                                                        <Form.Control
                                                            type="password"
                                                            placeholder="make it unique"
                                                            value={state.password}
                                                            name="password"
                                                            onChange={handleChange}/>
                                                    </Form.Group>
                                                    {/**/}
                                                    <Form.Group controlId="formBasicText3">
                                                        <Card.Title>Phone Number</Card.Title>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="+265*********"
                                                            value={phoneNumber}
                                                            name="phoneNumber"
                                                            onChange={handleChange}/>
                                                    </Form.Group>
                                                    {/**/}
                                                    <Form.Group controlId="formBasicText4">
                                                        <Card.Title>ROLE</Card.Title>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="supplier OR customer"
                                                            value={Role}
                                                            name="Role"
                                                            onChange={handleChange} />
                                                    </Form.Group>
                                                    {/**/}
                                                    <Form.Group controlId="formBasicText5">
                                                        <Card.Title>Choose a User Name</Card.Title>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="DoeJon"
                                                            value={userName}
                                                            name="userName"
                                                            onChange={handleChange}/>
                                                    </Form.Group>
                                                    {/**/}
                                                    <Button variant="primary" type="submit" onClick={UpdateInDatabase}>
                                                        Update
                                                    </Button>
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            </>
                        </>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            DONE
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>

        </>
    )
}
export default EditClient;
