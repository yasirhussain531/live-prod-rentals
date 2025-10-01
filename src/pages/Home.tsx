import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import ItemCarousel from '../components/ItemCarousel';
import { featuredGear } from '../data/inventory';

const Home = () => {
  return (
    <div className="space-y-16 pb-20">
      <Helmet>
        <title>Vider Rentals | Pro Video Gear Rentals</title>
        <meta
          name="description"
          content="Discover premium video switchers, cameras, and OB solutions from Vider Rentals, trusted by broadcast teams."
        />
      </Helmet>
      <Hero />
      <About />
      <ItemCarousel items={featuredGear} />
    </div>
  );
};

export default Home;
