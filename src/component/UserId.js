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
        .then(user=>setuser(user))
        .then(console.log(user))
        {
            document.getElementById('output').innerHTML =  JSON.stringify(user)
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
            
            <div id='output'></div>
    </div>
  )
}
