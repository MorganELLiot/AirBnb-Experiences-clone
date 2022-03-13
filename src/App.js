import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import data from './data.js';

export default function App() {
  const card = data.map(card => {
      return (
          <Card 
              img={card.coverImg}
              rating={card.stats.rating} 
              reviewCount={card.stats.reviewCount} 
              location={card.location}
              title={card.title}
              price={card.price}
          />
      )
  })
  return (
      <div>
          <Navbar />
          <Hero />
          {card}
      </div>
  )
}
