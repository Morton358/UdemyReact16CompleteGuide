import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import ToDo from './components/ToDo/ToDo';
// import Course from './containers/Course/Course';
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
                    {/* <Route
                        path='/courses/course/:id'
                        component={Course}
                    /> */}
                    <Route path="/users" component={Users} />
                    <Route path="/todo" component={ToDo} />
                </Switch>
            </div>
        );
    }
}

export default App;
