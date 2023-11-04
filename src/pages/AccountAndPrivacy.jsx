import React from 'react'
import ToggleSwitch from '../Components/ToggleSwitch'


function accountAndPrivacy() {
  return (
    <>
      <h1 className='text-3xl font-semibold p-10 my-11 mx-36'>Accounts and Privacy</h1>
      <div className='wrapper w-3/5 mx-auto'>
      <div className='my-8'>
      <div className='flex justify-between'>
      <h2 className='w-2/5 text-xl font-medium'>Personal Info</h2>
      <h2 className='text-xl font-medium'>Visibility</h2>
      </div>
      <ToggleSwitch text = "Phone No"/>
      <ToggleSwitch text = "E-mail"/>
      <ToggleSwitch text = "Profile Pic"/>
      </div>

      <div className='my-8'>

      <h2 className='w-2/5 text-xl font-medium'>College Info</h2>

      <ToggleSwitch text = "Department"/>
      <ToggleSwitch text = "Year"/>
      <ToggleSwitch text = "Clubs"/>
      </div>


      <div className='my-8'>
      <h2 className='text-xl font-medium mx-22'>Socials</h2>
      <ToggleSwitch text = "Instagram"/>
      <ToggleSwitch text = "Snapchat"/>
      <ToggleSwitch text = "Spotify"/>
      </div>
      </div>

    </>
  )
}

export default accountAndPrivacy