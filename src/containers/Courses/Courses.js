import React from 'react';
import { Route } from 'react-router-dom';

import ListCourses from '../../components/ListCourses/ListCourses';
import Course from '../../components/Course/Course';
import './Courses.css';

const courses = props => {
    return (
        <div>
            <Route path={props.match.url} component={ListCourses} exact />
            <Route path={props.match.url + '/course/:id'} component={Course} />
        </div>
    );
};


export default courses;
