/**
*
* Label
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Icon from '../../Icon'
import style from './Label.scss'
import {sp_red} from '../../../styles/colors.js'

class Label extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    error: PropTypes.bool,
    htmlFor: PropTypes.string.isRequired,
    children: PropTypes.array
  }

  static defaultProps = {
    disabled: false,
    error: false,
    required: false,
    onChange: () => null
  }

  render () {
    const { children, className, error, htmlFor, ...restProps } = this.props
    return (
      <div
        className={classnames(style.label, {[style.error]: error, [className]: className})}
        {...restProps}>
        {error && <Icon className={style.icon} name="Alert" color={sp_red} width="22" height="22" />}
        <label htmlFor={htmlFor}>{children}</label>
      </div>
    )
  }
}

export default Label