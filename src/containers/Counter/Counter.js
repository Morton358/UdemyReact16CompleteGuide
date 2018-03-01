import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

/*eslint indent: ["error", 4, { "SwitchCase": 1 }]*/

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl
                    label="Increment"
                    clicked={this.props.onIncrementCounter}
                />
                <CounterControl
                    label="Decrement"
                    clicked={this.props.onDecrementCounter}
                />
                <CounterControl
                    label="Add 15"
                    clicked={() => this.props.onAddCounter(15)}
                />
                <CounterControl
                    label="Subtract 20"
                    clicked={() => this.props.onSubtractCounter(20)}
                />
                <hr />
                <button
                    onClick={() => this.props.onStoreResult(this.props.ctr)}
                >
                    Store result
                </button>
                <ul>
                    {this.props.storedResults.map(storedRes => (
                        <li
                            key={storedRes.id}
                            onClick={() =>
                                this.props.onDeleteResult(storedRes.id)
                            }
                        >
                            {storedRes.value}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: value => dispatch(actionCreators.add(value)),
        onSubtractCounter: value => dispatch(actionCreators.subtract(value)),
        onStoreResult: res => dispatch(actionCreators.storeResult(res)),
        onDeleteResult: id => dispatch(actionCreators.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
