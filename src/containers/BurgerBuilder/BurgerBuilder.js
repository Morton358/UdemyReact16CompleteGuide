import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal.js';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


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
        totalPrice: 10,
        forSale: false,
        openModal: false
    }

    updateForSaleState(obj) {
        const sum = Object.values(obj).reduce((acc, el) => {
            return acc + el
        }, 0);
        this.setState({forSale: sum > 0});
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] += 1
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + INGGREDIENTS_PRICES[type]
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updateForSaleState(updatedIngredients);
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
        this.updateForSaleState(updatedIngredients);
    }

    handleOpenModal = () => {
        this.setState({openModal: true})
    }

    handleCloseModal = () => {
        this.setState({openModal: false})
    }

    handleSubmitOrder = () => {
        alert('You submited order!')
    }

    render() {
        const arrIngredients = Object.keys(this.state.ingredients)

        const disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <React.Fragment>
                <Modal
                    open={this.state.openModal}
                    close={this.handleCloseModal}
                    submit={this.handleSubmitOrder}
                >
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                    />
                </Modal>
                <div>
                    <Burger ingredients={this.state.ingredients} />
                </div>
                <div>
                    <BuildControls
                        forElements={arrIngredients}
                        ingredientAdder={this.addIngredientHandler}
                        ingredientRemover={this.removeIngredientHandler}
                        disable={disabledInfo}
                        price={this.state.totalPrice}
                        forSale={this.state.forSale}
                        order={this.handleOpenModal}
                    />
                </div>
            </React.Fragment>
        )
    }
}
export default BurgerBuilder;
