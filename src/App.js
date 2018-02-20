import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import ToDo from './containers/ToDo/ToDo';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">

                <section className="NavLinks">
                    <NavLink to="/courses">Courses</NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/todo">ToDo</NavLink>
                </section>

                <Switch>
                    <Route path="/courses" component={Courses} />
                    <Route path="/users" component={Users} />
                    <Route path="/todo" component={ToDo} />
                    <Redirect from="/" to="courses/" exact/>
                </Switch>
            </div>
        );
    }
}

export default App;
