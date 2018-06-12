import React, {Component} from 'react';

import Ahoc from '../../../hoc/Ahoc/Ahoc';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
//this class can be coverted into a functions as we do not need componentWillUpdate method.
  componentWillUpdate() {
    console.log('[OrderSummary] updated');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
          .map(igKey => {
            return (<li key={igKey}>
                      <span style={{textTransform:'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                  );
          });
    return(
        <Ahoc>
            <h3>Your Burger</h3>
            <p>Your burger has following ingredients</p>
            <ul>
              {ingredientSummary}
            </ul>
            <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Succes" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Ahoc>
          );
  }
}

export default OrderSummary;
