

<template>
    <div class=only >
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">
                    <img alt="Brand" src="./assets/tree-logoa.jpg" height=60px >
                </a>
            </div>
        </div>
        <div class="nav flex-column nav-pills"
             id="v-pills-tab"
             role="tablist"
             aria-orientation="vertical">
            <a class="nav-link active"
               id="v-pills-home-tab"
               data-toggle="pill"
               href="#v-pills-home"
               role="tab">
                <i class="bi bi-house-fill"></i>  Dashboard</a>
            <a class="nav-link" id="v-pills-profile-tab"
               data-toggle="pill"
               href="#v-pills-profile"
               role="tab"
               aria-controls="v-pills-profile"
               aria-selected="false">
              <i class="bi bi-people-fill"></i>  clients</a>
            <a class="nav-link"
               id="v-pills-messages-tab"
               data-toggle="pill"
               href="#v-pills-messages"
               role="tab"
               aria-controls="v-pills-messages"
               aria-selected="false">
                <i class="bi bi-graph-up"></i>  Statistics</a>
            <a class="nav-link"
               id="v-pills-settings-tab"
               data-toggle="pill"
               href="#v-pills-settings"
               role="tab"
               aria-controls="v-pills-settings"
               aria-selected="false">
                <i class="bi bi-cart4"></i> Sales Order</a>
        </div>
    </nav>
        <hr id="line"/>
<!--    <form>-->
<!--        <div class="form-group">-->
<!--            <label for="exampleInputEmail1">Email address</label>-->
<!--            <input type="email" class="form-control" npm
<!--        <div class="form-check">-->
<!--            <input type="checkbox" class="form-check-input" id="exampleCheck1">-->
<!--            <label class="form-check-label" for="exampleCheck1">Check me out</label>-->
<!--        </div>-->
<!--        <button type="submit" class="btn btn-primary">Submit</button>-->
<!--    </form>-->
    </div>
 </template>
<style>
.only {
    background-color: #f2f2f2;
    width: 180px;
    height:780px;

}
.nav-link{
    color:slategray;
    font-weight:bolder;
    font-size:16px;
    margin-top: 10px;

}
#line{
    background-color :#b3b3b3;
}


</style>
<script>

</script>
