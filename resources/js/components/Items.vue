
<template>
    <div class=only >
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">
                    <img alt="Brand" src="./assets/tree-logoa.jpg" height=60px />
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
                <i class="bi bi-house-fill"></i> &nbsp Dashboard</a>
            <a class="nav-link" id="v-pills-profile-tab"
               data-toggle="pill"
               href="#v-pills-profile"
               role="tab"
               aria-controls="v-pills-profile"
               aria-selected="false">
              <i class="bi bi-people-fill"></i> &nbsp clients</a>
            <a class="nav-link"
               id="v-pills-messages-tab"
               data-toggle="pill"
               href="#v-pills-messages"
               role="tab"
               aria-controls="v-pills-messages"
               aria-selected="false">
                <i class="bi bi-graph-up"></i> &nbsp Statistics</a>
            <a class="nav-link"
               id="v-pills-settings-tab"
               data-toggle="pill"
               href="#v-pills-settings"
               role="tab"
               aria-controls="v-pills-settings"
               aria-selected="false">
                <i class="bi bi-alarm-fill"></i> &nbsp Sales Order</a>
            <a class="nav-link"
               id="v-pills-items-tab"
               data-toggle="pill"
               href="#v-pills-items"
               role="tab"
               aria-controls="v-pills-settings"
               aria-selected="false">
                <img class="bi bi-box-seam"></img> &nbsp Items</a>

        <hr id="line"/>
            <a class="nav-link"
               id="v-pills-contact-tab"
               data-toggle="pill"
               href="#v-pills-settings"
               role="tab"
               aria-controls="v-pills-settings"
               aria-selected="false">
                <i class=""></i> &nbsp contact Us</a>
<!--    <form>-->
<!--        <div class="form-group">-->
<!--            <label for="exampleInputEmail1">Email address</label>-->
<!--&lt;!&ndash;            <input type="email" class="form-control" npm-->
<!--        <div class="form-check">-->
<!--            <input type="checkbox" class="form-check-input" id="exampleCheck1">-->
<!--            <label class="form-check-label" for="exampleCheck1">Check me out</label>-->
<!--        </div>-->
<!--        <button type="submit" class="btn btn-primary">Submit</button>-->
<!--    </form>-->
        </div>

    </nav>





        <hr /><hr />
        <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />
        <a class="footer"><i class="bi bi-battery-charging"></i></a>
    </div>
 </template>
<style>
.only {
    background-color: #f2f2f2;
    width: 190px;
    height:780px;

}
.nav-link{
    color:slategray;
    font-size:16px;
    margin-top: 10px;

}

#line{
    background-color :#b3b3b3;
}
</style>
<script>

</script>
