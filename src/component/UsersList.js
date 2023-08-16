import React, { useEffect,useState } from 'react'
import { GetAllUsers } from '../services/GetAllUsers'
import './UsersList.css'

export default function UsersList() {

    const [users, setusers] = useState([])

    useEffect(
        ()=>{
            GetAllUsers()
            .then(users=>setusers(users))
        },[]
    )
  return (
    <div className='listDiv'>
        <p><b>Total number of Credit Card Users found <i>{users.length}</i>.</b></p>
        {
            users.length==0?<p>No Users found.</p>
            :
            <>
            <tbody>
                <tr className='tableHead'>
                    <th className='th'>Customer ID</th>
                    <th className='th'>First Name</th>
                    <th className='th'>Last Name</th>
                    <th className='th'>Gender</th>
                    <th className='th'>Job</th>
                    <th className='th'>Date of Birth (YYYY-MM-DD)</th>
                </tr>
                {
                    users.map((u,index)=>(
                        <tr key={index}>
                            <td className='tb'>{u.customerId}</td>
                            <td className='tb'>{u.first}</td>
                            <td className='tb'>{u.last}</td>
                            <td className='tb'>{u.gender}</td>
                            <td className='tb'>{u.job}</td>
                            <td className='tb'>{u.dob.substring(0,10)}</td>
                        </tr>
                    ))
                }
            </tbody>
            {/* {
                users.map(user=> <p>{JSON.stringify(user)}</p>)
            } */}
            </>
        }
        
    </div>
  )
}

// {data.map((item, index) => (
//     <tr key={index}>
//       <td>{item.title}</td>
//       <td>{item.brand}</td>
//       <td>
//         <img src={item.thumbnail} alt="" height={100} />
//       </td>
//       <td>{item.price}</td>
//       <td>{item.rating}</td>
//     </tr>
//   ))}