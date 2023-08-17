import React, { useState } from 'react'
import { updateUser, GetUserById } from '../services/GetAllUsers'
import { useNavigate } from 'react-router-dom';
import './UpdateUser.css'

export default function UpdateUser() {

    let navigate = useNavigate();
    const [user, setuser] = useState({first:'',last:'',gender:'',job:'',dob:''})
    const [id,setid] = useState({})

    const handleChange = (event)=>{
        setid(event.target.value)
    }

    const handleChangeUser = (event)=>{
        let {name,value} = event.target;
        let newUser = {...user,[name]:value}
        setuser(newUser)
    }

    const updUser = () =>{
        updateUser(Number(id)).then(res=>navigate('/usersList'))
        alert('User with customer ID '+id.toString()+' updated.')
    }

    const fetchUser=()=>{
        GetUserById(Number(id))
        .then(user=>setuser(user))
        {
            document.getElementById('output').innerHTML =  JSON.stringify(user)
        }
    }

  return (
    <div className='updateDiv'>
        <h5>Update User Details</h5>
        
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
        <form onSubmit={updUser}>
        <div className="m-3">
            <div className="mb-4">
                <input type="text" className="form-control" 
                name='first' value={user.first} onChange={handleChangeUser}
                placeholder="First Name" />
            </div>
            <div className="mb-4">
                <input type="text" className="form-control" 
                name='last' value={user.last} onChange={handleChangeUser}
                placeholder="Last Name" />
            </div>
            <div className="mb-4">
                <input type="text" className="form-control" 
                name='gender' value={user.gender} onChange={handleChangeUser}
                placeholder="Gender" />
            </div>
            <div className="mb-4">
                <input type="text" className="form-control" 
                name='job' value={user.job} onChange={handleChangeUser}
                placeholder="Job" />
            </div>
            <div className="mb-4">
                <input type="text" className="form-control" 
                name='dob' value={user.dob} onChange={handleChangeUser}
                placeholder="Date of Birth (YYYY-MM-DD)" />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary" >Update</button>
            </div>
        </div>
        
        </form>
        
    </div>
  )
}
