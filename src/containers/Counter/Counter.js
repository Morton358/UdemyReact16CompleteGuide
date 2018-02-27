import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <button onClick={this.props.onStoreResult}>Store result</button>
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
        ctr: state.counter,
        storedResults: state.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddCounter: value => dispatch({ type: 'ADD', value: value }),
        onSubtractCounter: value =>
            dispatch({ type: 'SUBTRACT', value: value }),
        onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
        onDeleteResult: id =>
            dispatch({ type: 'DELETE_RESULT', resultElId: id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
