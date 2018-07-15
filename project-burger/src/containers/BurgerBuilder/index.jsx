import React, { Component } from 'react';

import Aux from '../../services/wrapper';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
import Modal from '../../UI/Modal';
import OrderSummary from '../../components/OrderSummary';
import Spinner from '../../components/Spinner';

import errorHandler from '../../hoc/ErrorHandler';

import axios from '../../services/axios-orders';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      loading: false,
    };
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => (
        ingredients[igKey]
      ))
      .reduce((sum, element) => (
        sum + element
      ), 0);

    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updateCount;
    
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    this.updatePurchaseState(updateIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if(oldCount <= 0) {
      return;
    }

    const updateCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updateCount;
    
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    this.updatePurchaseState(updateIngredients);
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchasableContinueHandler = () => {
    // alert('You continue!');
    this.setState({loading: true})
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Erick',
        address: {
          street: 'Sla',
          zipeCode: '43234',
          country: 'Brazil'
        }
      }
    }
    axios.post('/orders.json', order)
      .then(response => this.setState({loading: false, purchasing: false}))
      .catch(error => this.setState({loading: false, purchasing: false}));
  };


  render() {

    const disableInfo = {
      ...this.state.ingredients
    };

    for(let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    };

    let orderSummary = <OrderSummary 
      ingredients={this.state.ingredients}
      price={this.state.totalPrice}
      purchaseCancelled={this.purchaseCancelHandler}
      purchaseContinued={this.purchasableContinueHandler}
      />;
    
    if(this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler} 
          disabled={disableInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
          price={this.state.totalPrice} />
      </Aux>
    );
  }
}

export default errorHandler(BurgerBuilder, axios);