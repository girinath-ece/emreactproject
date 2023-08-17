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
        let getM = document.getElementById('genderM')
        let getF = document.getElementById('genderF')
        if(getM.checked==true)
            user.gender = "M"
        else if(getF.checked==true)
            user.gender = "F"
        console.log(user)
        addUser(user)
        .then(res=>navigate('/usersList'))

    }

  return (
    <div class='addDiv'>
        <form onSubmit={handleSubmit}>
        <div className="m-3">
            <div className="mb-4">
                <label className='lab'> First Name </label>
                <input type="text" className="form-control" 
                name='first' value={user.first} onChange={handleChange}
                placeholder="First Name" />
            </div>
            <div className="mb-4">
                <label  className='lab'>Last Name</label>
                <input type="text" className="form-control" 
                name='last' value={user.last} onChange={handleChange}
                placeholder="Last Name" />
            </div>
            <div className="mb-4">
                <label  className='lab'>Gender</label>
                <input id="genderM" type="radio" name='gender' value={user.gender} onChange={handleChange}/>
                <label id="male" for="genderM">Male</label>
                <input id="genderF" type="radio" name='gender' value={user.gender} onChange={handleChange}/>
                <label for="genderF">Female</label>
            </div>
            <div className="mb-4">
                <label  className='lab'>Job</label>
                <input type="text" className="form-control" 
                name='job' value={user.job} onChange={handleChange}
                placeholder="Job" />
            </div>
            <div className="mb-4">
                <label  className='lab'>Date of Birth</label>
                <input type="date" placeholder="YYYY-MM-DD" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" name='dob' value={user.dob} onChange={handleChange} />
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
