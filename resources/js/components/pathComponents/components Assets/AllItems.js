import React, { useEffect} from 'react';
import axios from 'axios'


function AllItems(){
    const [state ,setItems] = React.useState([])

    useEffect(() => {
        async  function getAllItems(){
          const request = await axios.get('/api/items') ;
          setItems(request.data.items);
          return request;
        }
        getAllItems().then(response=>console.log(response.status));
    }, ['/api/items'])
    console.log(state)

    /////////////////////////////
    return(
        <>
            <div>
                {
                    state.map(items=><div key={items.id}>{items.name}</div>)
                }


            </div>
        </>
    )
}

export default AllItems;
