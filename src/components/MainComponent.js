import Menu from './MenuComponent';
import { Component } from 'react';
import { DISHES} from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './HomeComponent';
import Footer from './FooterComponent';



class Main extends Component {
  constructor(props){
     super(props);

     this.state = {
       dishes : DISHES,
       SelectedDish : null
     };

  }

  
  render(){

    const HomePage = () => {
        return(
            <Home 
            />
        );
      }
  return (
    <div className="App">
      <Header></Header>
      <Switch>
          <Route path='/home' component={HomePage}></Route>
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}></Menu>}></Route>
        <Redirect to="/home"></Redirect>
      </Switch>
      <DishDetail SelectedDish={this.state.dishes.filter((dish) => dish.id === this.state.SelectedDish)[0]}></DishDetail>
      <Footer></Footer>
         </div>
  );
}
}
export default Main;
