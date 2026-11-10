import { Link, NavLink } from 'react-router-dom';
import { Leaf, ShoppingBag } from 'lucide-react';
import { useSelector } from 'react-redux';
export default function Navbar() {
  const count = useSelector(state => state.cart.items.reduce((sum,item) => sum + item.quantity, 0));
  return <header className="navbar"><Link to="/" className="nav-brand"><Leaf size={23}/><span>Paradise Nursery</span></Link>
    <nav><NavLink to="/">Home</NavLink><NavLink to="/plants">Plants</NavLink><NavLink to="/about">About Us</NavLink><NavLink to="/cart" className="cart-nav"><ShoppingBag size={19}/><span>Cart</span><b>{count}</b></NavLink></nav>
  </header>;
}