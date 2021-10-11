import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import Footer from './FooterComponent';

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
            <div className="container">
                <Header/>
                <Menu dishes = {this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)}/>
                <DishDetail 
                    selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
                <Footer/>
            </div>
    );
    }
}

export default Main;
