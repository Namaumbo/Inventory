import React, {useEffect} from 'react'
import axios from "axios";
import Table from "react-bootstrap/Table";
import {Button} from "react-bootstrap";

function RemoveItem(){
    const [state ,setItems] = React.useState([])
    useEffect(() => {
        async  function getAllItems(){
            const request = await axios.get('/api/items') ;
            setItems(request.data.items);
            return request;
        }
        getAllItems().then(null);
    }, ['/api/items'])

    function deleteRow(id, e) {
        axios.delete(`api/items/${id}`).then(res => {
            console.log(res);
            console.log(res.data);
            const items = state.filter(item => item.id !== id);
            setItems(items);
        })
    }

    return(
        <div>
            <h4 style={{display:"flex",justifyContent:"center"}}>Delete Products</h4>
            <Table striped bordered hover >
                <thead>
                <tr>
                    <th>#</th>
                    <th>Product name</th>
                    <th>Quantity</th>
                    <th>price</th>
                    <th>vat</th>
                    <th>category</th>
                    <th>brand</th>
                    <th>supplier</th>
                    <th>option</th>

                </tr>
                </thead>
                {
                    state.map(item=>
                        <tbody>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{item.vat}</td>
                            <td>{item.categoryName}</td>
                            <td>{item.brandName}</td>
                            <td>{item.supplierName}</td>
                            <td>
                                <Button variant="danger" onClick={(e) => deleteRow(item.id, e)}>
                                Delete
                            </Button>
                            </td>
                        </tr>
                        </tbody>
                    )
                }
            </Table>

        </div>
    )
}
export default RemoveItem;

