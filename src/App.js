import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import zaferes from './images/zaferes.png';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero /> 
      <Card 
        img={zaferes}
        rating="5.0"
        reviewCount="6"
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price="136"
      />
    </div>
  );
}
