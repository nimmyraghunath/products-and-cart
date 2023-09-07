import axios from "axios";
import "./App.css";
import { useEffect, useReducer } from "react";

import { reducer } from "./reducers/reducer";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  const initialState = {
    products: [],
    cart: [],
  };

  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch({ type: "GET_PRODUCTS", payload: data.products });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // <div className="container" style={{display:"flex", flexDirection:"row"}}>
    //   <div className="header">
    //     <button>Login</button>
    //   </div>
      <div style={{ display: "flex" }}>
        <Product state={state} dispatch={dispatch} />
        <Cart state={state} dispatch={dispatch} />
      </div>
    // </div>
  );
}

export default App;
