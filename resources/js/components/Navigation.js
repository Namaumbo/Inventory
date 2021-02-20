import React from 'react';
import tree from './assets/tree-logoa.jpg'
import navBar from './CSS/navBar.css'
function Navigation(){
    return (
<>
    <div >
            <nav className="cover">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={tree} width='100' height='100' alt='..'/>
                    </a>
                </div>

    <a className="nav-link active"
       id="v-pills-home-tab"
       data-toggle="pill"
       href="#v-pills-home"
       role="tab">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             fill="currentColor"
             className="bi bi-folder-fill"
             viewBox="0 0 16 16">
            <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637
                     7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0
                     0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0
                     0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0
                      0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
        </svg>
        { " " } Dashboard
    </a>

    <a className="nav-link" id="v-pills-profile-tab"
       data-toggle="pill"
       href="#v-pills-profile"
       role="tab"
       aria-controls="v-pills-profile"
       aria-selected="false">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             fill="currentColor"
             className="bi bi-people-fill"
             viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75
                     1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
        </svg>
        { " " }clients
    </a>
    <a className="nav-link"
       id="v-pills-messages-tab"
       data-toggle="pill"
       href="#v-pills-messages"
       role="tab"
       aria-controls="v-pills-messages"
       aria-selected="false">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="24" height="24"
             fill="currentColor"
             className="bi bi-graph-up"
             viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                  d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0
                           0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0
                            0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"/>
        </svg>
        { " " } Statistics
    </a> <a className="nav-link"
            id="v-pills-settings-tab"
            data-toggle="pill"
            href="#v-pills-settings"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        fill="currentColor"
        className="bi bi-cart4"
        viewBox="0 0 16 16">
        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1
                     .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5
                    2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11
                     3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0
                     5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4
                     0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
    </svg>
    { " " } Sales Order</a>
    <a className="nav-link"
       id="v-pills-items-tab"
       data-toggle="pill"
       href="#v-pills-items"
       role="tab"
       aria-controls="v-pills-settings"
       aria-selected="false">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             fill="currentColor"
             className="bi bi-box"
             viewBox="0 0 16 16">
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186
                     1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5
                     14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0
                     0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0
                     0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0
                     0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
        </svg>
        { " " } Items</a>

    <hr id="line"/>
    <a className="nav-link"
       id="v-pills-contact-tab"
       data-toggle="pill"
       href="#v-pills-settings"
       role="tab"
       aria-controls="v-pills-settings"
       aria-selected="false">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             fill="currentColor"
             className="bi bi-telephone-outbound-fill"
             viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0
                    0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0
                    0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0
                     0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634
                     0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0
                     0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
        </svg>
        { "  " } { "  " }contact Us
    </a>

            </nav>


    </div>
</>


    )
}
export default Navigation;
