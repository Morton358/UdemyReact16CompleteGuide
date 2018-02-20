import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: null,
        courseId: null
    };
    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.id) {
            this.setState({ courseId: +this.props.match.params.id });
        }
    }

    render() {
        let courseHolder = <h2>... Loading</h2>;
        if (this.state.courseId) {
            courseHolder = (
                <div>
                    <h1>_COURSE_TITLE_</h1>
                    <p>
                        You selected the Course with ID: {this.state.courseId}
                    </p>
                </div>
            );
        }
        return { courseHolder };
    }
}

export default Course;
