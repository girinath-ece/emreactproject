import React from 'react'
import { NavLink } from 'react-router-dom'
import './Transaction.css'

export default function Transaction() {
  return (
    <div class="container aos-init aos-animate" data-aos="fade-up" className='userDiv'>
        <header class="section-header">
          <p class='para'>Welcome to Transactions Section</p>
        </header>
        <div className='row gy-6'>
          <div class="col-lg-6 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
            <NavLink className='nav-links' to='/allTransactions'>
              <h3>View All Transactions</h3>
              <p>Click to view the list of all transactions</p>
            </NavLink>
          </div>
          <div class="col-lg-6 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
            <NavLink className='nav-links'  to='/addUser'>
              <h3>Add a Transaction</h3>
              <p>Click to add a new Transaction</p>
            </NavLink>
          </div>
        </div>
        <div className='row gy-6'>
          <div class="col-lg-6 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
            <NavLink className='nav-links'  to='/getAllUsers'>
              <h3>Update a Transaction</h3>
              <p>Click to update any Transaction</p>
            </NavLink>
          </div>
          <div class="col-lg-6 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">  
            <NavLink className='nav-links' to='/deleteUser'>
              <h3>Delete a Transaction</h3>
              <p>Click to delete any Transaction</p>
            </NavLink>
          </div>

        </div>
      </div>
  )
}