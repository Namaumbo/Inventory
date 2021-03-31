import React, { useState} from 'react';
import  axios from 'axios'
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {Link} from "react-router-dom";
import Navigation from "../../Navigation";

function AddBrandAndCategory(){

    const  [categoryState,setCategory] =React.useState({
        categoryName:"",
        description:"",

    })
    const [brandState,setBrand] = React.useState({
        address:"",
        brandName:""
    })
    function handleChange(e) {
        setCategory({
            ...categoryState,
            [e.target.name]:e.target.value
        })
            setBrand({
                ...brandState,
                [e.target.name]:e.target.value
            })
    }
    function addToDatabaseCategory(e) {
        e.preventDefault()
        ///getting only Category fields to the database////////
        axios.post('/api/categories',categoryState).then(res=>{
            if(res.status === 201){
            toast.success("Category Added",
                {position:toast.POSITION.TOP_CENTER,
                    autoClose:2000
            })
            }
        }).catch(error=>{
            toast.error("Ooops! already exists",
                {position:toast.POSITION.TOP_CENTER,
                    autoClose:false
                })
        })
    }
    function addToDatabaseBrand(evt) {
        evt.preventDefault();
        axios.post('/api/brands',brandState).then(res=>{
            if(res.status === 201) {
                toast.success("Brand Added",
                    {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose:2000
                    })
            }
            }
            ).catch(error=>{
            toast.error("Oops! Brand already exits",
                {position:toast.POSITION.TOP_CENTER,
                    autoClose:false
                })
        })

    }


    return (
        <>
            <div>
            <div className="card w-150">
                <div className="card-body">
          <div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">NAME</label>
                    <input type="text" className="form-control"  name="categoryName"  value={categoryState.categoryName} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">DESCRIPTION</label>
                    <input type="text" className="form-control" name="description" value={categoryState.description} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">ADDITION</label>
                    <input type="text" className="form-control"  />
                </div>
                <button type="submit" className="btn btn-primary" onClick={addToDatabaseCategory}>Add Category</button>
            </form>
          </div>
                </div>
            </div>
                    {/*//////////////////////////////////////////////////////////*/}
                    <hr />
            <div className="card w-150">
                <div className="card-body">
                <div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">NAME</label>
                                <input type="text" className="form-control" name="brandName" value={brandState.brandName} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">ADDRESS</label>
                                <input type="text" className="form-control" name="address" value={brandState.address} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">ADDITION</label>
                                <input type="text" className="form-control" />
                            </div>

                            <button type="submit" className="btn btn-primary" onClick={addToDatabaseBrand}>Add Brand</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    )


}
export default AddBrandAndCategory;
