import React from 'react'
import PropTypes from 'prop-types'

export default function Add (props) {
  return (
    <svg className={props.className} width={`${props.width}px`} height={`${props.height}px`} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(5.000000, 5.000000)">
        <path fill={props.color} d="M5.99439811,6 L5.99439811,1.34314575 C5.99439811,0.790861001 6.44211336,0.343145751 6.99439811,0.343145751 C7.54668286,0.343145751 7.99439811,0.790861001 7.99439811,1.34314575 L7.99439811,6 L12.6512524,6 C13.2035371,6 13.6512524,6.44771525 13.6512524,7 C13.6512524,7.55228475 13.2035371,8 12.6512524,8 L7.99439811,8 L7.99439811,12.6568542 C7.99439811,13.209139 7.54668286,13.6568542 6.99439811,13.6568542 C6.44211336,13.6568542 5.99439811,13.209139 5.99439811,12.6568542 L5.99439811,8 L1.33754386,8 C0.785259109,8 0.337543859,7.55228475 0.337543859,7 C0.337543859,6.44771525 0.785259109,6 1.33754386,6 L5.99439811,6 Z" />
      </g>
    </svg>
  )
}

Add.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string
}