import * as React from 'react'

const SmallViewText = ({ children, ...props }) => (
  <p
    className='small-view-text'
    {
      ...props
    }
  >
    Find your dream home confidently with us - 
    best prices, seamless transactions, personalized guidance way
  </p>
)

export default SmallViewText