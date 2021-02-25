import React, { useState} from 'react';
import  axios from 'axios'





function addToDatabaseBrand() {

}



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
    }
    function addToDatabaseCategory(e) {
        e.preventDefault()
        ///getting only Category fields to the database////////
        console.log(categoryState)

        axios.post('/api/categories',{categoryState}).then(res=>{
            console.log(res.data)
        }).catch(error=>{
            console.log(error)
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
