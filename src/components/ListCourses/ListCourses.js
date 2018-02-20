import React, { Component } from 'react';

class ListCourses extends Component {
    componentDidMount() {
        console.log(this.props);
    }

    goToSelectedCourse(id, title) {
        this.props.history.push({
            pathname: this.props.match.url + '/course/' + id,
            search: '?title=' + title
        });
        this.props.match.url + '/course/' + id;
    }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="ListCourses">
                    {this.props.courses.map(course => {
                        return (
                            <article
                                className="ListCoursesCourse"
                                key={course.id}
                                onClick={() => {
                                    this.goToSelectedCourse(
                                        course.id,
                                        course.title
                                    );
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
