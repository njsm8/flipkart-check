import './App.css';
import Header from './Header';
import Products from './Products';
import products from './products.json';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Checkout from './Checkout';

function App() {

  
  return (
    <Router>
      <div>
      <Header />
      <Switch>
      <Route path="/checkout">
        
        <Checkout />
        </Route>
        <Route path="/">
        
      <div className="product-container">
      {products.map(product => <Products key={product.id} {...product} />)}
      </div>
        </Route>

      </Switch>
      
      
    </div>
    </Router>
    
  );
}

export default App;
