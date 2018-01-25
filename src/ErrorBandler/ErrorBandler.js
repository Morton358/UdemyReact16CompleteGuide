import React, { Component } from 'react';

class ErrorBandler extends Component {
    state = {
        error: false,
        errorMassage: ''
    }
    componentDidCatch = (error, info) => {
        this.setState({error: true, errorMassage: error+' '+info})
    }

    render() {
        if (this.state.error) {
            return <div><h1>Something go wrong!</h1></div>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBandler;
