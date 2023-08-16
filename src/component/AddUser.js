import React, { useState}  from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { addUser } from '../services/GetAllUsers';
import './AddUser.css'

export default function AddUser() {
    let navigate = useNavigate();
    const [user, setuser] = useState({first:'',last:'',gender:'',job:'',dob:''})
    
    const handleChange = (event)=>{
        let {name,value} = event.target;
        let newUser = {...user,[name]:value}
        setuser(newUser)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(user)
        addUser(user)
        .then(res=>navigate('/usersList'))

    }

  return (
    <div class='addDiv'>
        <form onSubmit={handleSubmit}>
        <div className="m-3">
            <div className="mb-4">
                <input type="text" className="form-control" 
                name='first' value={user.first} onChange={handleChange}
                placeholder="First Name" />
            </div>
            <div className="mb-4">
                <input type="text" className="form-control" 
                name='last' value={user.last} onChange={handleChange}
                placeholder="Last Name" />
            </div>
            <div className="mb-4">
                <input type="text" className="form-control" 
                name='gender' value={user.gender} onChange={handleChange}
                placeholder="Gender" />
            </div>
            <div className="mb-4">
                <input type="text" className="form-control" 
                name='job' value={user.job} onChange={handleChange}
                placeholder="Job" />
            </div>
            <div className="mb-4">
                <input type="text" className="form-control" 
                name='dob' value={user.dob} onChange={handleChange}
                placeholder="Date of Birth (YYYY-MM-DD)" />
            </div>
            <div className='row text-center m-3'>
                <div className="col-12">
                    <button type="submit" 
                    className="btn btn-primary">SAVE</button>
                </div>
            </div>
        </div>
        
        </form>
    </div>
  )
}
