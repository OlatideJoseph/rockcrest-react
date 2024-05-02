import * as React from 'react'
import './sub-section-listing-card.css'

const CardSSListing = ({
    title, listingNo, cardImage = '', ...others
  }) => {

	return (
    <div
      className='card-ss-listing'
      {...others}
    >
      <div className='card-ss-listing-image-container'>
        {
          cardImage ? (
            <img
              src={ cardImage.image }
              alt={ cardImage.alt }
              width={ cardImage.width }
            />
          ): null
        }
      </div>
      <p>
        { title }
      </p>
      <small className='card-ss-listing-no'>
        { listingNo } Listing
      </small>
    </div>
  )
}

export default CardSSListing