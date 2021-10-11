import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Product from './section/Product'
import About from './section/About' 
import Cart from './section/Cart'
import Contact from './section/Contact'
import Detail from './section/Detail' 
import Login from './section/Login' 
import Payment from './section/Payment'


export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" exact component={Product} />
        <Route path="/product" exact component={Product} />
        <Route path="/product/:id" exact component={Detail} />
        <Route path="/about" exact component={About} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/login" exact component={Login} />
        <Route path="/payment" exact component={Payment} />
      </section>
    )
  }
}

export default Section

