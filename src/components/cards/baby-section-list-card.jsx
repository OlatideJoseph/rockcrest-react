import * as React from 'react'
import './baby-section-list-card.css'
import room from '../../assets/Bathtub.svg'
import bathTub from '../../assets/Bedroom.svg'
import garageDoor from '../../assets/farage-door.svg'

const BabySectionCard = ({
  image,
  priceRange='N 1,050,000 - N1,250,000',
  street='23, Adeite street ifako Gbagada',
  bathRoom=4, garage=1, bedRoom=2,
  className, ...otherProps
}) => {
  /* Extends the expected className */
	return (
    <div
      className={`baby-container ${className}`}
      {...otherProps}
    >
      {
        image ? (
          <img
            src={image}
            alt='card-image'
            width='300'
          />
        ): (<p>
            No Image to display
          </p>
        )
      }
      <p className='baby-color-orange'>{ priceRange }</p>
      <p>{ street }</p>
      <hr/>
      <div
        className='baby-properties'
      >
        <div
          className='bpsb'
        >
          <img src={bathTub} alt='bathtub' width='30px' height='30px'/>
          { bedRoom }
          Bedroom
        </div>
        <div
          className='bpsb'
        >
          <img src={room} alt='bathroom' width='30px' height='30px'/>
          { bathRoom }
          Bathroom
        </div>
        <div
          className='bpsb'
        >
          <img
            src={garageDoor}
            alt='garage'
            width='30px'
            height='30px'
          />
          { garage }
          Garage
        </div>
      </div>
    </div>
	)
}

export default BabySectionCard