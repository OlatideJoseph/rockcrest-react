import * as React from 'react'
import NavBar from '../../components/nav-bar/nav-bar-component'
import Footer from '../../components/footer/footer-component'
import './about-us.jsx'

const AboutUsPage = () => {
  document.title = 'RockCrest - About-Us'
	return (
		<>
			<NavBar
			  style={{backgroundColor: '#F39C12', paddingLeft: '100px'}}
			  auth={''}
			/>
			<h1>About Us Page !</h1>
			<Footer>
			</Footer>
		</>
	)
}

export default AboutUsPage
