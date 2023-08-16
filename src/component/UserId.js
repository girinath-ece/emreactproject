import React, { useEffect,useState } from 'react'
import './UserId.css'
import { GetUserById } from '../services/GetAllUsers'
import { useParams } from 'react-router-dom'

export default function UserId() {
    let {id} = useParams()
    const [user, setuser] = useState([])

    useEffect(() => {
    //   GetUserById(Number(id))
    //   .then(user=>setuser(user))
    }, [])
    
    const fetchUser=()=>{
        // GetUserById(Number(id))
        // .then(user=>setuser(user))
        // {
            document.getElementById('output').innerHTML = "Heading"
            // <>
            // <tbody>
            //     <tr>
            //         <th>Customer ID</th>
            //         {/* <td>{user.customerId}</td> */}
            //     </tr>
            //     <tr>
            //         <th>First Name</th>
            //         {/* <td>{user.first}</td> */}
            //     </tr>
            //     <tr>
            //         <th>Last Name</th>
            //         {/* <td>{user.last}</td> */}
            //     </tr>
            //     <tr>
            //         <th>Gender</th>
            //         {/* <td>{user.gender}</td> */}
            //     </tr>
            //     <tr>
            //         <th>Job</th>
            //         {/* <td>{user.job}</td> */}
            //     </tr>
            //     <tr>
            //         <th>Date of Birth (YYYY-MM-DD)</th>
            //         {/* <td>{user.dob.subString(0,10)}</td> */}
            //     </tr>
            // </tbody>
            // </>
        // }
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
                        name='id' placeholder="Enter Customer ID" />
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
