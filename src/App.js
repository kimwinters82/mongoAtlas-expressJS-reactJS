import './App.css';
import Nav from './components/nav';
import CustomersReact from './components/customersReact';
import ItemsReact from './components/itemsReact';
import OrdersReact from './components/ordersReact';
import NewOrder from './components/newOrder';
import UpdateOrder from './components/updateOrder';
import NewCust from './components/newCust';
import NewItem from './components/newItem';
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route path="/customers">
            <CustomersReact/>
          </Route>
          <Route path="/items">
            <ItemsReact/>
          </Route>
          <Route path="/orders">
            <OrdersReact/>
          </Route>
          <Route path="/newCust">
            <NewCust/>
          </Route>
          <Route path="/newItem">
            <NewItem/>
          </Route>
          <Route path="/newOrder">
            <NewOrder/>
          </Route>
          <Route path="/updateOrder">
            <UpdateOrder/>
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
