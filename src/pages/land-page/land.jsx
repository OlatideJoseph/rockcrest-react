import * as React from 'react'
import NavBar from '../../components/nav-bar/nav-bar-component'
import Footer from '../../components/footer/footer-component'
import './land.css'

const LandPage= () => {
	document.title = 'RockCrest - Lands'
	return (
		<>
			<NavBar
			  style={{backgroundColor: '#F39C12', paddingLeft: '100px'}}
			  auth={''}
			/>
			<h1>Land Page !</h1>
      <Footer>
      </Footer>
		</>
	)
}

export default LandPage