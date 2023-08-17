import React, { useEffect,useState } from 'react'
import { deleteUser, GetUserById } from '../services/GetAllUsers'
import { Navigate, useNavigate } from 'react-router-dom';
import './DeleteUser.css'

export default function DeleteUser() {
    let navigate = useNavigate();
    const [user, setuser] = useState({})
    const [id,setid] = useState({})
    const handleChange = (event)=>{
        setid(event.target.value)
    }

    const deleUser = () =>{
        deleteUser(Number(id)).then(res=>navigate('/usersList'))
        alert('User with customer ID '+id.toString()+' deleted.')
    }

    const fetchUser=()=>{
        GetUserById(Number(id))
        .then(user=>setuser(user))
        {
            document.getElementById('output').innerHTML =  JSON.stringify(user)
        }
    }

  return (
    <div class='deleteDiv'>
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
            <td className='td'>
                <div className="col-12">
                    <button type="reset" className="btn btn-primary" onClick={deleUser}>Delete</button>
                </div>
            </td>
            </tr>
        </table>
            
        <div id='output'></div>
    </div>
  )
}
