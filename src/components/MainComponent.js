import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    // console.log('logged', dishId)
    // this.setState({selectedDish: dishId}, () => {
    //     console.log('after setting state:', this.state);
    //     const selectedDishDetail = this.state.dishes.filter((dish) => dish.id === this.state.selectedDish);
    //     console.log('dish detail of selected dish', selectedDishDetail);
    // });

        this.setState({ selectedDish: dishId });
    }

  render(){
    return (
        <div>
            <Navbar dark color ='primary'>
                <div className = "container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <div className="container">
                <Menu dishes = {this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)}/>
                <Dishdetail 
                    dishdish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
            </div>
        </div>
    );
    }
}

export default Main;
