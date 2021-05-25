
import './App.css';
import {Link, Route} from 'react-router-dom'
import React, { Component } from 'react'
import Home from './Components/Home'
import About from './Components/About'
export default class App extends Component {
  constructor(){
    super()
    this.state = {

    }

  }
  render() {
    return (
      <div>
        <nav className="Navbar">
          <Link to="/" className="Navbar-Items">
            Youtube
          </Link>

          <Link to='/' className="Navbar-Items">
            Home
          </Link>
          
          <Link to='/about' className="Navbar-Items">
            About
          </Link>
        </nav>
        <div>
          <Route exact path='/' component={Home} /> 
          <Route path='/about' component={About} />
        </div>

      </div>
    )
  }
}
