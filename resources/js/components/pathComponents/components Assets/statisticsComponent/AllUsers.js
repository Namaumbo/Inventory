import React, {useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table'
import axios from "axios";



function AllUsers(){

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
<h4 style={{display:"flex",justifyContent:"center"}}>Users Available</h4>
            <Table striped bordered hover >
                <thead>
                <tr>
                    <th>#</th>
                    <th>First name</th>
                    <th>Middle Name</th>
                    <th>Last name</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>User Name</th>
                    <th>Phone Number</th>

                </tr>
                </thead>
                {
                    state.map(user=>
                        <tbody>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.middleName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.Role}</td>
                            <td>{user.email}</td>
                            <td>{user.userName}</td>
                            <td>{user.phoneNumber}</td>
                        </tr>
                        </tbody>
                    )
                }
            </Table>

            </div>
        </>
    )
}
export default AllUsers;
