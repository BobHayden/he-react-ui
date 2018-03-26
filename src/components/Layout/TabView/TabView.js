/*
 * TabView
 */

// Vendor
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import style from './TabView.scss'
import Heading from '../Heading'

class TabView extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired
      })
    )
  }

  renderTabs = (tabs) => {
    return tabs.map((tab, index) => (
      <NavLink
        key={index}
        className={style.tab}
        activeClassName={style.selected}
        to={tab.route}
        title={tab.title}
      >
        <span>{tab.title}</span>
      </NavLink>
    ))
  }

  render () {
    const { heading, tabs } = this.props

    return (
      <div>
        <div className={style.barOuter}>
          <div className={style.barInner}>
            <Heading h1 nav className={style.heading}>{heading}</Heading>
            <div className={style.tabs}>
              {this.renderTabs(tabs)}
            </div>
          </div>
        </div>
        <div className={style.contentPusher} />
      </div>
    )
  }
}

export default TabView
