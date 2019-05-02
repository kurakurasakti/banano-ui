import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
// import { HomePage, Navbar } from '../HomePage';
import Navbar from '../HomePage/Navbar.jsx'
import { LoginPage } from '../LoginPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                <Navbar />
                <Router history={history}>
                    <div>
                    <Switch>
                        <div>
                            {/* <PrivateRoute exact path="/" component={HomePage} /> */}
                            <Route path='/' component={HomePage} exact />
                            <Route path="/login" component={LoginPage} exact/>
                            
                        </div>
                    </Switch>
                    </div>
                </Router>
                    
            </div>
                
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 