import ldisplay from './images/ldisplay.jpg'
import house from '../../assets/Group 10.svg'
import hotel from '../../assets/Group 9.svg'
import apartment from '../../assets/Group 12.svg'
import townHouse from '../../assets/Group 11.svg'

export const cities = [
  { name: 'Ketu', value:'Ketu' },
  { name: 'Ikeja', value:'Ikeja' },
  { name: 'Lagos Island', value:'Lagos Island' }
]
export const firstCategory = [
  { name: 'Residential', value: 'Residential' },
  { name: 'Commercial', value: 'Commercial' },
  { name: 'Rentals', value: 'Rentals' },
]

export const priceRange = [
  { name: 'N 150,000 - 250,000', value: 'Ketu'},
  { name: 'N 250,000 - 450,000', value: 'Ikeja'},
  { name: 'N 450,000 - 650,000', value: 'Lagos Island'},
]

export const cardSSContentListing = [
  { title: 'Apartments', listingNo: 189, cardImage: {
    image: apartment,
    alt: 'image-alt',
    // width: '150px'
  } },
  { title: 'House', listingNo: 284 , cardImage: {
    image: house,
    alt: 'image-alt2',
    // width: '150px'
  } },
  { title: 'Hotels', listingNo: 94, cardImage: {
    image: hotel,
    alt: 'image-alt3',
    // width: '150px'
  } },
  { title: 'TownHouse', listingNo: 50, cardImage: {
    image: townHouse,
    alt: 'image-alt4',
    // width: '150px'
  } }
]