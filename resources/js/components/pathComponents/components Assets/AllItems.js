import React, { useEffect} from 'react';
import axios from 'axios'


function AllItems(){
    const [state ,setState] = React.useState({
        items: {},
    })

    useEffect(() => {
        getAllItems()
    }, [])
    // upon loading///////////////////////


    function getAllItems() {
        axios.get('/api/items').then(response => {
            showItems(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

////////////////////////////////////////////
    ///////////////// setting all data state
    function showItems(data) {
       // const itemsInArray= state.items.slice();
       // itemsInArray.push(data)
        setState(prevState =>({
            ...state,
            items: {data},
        }))
console.log(state.items)
    }

    /////////////////////////////
    return(
        <>
            <div><h3></h3></div>
        </>
    )
}

export default AllItems;
