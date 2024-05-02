import * as React from 'react'
import './text.css'

export const HOneTextView = ({children, ...props}) => (
	<h1 {...props}>
    {
      children
    }
  </h1>
)

export const HTwoTextView = ({ children, ...props }) => (
  <h2 {...props}>
    {
      children
    }
  </h2>
)

export const HThreeTextView = ({ children, ...props }) => (
  <h3 {...props}>
    {
      children
    }
  </h3>
)