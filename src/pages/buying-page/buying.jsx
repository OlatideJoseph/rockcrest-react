import * as React from 'react'
import BabySectionCard from '../../components/cards/baby-section-list-card'
import Display from '../../assets/Rectangle 63.jpg'
import NavBar from '../../components/nav-bar/nav-bar-component'
import Footer from '../../components/footer/footer-component'
import './buying.css'

const BuyingPage = () => {
  document.title = 'RockCrest - Buying'
	return (
		<>
			<NavBar
			  style={{backgroundColor: '#F39C12', paddingLeft: '100px'}}
			  auth={''}
			/>
			<div className='buying-fluid'>
				<h2>Buying</h2>
				<div className='buying-cards'>
					<BabySectionCard
              image={ Display }
              className='buying-card-id'
          />
          <BabySectionCard
              image={ Display }
              className='buying-card-id'
          />
          <BabySectionCard
              image={ Display }
              className='buying-card-id'
          />
          <BabySectionCard
              image={ Display }
              className='buying-card-id'
          />
          <BabySectionCard
              image={ Display }
              className='buying-card-id'
          />
          <BabySectionCard
              image={ Display }
              className='buying-card-id'
          />
				</div>
			</div>
			<Footer>
			</Footer>
		</>
	)
}

export default BuyingPage