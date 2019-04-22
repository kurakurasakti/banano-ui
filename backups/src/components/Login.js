import React, { Component } from 'react'
import {Helmet} from "react-helmet";

class Login extends Component {
  render() {
    return (
      <div>
        <Helmet>
          {/* style */}
          <link rel="icon" type="image/png" href="../support/loginSupportimages/icons/favicon.ico"/>
	        <link rel="stylesheet" type="text/css" href="../support/loginSupportvendor/bootstrap/css/bootstrap.min.css" />
	        <link rel="stylesheet" type="text/css" href="../support/loginSupportfonts/font-awesome-4.7.0/css/font-awesome.min.css" />
	        <link rel="stylesheet" type="text/css" href="../support/loginSupportfonts/Linearicons-Free-v1.0.0/icon-font.min.css" />
	        <link rel="stylesheet" type="text/css" href="../support/loginSupportvendor/animate/animate.css" />
	        <link rel="stylesheet" type="text/css" href="../support/loginSupportvendor/css-hamburgers/hamburgers.min.css" />
	        <link rel="stylesheet" type="text/css" href="../support/loginSupportvendor/animsition/css/animsition.min.css" />
	        <link rel="stylesheet" type="text/css" href="../support/loginSupportvendor/select2/select2.min.css" />
	        <link rel="stylesheet" type="text/css" href="../support/loginSupportvendor/daterangepicker/daterangepicker.css" />
	        <link rel="stylesheet" type="text/css" href="../support/loginSupportcss/util.css" />
	        <link rel="stylesheet" type="text/css" href="../support/loginSupportcss/main.css"></link>

          {/* script */}
          <script src="../support/loginSupport/vendor/jquery/jquery-3.2.1.min.js"></script>
          <script src="../support/loginSupport/vendor/animsition/js/animsition.min.js"></script>
          <script src="../support/loginSupport/vendor/bootstrap/js/popper.js"></script>
	        <script src="../support/loginSupport/vendor/bootstrap/js/bootstrap.min.js"></script>
          <script src="../support/loginSupport/vendor/select2/select2.min.js"></script>
          <script src="../support/loginSupport/vendor/daterangepicker/moment.min.js"></script>
	        <script src="../support/loginSupport/vendor/daterangepicker/daterangepicker.js"></script>
          <script src="../support/loginSupport/vendor/countdowntime/countdowntime.js"></script>
          <script src="../support/loginSupport/js/main.js"></script>
        </Helmet>
        <div className="limiter">
            <div className="container-login100">
              <div className="wrap-login100">
                <form className="login100-form validate-form">
                  <span className="login100-form-title p-b-43">
                    Login to continue
                  </span>
                  <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input className="input100" type="text" name="email" />
                    <span className="focus-input100" />
                    <span className="label-input100">Email</span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <input className="input100" type="password" name="pass" />
                    <span className="focus-input100" />
                    <span className="label-input100">Password</span>
                  </div>
                  <div className="flex-sb-m w-full p-t-3 p-b-32">
                    <div className="contact100-form-checkbox">
                      <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                      <label className="label-checkbox100" htmlFor="ckb1">
                        Remember me
                      </label>
                    </div>
                    <div>
                      <a href="#" className="txt1">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div className="container-login100-form-btn">
                    <button className="login100-form-btn">
                      Login
                    </button>
                  </div>
                  <div className="text-center p-t-46 p-b-20">
                    <span className="txt2">
                      or sign up using
                    </span>
                  </div>
                  <div className="login100-form-social flex-c-m">
                    <a href="#" className="login100-form-social-item flex-c-m bg1 m-r-5">
                      <i className="fa fa-facebook-f" aria-hidden="true" />
                    </a>
                    <a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </div>
                </form>
                <div className="login100-more" style={{backgroundImage: 'url("images/bg-01.jpg")'}}>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Login;
