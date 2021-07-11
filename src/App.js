import './App.css';
import Header from './Header';
import Products from './Products';
import products from './products.json';

function App() {
  return (
    <div>
      <Header />
      {/* <div className="movie-container">
        {products.length > 0 && products.map((products)=><Products key={products.added}{...products} />)}
      </div> */}
      {products.map(product => <Products {...product} />)}
    </div>
  );
}

export default App;
