<template>
    <div class="fill">
        <h4>Item Details</h4>

        <hr />
    <form class="row g-3">
        <div class="col-md-6">
            <label for="inputEmail4" class="form-label">VENDOR</label>
            <input type="text" class="form-control" id="inputEmail4"/>
        </div>
        <div class="col-md-6">
            <label for="inputPassword4" class="form-label">SUPPLIER</label>
            <input type="text" class="form-control" id="inputPassword4"/>
        </div>
        <hr />
        <div class="col-6">
            <label for="inputAddress" class="form-label">PRODUCT NAME</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="snickers">
        </div>
        <div class="col-md-2">
            <label for="cost" class="form-label" >PRICE</label>
            <input type="number" class="form-control" id="cost"/>
        </div>
        <div class="col-md-1">
            <label for="cost" class="form-label" ><i class="bi bi-archive"></i>STOCK</label>
            <input type="number" class="form-control" id="Instock"/>
        </div>
       <div class="col-md-1">

            <label for="cost" class="form-label" >VAT</label>
            <input type="number" class="form-control" id="Total" value="0.00"/>

           </div>
        <div class="col-md-1">
            <label for="cost" class="form-label" >CHANGE &nbsp</label>
            <button
                   class="badge rounded-pill bg-info text-dark">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                    <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                </svg>
            </button>
            <button
                class="badge rounded-pill bg-info text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
            </button>
        </div>
        <div><hr /></div>
        <div class="col-12">
            <label for="inputAddress2" class="form-label">DESCRIPTION</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
        </div>
        <div class="col-md-6">
            <label  class="form-label">
                BRAND</label>
            <input type="text" class="form-control" id="inputbrand">
        </div>
        <div class="col-md-4">
            <label for="inputState" class="form-label">CATEGORY</label>
            <br />
            <select id="inputState" Class="form-control">
                <option selected>BREAD </option>
                <option>SHOE WARE</option>
                <option>COMPUTER ACCESSORIES</option>

            </select>
        </div>
        <div class="col-md-2">
            <label for="inputZip" class="form-label">COLOR</label>
            <input type="text" class="form-control" id="inputZip">
        </div>
        <div class="col-12">

        </div>
        <br />
        <div class="col-12">
            <button type="submit"
                    class="btn btn-primary"
                    onclick="save">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                     fill="currentColor"
                     class="bi bi-bag-plus-fill"
                     viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
                </svg>

                &nbspAdd product&nbsp&nbsp&nbsp</button>
            <button type="submit" class="btn btn-secondary" onclick="save">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     fill="currentColor"
                     class="bi bi-backspace"
                     viewBox="0 0 16 16">
                    <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
                    <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
                </svg>
                &nbsp&nbsp&nbspCancel &nbsp&nbsp&nbsp&nbsp</button>
        </div>
    </form>
    </div>
</template>
<script>
function save(){
    alert("working")
}

</script>
<style>
.fill{
    border:  solid lightgrey .4px;
    padding:10px
}
</style>
