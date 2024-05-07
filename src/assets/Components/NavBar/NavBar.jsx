import { Link } from "react-router-dom"; 
import "./NavBar.css";
import "../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

function NavBar(props) {
  return (
    <>
      <nav className="container">
        <div>
          <h1 className="navbar-brand">
            Start Bootstrap
          </h1>
        </div>
        <div className="navbar-content">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
          <Link to="/cart" className="btn">
            <i className="bi bi-cart-fill"></i> Cart
            <sup className="cart-count">{props.count}</sup>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
