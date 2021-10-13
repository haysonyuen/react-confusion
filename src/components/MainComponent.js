import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {Switch, Route, Redirect} from 'react-router-dom';
import About from './AboutComponent';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
 //     selectedDish: null
    };
  }

//  onDishSelect(dishId) {
    // console.log('logged', dishId)
    // this.setState({selectedDish: dishId}, () => {
    //     console.log('after setting state:', this.state);
    //     const selectedDishDetail = this.state.dishes.filter((dish) => dish.id === this.state.selectedDish);
    //     console.log('dish detail of selected dish', selectedDishDetail);
    // });

 //       this.setState({ selectedDish: dishId });
 //   }

  render(){

    const HomePage = () => {
        return(
            <Home  dish = {this.state.dishes.filter((dish) => dish.featured)[0]} 
                promotion = {this.state.promotions.filter((promotion) => promotion.featured)[0]}
                leader = {this.state.leaders.filter((leader) => leader.featured)[0]}
            />
        )
    }

    const DishWithId = ({match}) => {
        return(
            <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            />
        )

    }

    return (
            <div className="container">
                <Header/>
                <Switch>
                    <Route path ="/home" component = {HomePage} />
                    <Route exact path="/menu" component ={ () => <Menu dishes = {this.state.dishes}/>} />
                    <Route path="/menu/:dishId" component = {DishWithId}/>                   
                    <Route exact path="/contactus" component={Contact}/>
                    <Route exact path="/aboutus" component={ () => <About leaders = {this.state.leaders}/>}/>
                    <Redirect to ="/home" />
                </Switch>
                <Footer/>
            </div>
    );
    }
}

export default Main;


// <Menu dishes = {this.state.dishes}
// onClick={(dishId) => this.onDishSelect(dishId)}/>
// <DishDetail 
// selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>