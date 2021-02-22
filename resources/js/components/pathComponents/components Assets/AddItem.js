import React from 'react';

import navBar from '../../CSS/navBar.css'
function AddItem(){
    return (
        <>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">PRODUCT NAME</label>
                    <input type="text" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">SUPPLIER</label>
                    <input type="text" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputAddress" className="form-label">VENDOR</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Sneackers"/>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">PRICE</label>
                    <input type="number" className="form-control" id="inputZip"/>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">STOCK</label>
                    <input type="number" className="form-control" id="inputZip"/>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">OPTION</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">DESCRIPTION</label>
                    <input type="text" className="form-control" id="inputAddress2"
                           placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="file" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputState" className="col-md-4">BRAND</label>
                    <select id="inputState" className="form-control">
                        <option selected>NIKE</option>
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
                    <select id="inputState" className="form-control">
                        <option selected>CAKES</option>
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
                    <input type="text" className="form-control" id="inputZip"/>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Add Product</button>
                    {" "}
                    <button type="submit" className="btn btn-secondary">Cancel</button>
                </div>
            </form>
        </>

    )
}
export default AddItem;
