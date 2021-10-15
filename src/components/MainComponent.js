import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';



const mapStateToProps = state => {
      return {
          dishes: state.dishes,
          comments: state.comments,
          promotions: state.promotions,
          leaders: state.leaders
      }
}


class Main extends Component {

  constructor(props) {
    super(props);

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
            <Home  dish = {this.props.dishes.filter((dish) => dish.featured)[0]} 
                promotion = {this.props.promotions.filter((promotion) => promotion.featured)[0]}
                leader = {this.props.leaders.filter((leader) => leader.featured)[0]}
            />
        )
    }

    const DishWithId = ({match}) => {
        return(
            <DishDetail selectedDish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            comments = {this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            />
        )

    }

    return (
            <div className="container">
                <Header/>
                <Switch>
                    <Route path ="/home" component = {HomePage} />
                    <Route exact path="/menu" component ={ () => <Menu dishes = {this.props.dishes}/>} />
                    <Route path="/menu/:dishId" component = {DishWithId}/>                   
                    <Route exact path="/contactus" component={Contact}/>
                    <Route exact path="/aboutus" component={ () => <About leaders = {this.props.leaders}/>}/>
                    <Redirect to ="/home" />
                </Switch>
                <Footer/>
            </div>
    );
    }
}

export default withRouter(connect(mapStateToProps)(Main));


// <Menu dishes = {this.state.dishes}
// onClick={(dishId) => this.onDishSelect(dishId)}/>
// <DishDetail 
// selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>