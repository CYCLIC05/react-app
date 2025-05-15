import React from 'react'
import Navbar from './componenets/Navbar'
import Hero from './componenets/Hero'
import BusinessPartnersComponent from './componenets/BusinessPartnersComponent'
import Monitoring from './componenets/Monitoring'
import Services from './componenets/Services'
import Newsletter from './componenets/Newsletter'
const App = () => {
  return (
    <main className=" overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <BusinessPartnersComponent/>
    
      <Monitoring/>
      <Services/>
      <Newsletter/>
    </main>
  )
}

export default App