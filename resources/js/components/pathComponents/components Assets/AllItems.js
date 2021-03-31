import React, { useEffect} from 'react';
import axios from 'axios'
// import Accordion from 'react-bootstrap/Accordion'
import {Card,Accordion} from 'react-bootstrap'
import allItem from '/resources/js/components/CSS/allItems.css'


//////////////////////////////
function AllItems(){
    const [state ,setItems] = React.useState([])

    useEffect(() => {
        async  function getAllItems(){
          const request = await axios.get('/api/items') ;
          setItems(request.data.items);
          return request;
        }
        getAllItems().then(null);
    }, ['/api/items'])

    return(
        <>
            <div>
                {
                    state.map(items=>
                            <Accordion key={items.id}>
                                <Card>

                                    <Card.Header>
                                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" >
                                                {items.name}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                   <div style={{display:"flex"}}>
                                    <div style={{display:"flex",borderRight:"1.2px solid black"}}>

                                    <div>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>

                                            <p>Display name</p>
                                            <div className="info">
                                            {items.name}
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    </div>
                                        <div>
                                            <Accordion.Collapse eventKey="0">

                                                <Card.Body>
                                                    <p>cost</p>
                                                    <div className="info2">
                                                        {items.price}
                                                    </div>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div>
                                            <Accordion.Collapse eventKey="0">

                                                <Card.Body>
                                                    <p>vat</p>
                                                    <div className="info2">
                                                        {items.vat}
                                                    </div>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </div>


                                    <div>
                                    <Accordion.Collapse eventKey="0">

                                        <Card.Body>
                                            <p>supplier name</p>
                                            <div className="info">
                                            {items.supplierName}
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    </div>

                                        <div>

                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <p>category</p>
                                                    <div className="info">
                                                        {items.categoryName}
                                                    </div>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div>

                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <p>brand name</p>
                                                    <div className="info">
                                                        {items.brandName}
                                                    </div>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </div>

                                        <div>

                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <p>In stock</p>
                                                    <div className="info2">
                                                        {items.quantity}
                                                    </div>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                    </div>
                                    <div>

                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <p>description</p>
                                                <div className="info">
                                                    {items.description}
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </div>
                                </div>
                                </Card>
                            </Accordion>

                            )
                }
                <hr />
                        </div>

        </>
    )
}

export default AllItems;
