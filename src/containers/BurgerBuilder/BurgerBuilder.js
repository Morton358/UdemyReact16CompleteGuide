import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 2,
            cheese: 1,
            bacon: 1,
            meat: 2
        }
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <Burger ingredients={this.state.ingredients} />
                </div>
                <div>
                    Burger Controll
                </div>
            </React.Fragment>
        )
    }
}
export default BurgerBuilder;
