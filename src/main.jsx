import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./components/common/CartContext"; 
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
