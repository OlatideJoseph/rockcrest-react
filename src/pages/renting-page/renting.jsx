import * as React from 'react'
import NavBar from '../../components/nav-bar/nav-bar-component'
import Footer from '../../components/footer/footer-component'
import './renting.css'

const RentingPage = () => {
  document.title = 'RockCrest - Renting'
  return (
    <>
      <NavBar
        style={{backgroundColor: '#F39C12', paddingLeft: '100px'}}
      />
      <h1>Renting Page !</h1>
      <Footer>
      </Footer>
    </>
  )
}

export default RentingPage