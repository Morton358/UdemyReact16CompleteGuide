import React, { Component } from 'react';
// import { Route } from 'react-router-dom';

import ListCourses from '../../components/ListCourses/ListCourses';
import Course from '../../components/Course/Course';
import PropsRoute from '../../utils/PropsRoute';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    };

    render() {
        // const MyListCourses = props => {
        //     return (
        //         <ListCourses
        //             getCourses={() => this.state.courses}
        //             {...props}
        //         />
        //     );
        // };
        // const MyCourse = props => {
        //     return (
        //         <Course
        //             getCourses={() => this.state.courses}
        //             {...props}
        //         />
        //     );
        // };
        return (
            <div>
                <PropsRoute
                    path={this.props.match.url}
                    exact
                    courses={this.state.courses}
                    // render={MyListCourses}
                    component={ListCourses}
                />
                <PropsRoute
                    path={this.props.match.url + '/course/:id'}
                    // render={MyCourse}
                    courses={this.state.courses}
                    component={Course}
                />
            </div>
        );
    }
}

export default Courses;
