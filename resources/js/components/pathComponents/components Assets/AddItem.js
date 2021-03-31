import React, {useEffect} from 'react';
import navBar from '../../CSS/navBar.css'
import  axios from  'axios'
import {toast} from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table'

function AddItem() {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function  addToDatabase(e){
        e.preventDefault()
        //////////adding to  the database///////////////////
        axios.post('/api/items', state).then(response =>{
            if(response.status=== 201)
            {toast.success("ITEM SAVED SUCCESSFULLY",{position : toast.POSITION.TOP_CENTER,
                autoClose:2000}
            )}
        }).catch(error =>{
            if (error){
                toast.error("Oooops we have that in the database please check!",{position:toast.POSITION.TOP_CENTER,
                    autoClose:false
                })
            }
        })

    }
    const [state ,setState] = React.useState({
        name:"",
        vendor:"",
        price:"",
        description:"",
        vat:"",
        supplierName:"",
        brandName:"",
        categoryName:"",
        color:"",
        quantity:"",
    })
    function handleAllChange(e){
        setState({
            ...state,
            [e.target.name]:e.target.value
        })

    }

    ///getting new items
    const [itemState ,setItems] = React.useState([])

    useEffect(() => {
        async  function getAllItems(){
            const request = await axios.get('/api/items') ;
            setItems(request.data.items);
            return request;
        }
        getAllItems().then(null);
    }, ['/api/items'])


    const [brandState ,setBrand] = React.useState([])

    useEffect(()=> {
        async function getAllBrands() {
            await axios.get('/api/brands').then(request=>{  setBrand(request.data)}
              ).catch(error => { console.log(error)
}
)
        }getAllBrands().then(null);
    },['/api/brands'])


    const [categoryState,setCategory] = React.useState([])
    useEffect(()=> {
        async function getAllCategory() {
            await axios.get('/api/categories').then(request=>{
                setCategory(request.data.category)
                // console.log(request.data.category)
            }
            ).catch(error => { console.log(error)
                }
            )
        }getAllCategory().then(null);
    },['/api/categories'])

    const [supplierState,setSupplier] = React.useState([])
    useEffect(()=> {
        async function getAllSuppliers() {
            await axios.get('/api/suppliers').then(request=>{
                    setSupplier(request.data.suppliers)
                    // console.log(request.data.suppliers)
                }
            ).catch(error => { console.log(error)
                }
            )
        }getAllSuppliers().then(null);
    },['/api/categories'])




    return (
        <>
          <>
              <div>
              <Table striped bordered hover>
                  <thead>
                  <tr>
                      <th>#</th>
                      <th>Product name</th>
                      <th>Supplier</th>
                      <th>Category</th>
                      <th>price</th>
                      <th>quantity</th>

                  </tr>
                  </thead>
                  { itemState.map(items=>
                  <tbody key={items.id}>
                  <tr>
                      <td>{items.id}</td>
                      <td>{items.name}</td>
                      <td>{items.supplierName}</td>
                      <td>{items.categoryName}</td>
                      <td>{items.price}</td>
                      <td>{items.quantity}</td>
                  </tr>
                  </tbody>
                  )}
              </Table>
              </div>
          </>


            <Button variant="primary" onClick={handleShow}>
                    Add an Item
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <div className="card w-90">
                            <div className="card-body">
                                <form className="row g-3">
                                    <div className="col-12">
                                        <label htmlFor="inputEmail4" className="form-label">PRODUCT NAME</label>
                                        <input type="text" className="form-control"  name="name" onChange={handleAllChange} value={state.name}/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputPassword4" className="form-label">SUPPLIER</label>
                                        <select id="inputState"  name='supplierName' onChange={handleAllChange}  value={state.supplierName} className="form-control">
                                            <option defaultValue>""</option>
                                            {
                                                supplierState.map(options=><option id={options.supplierName}>{options.supplierName}</option>)
                                            }

                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress" className="form-label">VENDOR</label>
                                        <input type="text" className="form-control"  name='vendor' onChange={handleAllChange} value={state.vendor}/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputZip" className="form-label">PRICE</label>
                                        <input type="number" className="form-control"  name='price' onChange={handleAllChange} value={state.price}/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputZip" className="form-label">QUANTITY</label>
                                        <input type="number" className="form-control" name='quantity' onChange={handleAllChange} value={state.quantity}/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputZip" className="form-label">VAT</label>
                                        <input type="text" className="form-control" name='vat' onChange={handleAllChange} value={state.vat}/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress2" className="form-label">DESCRIPTION</label>
                                        <input type="text" className="form-control"  name='description' onChange={handleAllChange}
                                               placeholder="Apartment, studio, or floor" value={state.description}/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputState" className="col-md-6">BRAND</label>
                                        <select id="inputState"  name='brandName' onChange={handleAllChange} value={state.brandName} className="form-control">
                                            <option defaultValue>""</option>
                                            {
                                                brandState.map(options=><option id={options.brandName}>{options.brandName}</option>)
                                            }

                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputState" className="col-md-8">CATEGORY</label>
                                        <select id="inputState" className="form-control"  name='categoryName' onChange={handleAllChange} value={state.categoryName}>
                                            <option defaultValue>salad</option>
                                            {
                                                categoryState.map(options=><option id={options.categoryName}>{options.categoryName}</option>)
                                            }

                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputZip" className="form-label">COLOR</label>
                                        <input type="text" className="form-control"  name='color' onChange={handleAllChange} value={state.color}/>
                                    </div>

                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary" onClick={addToDatabase}>Add Product</button>
                                        {" "}
                                        <button type="submit" className="btn btn-secondary">Cancel</button>
                                    </div>
                                </form>
                            </div></div>
                    </>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        DONE
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddItem;
