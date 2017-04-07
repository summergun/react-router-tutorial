import React from 'react'
import {Link} from 'react-router'
import NavLink from './NavLink'


export default React.createClass({
  render() {
    return(
    <div className="well">
      <h1>React Tutorial</h1>
      <ul className ="nav nav-tabs">
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
        {/*render children inside of App*/}
    </div>
    )
  }
})
