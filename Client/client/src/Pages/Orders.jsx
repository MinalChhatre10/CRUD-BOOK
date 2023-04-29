import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
const Orders = () => {
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
      const fetchAllOrders = async()=>{
        try{
          const res = await axios.get("http://localhost:8800/order")
          setOrders(res.data);
        }catch(err){
          console.log(err);
        }
      }
      fetchAllOrders()
    },[])
  
    const handleDelete = async(orderID)=>{
      try{
        const res = await axios.delete("http://localhost:8800/order/"+orderID)
        window.location.reload()
        setOrders(res.data);
      }catch(err){
        console.log(err);
      }
    }
  
    return (
      <div>
        <Navigation />
       <h1 className='head' >Orders</h1>
        <div className="books">
          {orders.map(order=>(
            <div className="book" key={order.orderID}>
              <h2>{order.idClient}</h2>
              <h2>{order.id}</h2>
              <p>{order.issueDate}</p>
  
              <button className="delete" onClick={()=>handleDelete(order.orderID)}>Delete</button>
              <button className="update"><Link to={`/sendemail/${order.orderID}`}>Send Mail</Link> </button>
            </div>
          ))}
        </div>
        <button className="linkB"><Link to="/addorder">Add Order</Link></button>
      </div>
    )
}

export default Orders
