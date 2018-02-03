import React, { Component }from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Modal extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.open !== this.props.open;
    }

    componentWillUpdate() {
        console.log('[Modal] WillUpdate');
    }

    render(){
        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onClick={this.props.close}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                // disabled={true}
                onClick={this.props.submit}
            />
        ];
        return(
            <Dialog
                title="Your order:"
                autoScrollBodyContent={true}
                actions={actions.map(el => el)}
                modal={true}
                open={this.props.open}
            >
                {this.props.children}
            </Dialog>
        )
    }
}
export default Modal;
