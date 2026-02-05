import React from 'react'

function Navbar({username}) {
  return (
    <div className='main'>
      <div className='navcontent'>
        <img src="logo.png" alt="" />
      <div className='dashboard'>
    <li>Dashboard</li>
    <li>Courses</li>
    <li>Tasks</li>
    <div className='button'>
        <h3>{username}
        <p>{username}@gmail.com</p>
      </h3>
      <button>logout</button>
      </div>
</div>
      </div>
    </div>
  )
}

export default Navbar
