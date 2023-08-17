import React, { useEffect,useState } from 'react'
import './UserId.css'
import { GetUserById } from '../services/GetAllUsers'
import { useParams } from 'react-router-dom'

export default function UserId() {

    const [user, setuser] = useState({})
    const [id,setid] = useState({})
    const handleChange = (event)=>{
        setid(event.target.value)
    }
    
    const fetchUser=()=>{
        GetUserById(Number(id))
        .then(user=>setuser(user[0]))
        .then(console.log(user))
        {
            // document.getElementById('output').innerHTML =  JSON.stringify(user)
            // document.getElementById('')
        }
    }

  return (
    <div className='idDiv'>
            <table><tr>
                <td className='td'>
                    <h4><b>Enter a valid Customer ID</b></h4>
                </td>
                <td className='td'>
                    <div className="col-12">
                        <input type="number" className="form-control" 
                        name={id} onChange={handleChange} placeholder="Enter Customer ID" />
                    </div>
                </td>
                <td className='td'>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={fetchUser}>Search</button>
                    </div>
                </td>
                </tr>
            </table>
            <br>
            </br>
            <tbody>
                <tr className='tableHead'>
                    <th className='th'>Customer ID</th>
                    <th className='th'>First Name</th>
                    <th className='th'>Last Name</th>
                    <th className='th'>Gender</th>
                    <th className='th'>Job</th>
                    <th className='th'>Date of Birth (YYYY-MM-DD)</th>
                </tr>
               
                <tr>
                    <td id='tb1'>{user.customerId}</td>
                    <td id='tb2'>{user.first}</td>
                    <td id='tb3'>{user.last}</td>
                    <td id='tb4'>{user.gender}</td>
                    <td id='tb5'>{user.job}</td>
                    <td id='tb6'>{user.dob}</td>
                </tr>
                   
            </tbody>
    </div>
  )
}
