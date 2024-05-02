import * as React from 'react'
import Input from '../../components/input/input-component'
import Option from '../../components/option/option-component'
import Button from '../../components/button/button-component'
import SearchIcon from '../../assets/search-icon.png'
import { cities, firstCategory as FC, priceRange as PR } from '../../pages/home-page/home-utils'


const FirstVisiblePaper = ({ children, ...props }) => (
  <div
    { ...props }
  >
    <form action='#' className='first-view-form'>
      <div className='input-wrapper'>
        <Input
         className='first-view-input'
         name='location'
         type='text'
         placeholder='City/Location'
        />
        <Input
          className='first-view-input'
          name='propertytype'
          type='text'
          placeholder='Property Type'
        />
        <Input
          className='first-view-input'
          name='pricerange'
          type='text'
          placeholder='Price Range'
        />
        <select
          name='place'
          className='first-view-select'
        >
          {
            cities.map((obj, ind) => (
              <Option
                key={ ind }
                value={ obj.value }
              >
                { obj.name }
              </Option>
            ))
          }

        </select>
        <select
          name='type'
          className='first-view-select'
        >
          {
            FC.map((obj, ind) => (
              <Option
                key={ ind }
                value={ obj.value }
              >
                { obj.name }
              </Option>
            ))
          }
        </select>
        <select
          name='price'
          className='first-view-select'
        >
          {
            PR.map((obj, ind) => (
              <Option
                key={ ind }
                value={ obj.value }
              >
                { obj.name }
              </Option>
            ))
          }
        </select>
      </div>
      <Button
        type='button'
        className='search-btn'
      >
        <img src={ SearchIcon } alt='search-icon' width='30' height='30'/>
      </Button>
    </form>
  </div>
)

export default FirstVisiblePaper