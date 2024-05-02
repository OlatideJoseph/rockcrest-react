import * as React from 'react'
import NavBar from '../../components/nav-bar/nav-bar-component'
import Footer from '../../components/footer/footer-component'
import './selling.css'

const SellingPage = () => {
	document.title = 'RockCrest - Selling'
	return (
    <>
      <NavBar
        style={{backgroundColor: '#F39C12', paddingLeft: '100px'}}
        auth={''}
      />
  		<h1>SellingPage</h1>
      <Footer>
      </Footer>
    </>
	)
}

export default SellingPage