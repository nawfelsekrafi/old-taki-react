import React from 'react'

const ProfileIcon = () => {
  return (
    <div className="profile-icon-container">
      <img className='user-pic' src="assets/images/nawfel.jpg" alt="nawfel sekrafi" />
      <div>
        <p className="username">محمد أمين</p>
        <p className="description">Admin</p>
      </div>
      <img src="assets/icons/arrow-down.svg" className='nav-arrow-down' alt="show details icon" />
    </div>
  )
}

export default ProfileIcon