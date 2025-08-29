import React from 'react'
import Home from './Travisa/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Travisa/Pages/About'
import Service from './Travisa/Pages/Service'
import Contact from './Travisa/Pages/Contact'
import Feature from './Travisa/Pages/Feature'
import Countries from './Travisa/Pages/Countries'
import Training from './Travisa/Pages/Training'
import Testimonial from './Travisa/Pages/Testimonial'
import Error from './Travisa/Pages/Error'
import Addcountries from './Admin/Admin-pages/Addcountries'
import Dashboard from './Admin/Admin-pages/Dashboard'
import Addfeatures from './Admin/Admin-pages/Addfeatures'
import Addtraining from './Admin/Admin-pages/Addtraining'
import Countrymanage from './Admin/Managing-Data/Countrymanage'
import Featuresmanage from './Admin/Managing-Data/Featuresmanage'
import Trainingmanage from './Admin/Managing-Data/Trainingmanage'

function App() {
  return (
    <div>
      {/* <h1>Hello this new Website</h1> */}

      <BrowserRouter>

        <Routes>
          {/* Website pages */}
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Features" element={<Feature />} />
          <Route path="/Countries" element={<Countries />} />
          <Route path="/Training" element={<Training />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="*" element={<Error />} />


          {/* Admin pages */}
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="/Addcountry" element={<Addcountries />} />
          <Route path="/Addfeatures" element={<Addfeatures />} />
          <Route path="/Addtraining" element={<Addtraining />} />

          {/* Admin Manage Data */}
          <Route path="/Managecountry" element={<Countrymanage />} />
          <Route path="/Managefeatures" element={<Featuresmanage />} />
          <Route path="/Managetraining" element={<Trainingmanage />} />


        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
