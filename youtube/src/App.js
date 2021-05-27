
import './App.css';
import {Switch, Link, Route} from 'react-router-dom'
import React, { Component } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Comment from './Components/Comment'
export default class App extends Component {
  constructor(){
    super()
    //needs state object linking from Home 
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <nav className="Navbar">

          <Link to='/' className="Navbar-Items">
            Home
          </Link>
          
          <Link to='/about' className="Navbar-Items">
            About
          </Link>
        </nav>
        <div>
          <Switch>
            <Route exact path='/' component={Home} /> 
            <Route path='/about' component={About} />
            <Route path='/video/:id' render={(props) => <Comment {...props}/>} />
          </Switch>
        </div>

      </div>
    )
  }
}
