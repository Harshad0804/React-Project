import React from 'react'
import Anavbar from '../Admin-Common/Anavbar'
import Aheader from '../Admin-Common/Aheader'

function Dashboard() {
  return (
    <div>
      <Anavbar />
      <Aheader title="DASHBOARD" name="Dashboard"/>

      <h1 className='text-center p-5'><i>THIS IS ADMIN DASHBOARD</i></h1>
    </div>
  )
}

export default Dashboard
