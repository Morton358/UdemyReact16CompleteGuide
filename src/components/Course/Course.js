import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Course extends Component {
    state = {
        title: null
    }

    componentDidMount() {
        console.log(this.props)
        this.getTitle();
    }

    getTitle () {
        const query = new URLSearchParams(this.props.location.search);
        let title = null;
        for(let param of query.entries()){
            title = param;
        }
        this.setState({title: title[1]});
    }

    render() {
        const appropriateCourse = this.props.courses.find(course => {
            return course.id === +this.props.match.params.id;
        });
        let courseTitle = null;
        if (this.state.title) {
            courseTitle = <h2>{this.state.title}</h2>
        }
        return (
            <div>
                <h1>{appropriateCourse.title}</h1>
                {courseTitle}
                <p>
                    You selected the Course with ID:{' '}
                    {this.props.match.params.id}
                </p>
                <NavLink
                    to="/courses"
                    activeStyle={{
                        backgroundColor: 'lightgrey',
                        textAlign: 'left',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        color: 'black',
                        pointer: 'cursor'
                    }}
                >
                    Back
                </NavLink>
            </div>
        );
    }
}

export default Course;
