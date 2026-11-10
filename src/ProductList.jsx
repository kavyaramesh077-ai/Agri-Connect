import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.js';
import { plants } from './data/plants.js';
import { Check, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [added, setAdded] = useState([]);
  const categories = [...new Set(plants.map(plant => plant.category))];
  const add = plant => {
    dispatch(addItem(plant));
    setAdded(prev => [...prev, plant.id]);
    window.setTimeout(() => setAdded(prev => prev.filter(id => id !== plant.id)), 900);
  };
  return <main className="page-wrap">
    <div className="page-heading"><p className="eyebrow">THE PLANT COLLECTION</p><h1>Find your <em>green companion.</em></h1><p>Thoughtfully selected plants to make your space feel alive.</p></div>
    {categories.map(category => <section className="plant-section" key={category}>
      <div className="section-title"><h2>{category}</h2><span>{plants.filter(p => p.category === category).length} plants</span></div>
      <div className="plant-grid">{plants.filter(p => p.category === category).map(plant => {
        const inCart = cartItems.find(item => item.id === plant.id);
        return <article className="plant-card" key={plant.id}>
          <div className="plant-image"><img src={plant.image} alt={plant.name}/><span className="plant-tag">{category}</span></div>
          <div className="plant-info"><h3>{plant.name}</h3><p>{plant.description}</p><div className="plant-card-bottom"><strong>${plant.price.toFixed(2)}</strong>
            <button className="add-btn" onClick={() => add(plant)} disabled={added.includes(plant.id)}>{added.includes(plant.id) ? <><Check size={16}/> Added</> : <><ShoppingBag size={16}/> {inCart ? 'Add More' : 'Add to Cart'}</>}</button>
          </div></div>
        </article>;
      })}</div>
    </section>)}
  </main>;
}