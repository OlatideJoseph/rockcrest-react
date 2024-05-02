import * as React from 'react'
import './number.css'

const NumberedInformation = ({ no, title, info }) => (
  <div className='numbered-information'>
    <div className='yellow-spotting'>
      {no}
    </div>
    <div className='number-detail'>
      <p className='number-title'>{title}</p>
      <small className='number-info'>
        {info}
      </small>
    </div>
  </div>
)

export default NumberedInformation