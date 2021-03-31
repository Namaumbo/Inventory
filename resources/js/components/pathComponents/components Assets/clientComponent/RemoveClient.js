import React, {useEffect} from 'react' ;
import Table from "react-bootstrap/Table";
import {Button} from "react-bootstrap";
function RemoveClient(){

    const [state,setClientState] = React.useState([])

    useEffect(() => {
        async  function getAllClients(){
            const request = await axios.get('/api/users') ;
            setClientState(request.data.users);
            return request;
        }
        getAllClients().then(response=>console.log(response));
    }, ['/api/users'])


function deleteRow(id, e) {

    axios.delete(`api/users/${id}`).then(res => {
        const clients = state.filter(item => item.id !== id);
        setClientState(clients);
    })
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
                        <tbody>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.middleName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.Role}</td>
                            <td><Button variant="danger" onClick={(e) => deleteRow(user.id, e)}>
                                Delete
                            </Button>
                            </td>
                        </tr>
                        </tbody>
                    )
                }
            </Table>
        </>
    )

}
export default RemoveClient;
