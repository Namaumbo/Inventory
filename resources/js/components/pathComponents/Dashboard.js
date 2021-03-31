import React, {useEffect} from 'react';
import dashboard from '/resources/js/components/CSS/dashboard.css'
import {Line,Pie,Bar} from 'react-chartjs-2'
import axios from "axios";




function Dashboard (){
    const [state ,setItems] = React.useState([])
    useEffect(() => {
        async  function getAllItems(){
            const request = await axios.get('/api/items') ;
            setItems(request.data.items);
            return request;
        }
        getAllItems().then(null);
    }, ['/api/items'])

const Quantity = state.map(item=> item.quantity)
     console.log(Quantity)
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
            yAxes:{
                ticks:{
                    min:0
                }
            }
        }
    }
    return (
        <div className="container">
          <h1>Welcome to Minions inventory system</h1>
            <div>
                <div><Bar data={data} options={option}/></div>
                <di> This graphs shows the items in stock right now and every new addition will be displayed</di>
            </div>


        </div>
    )

}
export default Dashboard;
