import * as React from 'react'
import * as Router from 'react-router-dom'
import NavBar from '../../components/nav-bar/nav-bar-component'
import FirstVisiblePaper from '../../pages-component/home-page/visible-paper-component'
import NumberedComponent from '../../pages-component/home-page/number-component'
import SmallViewText from '../../pages-component/home-page/small-view-text-component'
import { HOneTextView, HTwoTextView } from '../../components/text/text-component'
import CardSSListing from '../../components/cards/sub-section-listing-card'
import BabySectionCard from '../../components/cards/baby-section-list-card'
import Button from '../../components/button/button-component'
import Footer from '../../components/footer/footer-component'
import { cardSSContentListing } from './home-utils'
import Room3d from './images/3droom.jpg'
import Behance from './images/behance.png'
import Daily from './images/daily.png'
import Google from './images/google.png'
import Slack from './images/slack.png'
import Display from './images/ldisplay.jpg'
import Microsoft from './images/microsoft.png'
import SearchIcon from '../../assets/search-icon.png'
import Section4 from '../../assets/section1.jpeg'
import './home.css'

const HomePage = (props) => {
  document.title = 'RockCrest - Home'
  const navigate = Router.useNavigate()
  const navigateTo = (path, options) => (
    /* Navigates to the path provided */
    navigate(path)
  )
  const seeMoreClickEvent = () => {navigateTo('/trending/')}
  return (
    <>
      <div
        className='first-view'
        style={
          { backgroundImage:`url(${ Room3d })` }
        }
      >
        <NavBar
          auth
        />
        <div className='first-view-pad-wrap'>
          <HOneTextView
            className='first-view-text'
          >
            Buy, Rent Or Sell Your Dream House For The Most
            <span
              className='first-view-orange-text'
            >
              Favourable Price.
            </span>
          </HOneTextView>
          <SmallViewText/>
          <FirstVisiblePaper
            className='first-visible-paper'
          />
        </div>
      </div>
      <div
        className='second-view'
      >
        <p className='avadis'>
          Trusted by 20,000+ Companies
        </p>
        <div
          className='second-packed-images'
        >
          <img
            className='slack'
            src={ Slack }
          />
          <img
            className='behance'
            src={ Behance }
          />
          <img
            className='google'
            src={ Google }
          />
          <img
            className='microsoft'
            src={ Microsoft }
          />
          <img
            className='daily'
            src={ Daily }
          />
        </div>
        <HOneTextView className='second-view-header'>
          Properties We Have
        </HOneTextView>
        <small className='second-small-text'>
          Take a peek at the Range of Homes and Space We offer, Tailored to Fit Your Lifestyle
        </small>
        <div
          className='sub-section-listing'
        >
          {
            cardSSContentListing.map( (v, i) => (
              <CardSSListing
                {...v}
                key={i}
              />
            ))
          }
        </div>
        <HOneTextView
          className='second-view-header'
        >
          How it Works
        </HOneTextView>
        <small
          className='second-small-text'
        >
          Our unique process gives you mind from home, rent services.
        </small>
      </div>
      <div
        className='third-view'
      >
        <div
          className='third-view-first'
        >
          <div
            className='tvfc'
          >
            <div
              className='third-view-search-container'
            >
              <img src={ SearchIcon } alt='search-icon' width='50' height='50'/>
            </div>
            <strong>Search a property</strong><br/>
            <small>
              Find a home or space from our search bar. Enter your<br/>
              specific location, property type, and price range.<br/>
              Simpler Home or space from our search bar. 
            </small>
          </div>
          <div
            className='tvfc2'
          >
            <BabySectionCard
              image={ Display }
              // className='raised-card'
            />
          </div>
        </div>
        <div
          className='fxfc'
        >
          {/*Trending Section*/}
          <div
            className='fxfc1'
          >
            <div id='fxfc1-title'>
              <strong
                style={{fontSize: '40px', fontWeight: '700px'}}>
                Trending
              </strong>
              <Button
                id='fxfc1-title-btn'
                onClick={ seeMoreClickEvent }
              >
                See more
              </Button>
            </div>
            <small
              style={
                { color:'lightgray', paddingBottom:'5px' }
              }
            >
              Discover the hottest properties in the market
            </small>
          </div>
          <div
            className='trending-property-setter'>
            <BabySectionCard
              image={ Display }
            />
            <BabySectionCard
              image={ Display }
            />
            <BabySectionCard
              image={ Display }
            />
            </div>
        </div>
        <div
          className='fourth-section-container'
        >
          <img src={Section4} width='628' height='689'/>
          <div className='fscs'>
            <HTwoTextView>
              Why Work With Rockcrest?
            </HTwoTextView>
            <small style={{ color: 'lightgray' }}>
              At Rockcrest, we specialize at providing expert support
              for your real estate success
            </small>
            <NumberedComponent
              no='01'
              title='Partner with the finest local agents.'
              info={
                'Work with our top notch local agents for the best outcome.'
              }
            />
            <NumberedComponent
              no='02'
              title='Save more on commissions.'
              info={
                'Keep more money in your pocket with our lower commission rate.'
              }
            />
            <NumberedComponent
              no='03'
              title='Swift home selling and buying.'
              info={
                'Buy or sell your home quickly and smoothly with us by your side.'
              }
            />
          </div>
        </div>
      </div>
      <div className='home-footer'>
        <Footer>
          Home Page Footer
        </Footer>
      </div>
    </>
  )
}

export default HomePage