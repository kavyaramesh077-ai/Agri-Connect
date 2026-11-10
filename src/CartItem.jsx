import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.js';
import { Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  if (!items.length) return <main className="page-wrap empty-cart">
    <div className="empty-icon"><ShoppingBag size={38}/></div><p className="eyebrow">YOUR SHOPPING BAG</p><h1>Your cart is <em>waiting for green.</em></h1><p>Explore our collection and find a plant to take home.</p><Link className="primary-btn" to="/plants">Explore Plants <ArrowLeft size={17}/></Link>
  </main>;
  return <main className="page-wrap cart-page">
    <div className="page-heading cart-heading"><p className="eyebrow">YOUR SHOPPING BAG</p><h1>Plants you <em>love.</em></h1><p>{count} {count === 1 ? 'item' : 'items'} in your cart</p></div>
    <div className="cart-layout"><section className="cart-list">
      {items.map(item => <article className="cart-row" key={item.id}>
        <img src={item.image} alt={item.name}/><div className="cart-product"><h3>{item.name}</h3><p>${item.price.toFixed(2)} each</p>
          <div className="quantity-control"><button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({id:item.id,quantity:item.quantity-1}))}><Minus size={15}/></button><span>{item.quantity}</span><button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({id:item.id,quantity:item.quantity+1}))}><Plus size={15}/></button></div>
        </div><strong className="line-total">${(item.price*item.quantity).toFixed(2)}</strong>
        <button className="remove-btn" aria-label={`Remove ${item.name}`} onClick={() => dispatch(removeItem(item.id))}><Trash2 size={18}/></button>
      </article>)}
      <Link className="text-link" to="/plants"><ArrowLeft size={16}/> Continue Shopping</Link>
    </section>
    <aside className="order-summary"><p className="eyebrow">ORDER SUMMARY</p><div className="summary-line"><span>Subtotal</span><strong>${total.toFixed(2)}</strong></div><div className="summary-line"><span>Delivery</span><span>Calculated at checkout</span></div><div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div><button className="checkout-btn" onClick={() => window.alert('Thank you for shopping with Paradise Nursery! Checkout is coming soon.')}>Checkout</button><p className="secure-note">A little more green is on its way.</p></aside></div>
  </main>;
}