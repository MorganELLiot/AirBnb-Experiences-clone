import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import data from './data.js';

export default function App() {
  const card = data.map(card => {
      return (
          <Card 
              key={card.id}
              {...card}
          />
      )
  })
  return (
      <div>
          <Navbar />
          <Hero />
          <div className="cards-list">
            {card}
          </div>
      </div>
  )
}
