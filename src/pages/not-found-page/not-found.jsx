import * as React from 'react'
import NotFoundImage from '../../assets/oops/pana.jpg'

const NotFoundPage = () => {
	return (
    <div className='not-found'>
      <h2 style={{color: 'black'}}>OOps! Not Found</h2>
      <img src={NotFoundImage} alt='not-found-image' width='500px'/>
    </div>
	)
}

export default NotFoundPage