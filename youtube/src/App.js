
import './App.css';
import {Switch, Link, Route} from 'react-router-dom'
import React, { Component } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Video from './Components/Video'
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
        <nav>
          <Link to='/'>Home</Link>
          {" "}
          <Link to='/about'>About</Link>
        </nav>
        <div>
          <Switch>
            <Route exact path='/' component={Home} /> 
            <Route path='/about' component={About} />
            <Route path='/video/:id' component={Video} />
          </Switch>
        </div>

      </div>
    )
  }
}
