import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const SendMail = () => {
    const { orderID } = useParams();
    console.log(orderID);
    const [emailID,setEmailId] = useState("");
    useEffect(()=>{
      const fetchAllOrders = async()=>{
        try{
          const res = await axios.get("http://localhost:8800/getemail/"+orderID);
          console.log("Emailid=",res.data);
          setEmailId(res.data);

        }catch(err){
          console.log(err);
        }
      }
      fetchAllOrders()
    },[])
  return (
    <div className='forms'>
    <div className="form">
    <h1>Send Mail</h1>
    <input type="text" name="emailID" value={emailID} disabled/>
    {/* <button className="formButton" onClick={handleClick}>Add</button> */}
  </div>
  </div>
  )
}

export default SendMail
