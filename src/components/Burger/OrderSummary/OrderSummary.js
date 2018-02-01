import React from 'react';

const orderSummary = props => {
    const summaryOrder = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                {igKey}: {props.ingredients[igKey]}
            </li>
        );
    });
    return (
        <React.Fragment>
            <p>A delicious burger with the following ingredients: </p>
            <ul>{summaryOrder}</ul>
            <h4>Total Price: {props.price.toFixed(2)}</h4>
        </React.Fragment>
    );
};
export default orderSummary;
