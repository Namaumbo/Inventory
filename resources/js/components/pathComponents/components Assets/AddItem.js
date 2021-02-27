import React from 'react';
import navBar from '../../CSS/navBar.css'
import  axios from  'axios'
import {toast} from "react-toastify";

function AddItem (){
    const [state ,setState] = React.useState({
        name:"",
        vendor:"",
        price:"",
        description:"",
        vat:"",
        supplierId:"",
        brandId:"",
        categoryId:"",
        color:"",
        quantity:"",

    })

function handleAllChange(e){
setState({
    ...state,
    [e.target.name]:e.target.value
})

}
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
    ////////////////////////////////////////////////////////////
        return (
            <>
                <div className="card w-90">
                    <div className="card-body">
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">PRODUCT NAME</label>
                    <input type="text" className="form-control"  name="name" onChange={handleAllChange} value={state.name}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">SUPPLIER</label>
                    <input type="text" className="form-control"  name='supplierId' onChange={handleAllChange} value={state.supplierId}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputAddress" className="form-label">VENDOR</label>
                    <input type="text" className="form-control"  name='vendor' onChange={handleAllChange} value={state.vendor}/>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">PRICE</label>
                    <input type="number" className="form-control"  name='price' onChange={handleAllChange} value={state.price}/>
                </div>
                {/*<div className="col-md-2">*/}
                {/*    <label htmlFor="inputZip" className="form-label">STOCK</label>*/}
                {/*    <input type="number" className="form-control" name='stockable' onChange={handleAllChange} value={state.stockable}/>*/}
                {/*</div>*/}
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">QUANTITY</label>
                    <input type="number" className="form-control" name='quantity' onChange={handleAllChange} value={state.quantity}/>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">VAT</label>
                    <input type="text" className="form-control" name='vat' onChange={handleAllChange} value={state.vat}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">DESCRIPTION</label>
                    <input type="text" className="form-control"  name='description' onChange={handleAllChange}
                           placeholder="Apartment, studio, or floor" value={state.description}/>
                </div>
                {/*<div className="col-md-6">*/}
                {/*    <label htmlFor="inputCity" className="form-label">PICTURE</label>*/}
                {/*    <input type="file" className="form-control"  name='picture' onChange={handleAllChange} value={state.picture}/>*/}
                {/*</div>*/}
                <div className="col-md-2">
                    <label htmlFor="inputState" className="col-md-6">BRAND</label>
                    <select id="inputState"  name='brandId' onChange={handleAllChange} value={state.brandId} className="form-control">
                        <option defaultValue>1</option>
                        <option>2</option>
                        <option>3</option>

                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputState" className="col-md-8">CATEGORY</label>
                    <select id="inputState" className="form-control"  name='categoryId' onChange={handleAllChange} value={state.categoryId}>
                        <option defaultValue>1</option>
                        <option>2</option>
                        <option>3</option>

                    </select>
                </div>
                <div className="col-md-2">
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
)
}
export default AddItem;
