import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGGREDIENTS_PRICES = {
    Salad: 8,
    Cheese: 5,
    Bacon: 7,
    Meat: 10
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            Salad: 0,
            Cheese: 0,
            Bacon: 0,
            Meat: 0
        },
        totalPrice: 10
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] += 1
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + INGGREDIENTS_PRICES[type]
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    }

    removeIngredientHandler = (type) => {
        const updatedIngredients = {...this.state.ingredients}
        if (updatedIngredients[type] <= 0) {
            return;
        }
        updatedIngredients[type] -= 1
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - INGGREDIENTS_PRICES[type]
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    }

    render() {
        const arrIngredients = Object.keys(this.state.ingredients)

        const disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <React.Fragment>
                <div>
                    <Burger ingredients={this.state.ingredients} />
                </div>
                <div>
                    <BuildControls
                        forElements={arrIngredients}
                        ingredientAdder={this.addIngredientHandler}
                        ingredientRemover={this.removeIngredientHandler}
                        disable={disabledInfo}
                    />
                </div>
            </React.Fragment>
        )
    }
}
export default BurgerBuilder;
