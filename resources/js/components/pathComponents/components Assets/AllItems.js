import React, { useEffect} from 'react';
import axios from 'axios'
// import Accordion from 'react-bootstrap/Accordion'
import {Card,Accordion} from 'react-bootstrap'

//////////////////////////////
function AllItems(){
    const [state ,setItems] = React.useState([])

    useEffect(() => {
        async  function getAllItems(){
          const request = await axios.get('/api/items') ;
          setItems(request.data.items);
          return request;
        }
        getAllItems().then(response=>console.log(response));
    }, ['/api/items'])
    console.log(state)

    /////////////////////////////
    return(
        <>
            <div>
                {
                    state.map(items=>

                            <Accordion>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                            {items.name}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>{items.description}</Card.Body>
                                    </Accordion.Collapse>
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
