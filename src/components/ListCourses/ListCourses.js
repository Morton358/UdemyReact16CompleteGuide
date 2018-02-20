import React, { Component } from 'react';


class ListCourses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    };

    componentDidMount() {
        // console.log(this.props);
    }

    goToSelectedCourse(id) {
        this.props.history.push(this.props.match.url + '/course/' + id);
    }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="ListCourses">
                    {this.state.courses.map(course => {
                        return (
                            <article
                                className="ListCoursesCourse"
                                key={course.id}
                                onClick={() => {
                                    this.goToSelectedCourse(course.id)
                                }}
                            >
                                {course.title}
                            </article>
                        );
                    })}
                </section>
            </div>
        );
    }

}

export default ListCourses;
