//#region style
import React, { Component } from 'react';
import '../support/loginSupport/images/icons/favicon.ico';
import '../support/loginSupport/vendor/bootstrap/css/bootstrap.min.css';
import '../support/loginSupport/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../support/loginSupport/fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import '../support/loginSupport/vendor/animate/animate.css';
import '../support/loginSupport/vendor/css-hamburgers/hamburgers.min.css';
import '../support/loginSupport/vendor/animsition/css/animsition.min.css';
import '../support/loginSupport/vendor/select2/select2.min.css';
import '../support/loginSupport/vendor/daterangepicker/daterangepicker.css'; 
import '../support/loginSupport/css/util.css';
import '../support/loginSupport/css/main.css';
import bgImg from '../support/loginSupport/images/bg-01.jpg';
//#endregion

import { Link ,Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginAction } from './../1.actions';

import Loader from 'react-loader-spinner'
import cookie from 'universal-cookie'
import Axios from 'axios';
import { urlApi } from '../support/urlApi';


class Login extends Component {
  componentDidMount(){
    const script = document.createElement("script");
    script.src = '../support/loginSupport/vendor/animsition/js/animsition.min.js';
    script.async = true;
    document.body.appendChild(script);
  }

  onBtnLoginClick=()=>{
    // alert(this.refs.email.value+' '+ this.refs.password);    
    Axios.post(urlApi+'auth/signin', {
      email : this.refs.email.value,
      password : this.refs.password.value
    })
    .then((res) => {
      //alert('ayam')
      console.log(res);
    }).catch((err) => {
      //alert('kucing')
      console.log(err);
    });
  }

  render() {  
    if(this.props.email){
      return(
          <Redirect to='/' />
      ) 
  }
    return (
      <div>
        <div className='limiter'>
        
            <div className='container-login100'>
              <div className='wrap-login100'>
                <form className='login100-form validate-form'>
                  <span className='login100-form-title p-b-43'>
                    Login to continue
                  </span>
                  <div className='wrap-input100 validate-input' data-validate='Valid email is required: ex@abc.xyz'>
                    <input className='input100' type='text' name='email' ref="email" id="inputEmail" placeholder="Email"/>
                    <span className='focus-input100' />
                    <span className='label-input100'></span>

                  </div>
                  <div className='wrap-input100 validate-input' data-validate='Password is required'>
                    <input className='input100' type='password' name='pass' ref="password" id="inputPassword" placeholder="Password" required/>
                    <span className='focus-input100' />
                    <span className='label-input100'></span>
                  </div>
                  <div className='flex-sb-m w-full p-t-3 p-b-32'>
                    <div className='contact100-form-checkbox'>
                      <input className='input-checkbox100' id='ckb1' type='checkbox' name='remember-me' />
                      <label className='label-checkbox100' htmlFor='ckb1'>
                        Remember me
                      </label>
                    </div>
                    <div>
                      <a href='#' className='txt1'>
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div className='container-login100-form-btn '>
                    <button type="button" className='login100-form-btn' onClick={this.onBtnLoginClick} style={{backgroundColor : "#d6cbc7"}}>
                      Login
                    </button>
                  </div>
                  <div className='text-center p-t-46 p-b-20'>
                    <span className='txt2'>
                      or sign up here
                    </span>
                  </div>
                </form>
                <div className='login100-more' style={{backgroundImage: `url(${bgImg})`}}>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    anjing : state.auth.email
  }
}
export default connect(mapStateToProps,{LoginAction})(Login)
