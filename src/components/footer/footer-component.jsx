import * as React from 'react'
import { Link } from 'react-router-dom'
import { HOneTextView, HThreeTextView } from '../text/text-component'
import Facebook from '../../assets/icons8-facebook-50.png'
import Instagram from '../../assets/icons8-instagram.gif'
import Twitter from '../../assets/icons8-twitter.gif'
import './footer.css'

const Footer = ({ children, ...props }) => {
	return (
    <footer  {...props}>
      {
        children
      }
      <div className='main-footer'>
        <div className='footer-f-m'>
          <HOneTextView>
            Rockcrest
          </HOneTextView>
          <p>
            Buy, Rent or Sell your dream house for the 
            most favourable price
          </p>
          <div className='socials'>
            <div className='socials-boxing'>
              <img src={Facebook} alt='facebook'/>
            </div>
            <div className='socials-boxing'>
              <img src={Instagram} alt='instagram'/>
            </div>
            <div className='socials-boxing'>
              <img src={Twitter} alt='twitter/x'/>
            </div>
          </div>
        </div>
        <div className='footer-f-m'>
          <HThreeTextView>
            Explore
          </HThreeTextView>
          <Link to='#'>
            Buy a Home
          </Link>
          <Link to='#'>
            Sell your Home
          </Link>
          <Link to='#'>
            Rent a Home
          </Link>

        </div>
        <div className='footer-f-m'>
          <HThreeTextView>
            Resources
          </HThreeTextView>
          <Link to='#'>
            About Us
          </Link>
          <Link to='#'>
            FAQs
          </Link>
          <Link to='#'>
            Rockcrest Blog
          </Link>
        </div>
        <div className='footer-f-m'>
          <HThreeTextView>
            Contact Us
          </HThreeTextView>
          <Link to='tel:+234 00-00-0000'>
            00-00-0000
          </Link>
          <Link to='mailto:info@rockcrest.com'>
            info@rockcrest.com
          </Link>
          <Link to='#'>
            67 Ocean Avenue, Lagos<br/> Nigeria
          </Link>
        </div>
        {/*<div className='footer-f-m'>
          <HThreeTextView>
            Explore
          </HThreeTextView>
        </div>*/}
      </div>
    </footer>
	)
}

export default Footer