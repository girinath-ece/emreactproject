import React,{useEffect,useState} from 'react'
import { getAllTransactions } from '../services/transactionService'
import './TransactionsList.css'

export default function TransactionsList() {

    const [transactions, settransactions] = useState([])

    useEffect(() => {
      getAllTransactions()
      .then(transactions => settransactions(transactions))

    }, [])
    
  return (
    <div className='listDiv'>
        <p><b>Total number of transactions found <i>{transactions.length}</i>.</b></p>
        {
            transactions.length==0?<p>No Transactions found.</p>
            :
            <>
            <tbody>
                <tr className='tableHead'>
                    <th className='th'>Transaction Number</th>
                    <th className='th'>Transaction Date</th>
                    <th className='th'>Transaction Time</th>
                    <th className='th'>Amount</th>
                    <th className='th'>City</th>
                    <th className='th'>Merchant</th>
                    <th className='th'>Category</th>
                    <th className='th'>Customer ID</th>
                    <th className='th'>First Name</th>
                    <th className='th'>Last Name</th>
                    <th className='th'>Gender</th>
                    <th className='th'>Job</th>
                    <th className='th'>Date of Birth (YYYY-MM-DD)</th>
                    <th className='th'>Status</th>
                </tr>
                {
                    transactions.map((u,index)=>(
                        <tr key={index}>
                            <td className='tb'>{u.transNum}</td>
                            <td className='tb'>{u.transDateTransTime.substring(0,10)}</td>
                            <td className='tb'>{u.transDateTransTime.substring(11,16)}</td>
                            <td className='tb'>{u.amt}</td>
                            <td className='tb'>{u.city}</td>
                            <td className='tb'>{u.merchant}</td>
                            <td className='tb'>{u.category}</td>
                            <td className='tb'>{u.customer_id}</td>
                            <td className='tb'>{u.first}</td>
                            <td className='tb'>{u.last}</td>
                            <td className='tb'>{u.gender}</td>
                            <td className='tb'>{u.job}</td>
                            <td className='tb'>{u.dob}</td>
                            <td className='td'>{u.state}</td>
                        </tr>
                    ))
                }
            </tbody>
            </>
        }
    </div>
  )
}
