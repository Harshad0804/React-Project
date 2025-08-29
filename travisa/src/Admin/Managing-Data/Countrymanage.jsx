import React, { useEffect, useState } from 'react'
import Anavbar from '../Admin-Common/Anavbar'
import Aheader from '../Admin-Common/Aheader'
import axios from 'axios'

function Countrymanage() {

  const [countrymanage, setcountrymanage] = useState([])

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/country")
    console.log(res.data)
    setcountrymanage(res.data)
  }

  // Delete Data
  const removedata = async (id)=>{
    const res = await axios.delete(`http://localhost:3000/country/${id}`)
    fetchdata()
  }


  return (
    <div>
      <Anavbar />
      <Aheader title="Manage Country" name="Country" />
      <h1 className='text-center my-4'><i><b>MANAGE DATA OF COUNTRY</b></i></h1>
      <div className="container">
        <table class="table my-4 table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">TITLE</th>
              <th scope="col">MANAGE</th>
            </tr>
          </thead>
          <tbody>


            {
              countrymanage && countrymanage.map((data) => {
                console.log(data)
                return (
                  <tr>
                    <th scope="row">{data.id}</th>
                    <td>{data.title}</td>
                    <td>
                      <button className='btn btn-info'>View</button>
                      <button className='btn btn-success mx-3'>Edit</button>
                      <button className='btn btn-danger' onClick={()=>removedata(data.id)} >Delete</button>
                    </td>
                  </tr>
                )
              })
            }



          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Countrymanage
