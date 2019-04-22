import React, { Component } from 'react';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PageNotFound from './components/pageNotFound';
import ScrollToTop from './components/scrollToProp';
import cookie from 'universal-cookie'
import {connect} from 'react-redux';
import { Route ,withRouter, Switch } from 'react-router-dom';

import { keepLogin } from './1.actions';

import logo from './logo.svg';
import './App.css';


const objCookie = new cookie()
class App extends Component {
  componentDidMount(){
    var terserah = objCookie.get('userData')
    if(terserah !== undefined){
      this.props.keepLogin(terserah)
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <ScrollToTop>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/login' component={Login} exact/>
                <Route path='/register' component={Register} exact/>
                {/* <Route path='/product' component={Product} exact/>
                <Route path='/cart' component={Cart} exact/>
                <Route path='/manage' component={ManageProduct} exact/>
                <Route path='/history' component={History} exact/>
                <Route path='/product-detail/:terserah' component={ProductDetail} exact/> */}
                <Route path='*' component={PageNotFound} exact/>
            </Switch>
          </ScrollToTop>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cookie : state.user.cookie,
    id : state.user.id
  }
}

export default withRouter(connect(mapStateToProps,{keepLogin})(App));
