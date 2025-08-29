import React from 'react'
import Aheader from '../Admin-Common/Aheader'
import Anavbar from '../Admin-Common/Anavbar'

function Testimonialmanage() {
  return (
    <div>

      <Anavbar />
      <Aheader title="Manage Testimonial" name="Testimonial" />
      <h1 className='text-center my-4'><i><b>MANAGE DATA OF TESTIMONIAL</b></i></h1>
      <div className="container">
        <table class="table my-4 table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Testimonialmanage
