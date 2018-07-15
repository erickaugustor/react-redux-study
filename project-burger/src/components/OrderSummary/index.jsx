import React from 'react';

import Button from '../Button';
import Aux from '../../services/wrapper';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => (
      <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>
          {igKey}: {props.ingredients[igKey]}
        </span>
      </li>
    ));
  
  return (
    <Aux>
      <h3> Your Order </h3>
      <p> A delecious burger with the following ingredients: </p>

      <ul>
        { ingredientSummary }
      </ul>

      <p>
        Continue to Checkout?
      </p>

      <Button btnType="Danger"  clicked={}>CANCEL</Button>
      <Button btnType="Success" clicked={}>CONTINUE</Button>

    </Aux>
  );
};

export default orderSummary;