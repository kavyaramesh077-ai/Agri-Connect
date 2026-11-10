import { Leaf, Heart, Sun, Sprout } from 'lucide-react';

export default function AboutUs() {
  return <main className="page-wrap about-page">
    <div className="page-heading">
      <p className="eyebrow">OUR STORY</p>
      <h1>Growing happiness, <em>one plant at a time.</em></h1>
      <p>We believe every home deserves a little more green.</p>
    </div>
    <section className="about-panel">
      <div>
        <p className="eyebrow">ABOUT PARADISE NURSERY</p>
        <h2>Nature makes a house feel like home.</h2>
        <p>Paradise Nursery is an online plant shop created for people who want to bring the calm and beauty of nature into their everyday spaces. We make it easy to discover houseplants for every corner, from sunny windowsills to cosy desks.</p>
        <p>Our goal is to help beginners and experienced plant lovers find plants they enjoy caring for. We believe a greener space can inspire a happier, more peaceful lifestyle.</p>
      </div>
      <div className="about-art"><Sprout size={110}/><span>Live green. Feel good.</span></div>
    </section>
    <div className="values-grid">
      <article><Heart/><h3>Chosen with care</h3><p>Thoughtful plant selections for your home and lifestyle.</p></article>
      <article><Sun/><h3>Simple plant living</h3><p>Friendly descriptions help you choose a plant with confidence.</p></article>
      <article><Leaf/><h3>A greener tomorrow</h3><p>Small steps toward a more nature-inspired everyday life.</p></article>
    </div>
  </main>;
}