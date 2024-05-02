import * as React from 'react'
import { Link as AnchorTag } from 'react-router-dom'
import Button from '../button/button-component'
import { links } from './nav-bar-utils'
import './nav-bar.css'




const NavBar = ({
  className , auth,
  scrollEffect = false, ...otherProps
}) => {
  const [navScroll, setNavScroll] = React.useState('')
  React.useEffect(
    () => {
      window.onscroll = () => {
        if (window.scrollY > (window.screen.availHeight - 3)){
          setNavScroll('nav-up')
        } else
        {
          setNavScroll('')
        }
      }
    }, [navScroll]
  )

  return (
  	<nav
      className={`nav-bar ${className} ${ navScroll }`}
      { ...otherProps }
    >
  		<h2 style={{color: 'white'}}>Rockcrest.</h2>
      <ul className='nav-links'>
        {
          links
          .map(
            (c, i) => (
              <li className='nav-link' key={i}>
                <AnchorTag className='nav-link' to={c.path}>
                  {
                    c.page
                  }
                </AnchorTag>
              </li>
            )
          )
        }
      </ul>
      {
        auth ? (
          <div className='nav-bar-buttons'>
            <Button
              className='nav-bar-login login-btn'
            >
              Login
            </Button>
            <Button
              className='nav-bar-signup signup-btn'
            >
              Sign-Up
            </Button>
          </div>
        ): ''
      }
  	</nav>
  )
}
export default NavBar