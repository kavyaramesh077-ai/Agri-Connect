import { Link, Route, Routes } from 'react-router-dom';
import { Leaf, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar.jsx';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';

function Home() {
  return <main className="hero">
    <div className="hero-shade" />
    <section className="hero-content">
      <div className="brand-mark"><Leaf size={25}/> <span>PARADISE NURSERY</span></div>
      <p className="eyebrow">GROW A LITTLE HAPPINESS</p>
      <h1>Bring nature<br/><em>into your home.</em></h1>
      <p className="hero-copy">Discover beautiful houseplants that make every space feel more alive. Find your green companion today.</p>
      <Link className="primary-btn" to="/plants">Get Started <ArrowRight size={18}/></Link>
    </section>
    <div className="hero-note">A greener home begins here</div>
  </main>;
}
export default function App() {
  return <div className="app-shell"><Navbar/><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/plants" element={<ProductList/>}/>
    <Route path="/cart" element={<CartItem/>}/>
    <Route path="*" element={<Home/>}/>
  </Routes></div>;
}