import * as React from 'react'
import NavBar from '../../components/nav-bar/nav-bar-component'
import Footer from '../../components/footer/footer-component'
import './contact-us.css'

const ContactUsPage = () => {
  document.title = 'RockCrest - Contact-Us'
	return (
		<>
			<NavBar
			  style={{backgroundColor: '#F39C12', paddingLeft: '100px'}}
			  auth={''}
			/>
			<h1>Contact Us Page !</h1>
			<Footer>
			</Footer>
		</>
	)
}

export default ContactUsPage