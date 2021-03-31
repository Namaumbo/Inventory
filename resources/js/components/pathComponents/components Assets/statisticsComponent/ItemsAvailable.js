import React, {useEffect} from 'react'
import axios from "axios";

import {Line,Pie,Bar} from 'react-chartjs-2'

function ItemsAvailable(){

    const [state ,setItems] = React.useState([])
    useEffect(() => {
        async  function AllItems(){
            const request = await axios.get('/api/items') ;
            setItems(request.data.items);
            return request;
        }
        AllItems().then(null);
    }, ['/api/items'])


    const Quantity = state.map(item=> item.quantity)
     const data = {
        labels:state.map(item=>[item.name]),
        datasets:[
            {
                label:'ITEMS IN STOCK',
                data: Quantity
            }
        ]
    }
    const option={
        title:{
            display:true,
            text:'Item in stock'
        },
        scales:{
            yAxis:{
                ticks:{
                    min:0
                }
            }
        }
    }

    return(
       <>
           <div style={{display:"flex"}}>
           <div style={{width:"900px"}}><Bar data={data} options={option}/></div>
               <div style={{marginTop:"60px",marginLeft:"20px"}}>
                   <h5>This graphs show the number of items in stock(quantity)</h5><br />
                   <h5>The numbers on the graphs shows the number of items in stock</h5><br />
                   <h5>This graphs show the number of items in stock(quantity)</h5><br />
                   <h5>This graphs show the number of items in stock(quantity)</h5></div>
           </div>
           <div style={{display:"flex"}}>
               <div style={{width:"900px"}}><Pie data={data} options={option}/></div>
               <div style={{marginTop:"60px",marginLeft:"20px"}}>
                   <h5>This graphs show the number of items in stock(quantity) in <strong>%percentage</strong></h5><br />
                   <h5>The numbers on the graphs shows the number of items in stock</h5><br />
                   <h5>This graphs show the number of items in stock(quantity)</h5><br />
                   <h5>This graphs show the number of items in stock(quantity)</h5></div>

           </div>
       </>
    )
}
export default ItemsAvailable;
