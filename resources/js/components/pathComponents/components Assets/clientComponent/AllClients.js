import React, {useEffect} from 'react'
import axios from "axios";
import {Accordion, Card} from "react-bootstrap";

function AllClients(){

    const [state,setClientState] = React.useState([])

    useEffect(() => {
        async  function getAllClients(){
            const request = await axios.get('/api/users') ;
            setClientState(request.data.users);
            // console.log(request.data.users)
            return request;
        }
        getAllClients().then(response=>console.log(response));
    }, ['/api/users'])

    return(
        <>
            <div>
                {
                    state.map(user=>
                        <Accordion key={user.id}>
                            <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" >
                                       <div style={{display:"flex"}}>
                                        <div>{user.firstName} </div>
                                           <div style={{
                                               color:"mediumvioletred",
                                               backgroundColor:"greenYellow",
                                               marginLeft:"100px",
                                               padding:"5px",
                                               borderRadius:"10%",
                                               fontWeight:"bolder"

                                           }}>{user.Role}</div>
                                       </div>


                                    </Accordion.Toggle>
                                </Card.Header>

                                <Accordion.Collapse eventKey="0">
                                    <div style={{display:"flex"}}>
                                        <div style={{marginRight:"90px"}}>

                                        <Card.Body >
                                            <h5>first name</h5>
                                            {user.firstName}
                                        </Card.Body>
                                    </div>
                                        <div style={{marginRight:"90px"}}>

                                            <Card.Body>
                                                <h5>last name</h5>
                                                {user.lastName}
                                            </Card.Body>
                                        </div>
                                        <div style={{marginRight:"100px"}}>

                                            <Card.Body>
                                                <h5>middle name</h5>
                                                {user.middleName}
                                            </Card.Body>
                                        </div>
                                        <div style={{marginRight:"100px"}}>

                                            <Card.Body>
                                                <h5>Role</h5>
                                             <div style={{ color:"mediumvioletred",
                                                fontWeight:"bolder",
                                                backgroundColor:"greenYellow"}}
                                             >{user.Role}</div>
                                            </Card.Body>
                                        </div>
                                        <div>

                                            <Card.Body>
                                                <h5>email</h5>
                                                {user.email}
                                            </Card.Body>
                                        </div>
                                        <div style={{marginRight:"100px"}}>

                                            <Card.Body>
                                                <h5>phone number</h5>
                                                {user.phoneNumber}
                                            </Card.Body>
                                        </div>

                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                    )
                }
                <hr />
            </div>

        </>
    )
}
export default AllClients;
