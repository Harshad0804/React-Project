import React, { useEffect, useState } from 'react'
import Anavbar from '../Admin-Common/Anavbar'
import Aheader from '../Admin-Common/Aheader'
import axios from 'axios'

function Trainingmanage() {
  // Read API
  const [trainingmanage, settrainingmanage] = useState([])

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/coaching")
    console.log(res.data)
    settrainingmanage(res.data)
  }

  // Delete Data
  const removedata = async (id)=>{
    const res = await axios.delete(`http://localhost:3000/coaching/${id}`)
    fetchdata()
  }



  return (
    <div>
      <Anavbar />
      <Aheader title="Manage Trainers" name="Trainers" />
      <h1 className='text-center my-4'><i><b>MANAGE DATA OF TRAINERS</b></i></h1>
      <div className="container">
        <table class="table my-4 table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">TITLE</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>

            {
              trainingmanage && trainingmanage.map((data) => {
                console.log(data)
                return (
                  <tr>
                    <th scope="row">{data.id}</th>
                    <td>{data.title}</td>
                    <td>{data.desc}</td>
                    <td>
                      <button className='btn btn-info'>View</button>
                      <button className='btn btn-success mx-3'>Edit</button>
                      <button className='btn btn-danger'  onClick={()=>removedata(data.id)} >Delete</button>
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

export default Trainingmanage
