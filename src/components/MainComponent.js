import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import { Component } from 'react';
import { DISHES} from '../shared/dishes';
import DishDetail from './DishDetailComponent';


class Main extends Component {
  constructor(props){
     super(props);

     this.state = {
       dishes : DISHES,
       SelectedDish : null
     };

  }

  onDishSelect(dishId){
    this.setState({SelectedDish: dishId})
    console.log(this.state.selectedDish)

}

  render(){
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/" > Return Home</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} onClick = {(dishId) => this.onDishSelect(dishId)} />
      <DishDetail SelectedDish={this.state.dishes.filter((dish) => dish.id === this.state.SelectedDish)[0]}></DishDetail>
         </div>
  );
}
}
export default Main;
