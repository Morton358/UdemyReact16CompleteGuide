import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ListCourses from '../../components/ListCourses/ListCourses';
import Course from '../Course/Course';


class Courses extends Component {




    render() {
        return (
            <div>
                <Route path={this.props.match.url} component={}
                <Route
                    path={this.props.match.url + '/course/:id'}
                    component={Course}
                />
            </div>
        );
    }
}

export default Courses;
