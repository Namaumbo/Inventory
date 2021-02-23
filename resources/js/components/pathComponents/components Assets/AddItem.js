import React from 'react';
import navBar from '../../CSS/navBar.css'
import  axios from  'axios'

function AddItem (){
    const [state ,setState] = React.useState({
        productName:"",
        supplier:"",
        vendor:"",
        price:"",
        stock:"",
        description:"",
        picture:"",
        vat:"",
        brand:"",
        category:"",
        color:"",
    })

function handleAllChange(e){
setState({
    ...state,
    [e.target.name]:e.target.value
})

}
function  addToDatabase(e){
        e.preventDefault()
    let NewProduct = {productName:state.productName}


        axios.post('api/items', NewProduct
        ).then(function (response){
            console.log(response)
        })
    //
    // catch{
    //         console.log("sd")
    // }

    }

        return (
            <>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">PRODUCT NAME</label>
                    <input type="text" className="form-control"  name="productName" onChange={handleAllChange} value={state.productName}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">SUPPLIER</label>
                    <input type="text" className="form-control"  name='supplier' onChange={handleAllChange} value={state.supplier}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputAddress" className="form-label">VENDOR</label>
                    <input type="text" className="form-control"  name='vendor' onChange={handleAllChange} value={state.vendor}/>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">PRICE</label>
                    <input type="number" className="form-control"  name='price' onChange={handleAllChange} value={state.price}/>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">STOCK</label>
                    <input type="number" className="form-control" name='stock' onChange={handleAllChange} value={state.stock}/>
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
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">PICTURE</label>
                    <input type="file" className="form-control"  name='picture' onChange={handleAllChange} value={state.picture}/>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputState" className="col-md-4">BRAND</label>
                    <select id="inputState"  name='brand' onChange={handleAllChange} value={state.brand} className="form-control">
                        <option defaultValue>NIKE</option>
                        <option>PUMA</option>
                        <option>KUKOMA</option>
                        <option>CASTERED</option>
                        <option>ADIDAS</option>
                        <option>SUMSUNG</option>
                        <option>HUAWEI</option>
                        <option>MIKOZI</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputState" className="col-md-4">CATEGORY</label>
                    <select id="inputState" className="form-control"  name='category' onChange={handleAllChange} value={state.category}>
                        <option defaultValue>CAKES</option>
                        <option>SALADS</option>
                        <option>PHONE ACCESSORIES</option>
                        <option>BOOKS</option>
                        <option>BREAD</option>
                        <option>VEGETABLES</option>
                        <option>SHOES</option>
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
        </>
)
}
export default AddItem;
