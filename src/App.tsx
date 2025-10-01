import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gear from './pages/Gear';
import ItemDetails from './pages/ItemDetails';
import Button from './components/Button';

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<'entering' | 'exiting'>('entering');

  useEffect(() => {
    if (showLoader) return;
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('exiting');
      const timeout = window.setTimeout(() => {
        setDisplayLocation(location);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTransitionStage('entering');
      }, 200);
      return () => window.clearTimeout(timeout);
    }
  }, [location, displayLocation, showLoader]);

  return (
    <div className="flex min-h-screen flex-col bg-surface-muted text-text-default">
      {showLoader && <Loader onFinish={() => setShowLoader(false)} />}
      <Navbar />
      <main className="flex-1">
        <div
          className={`mx-auto max-w-6xl px-6 py-16 transition-all duration-300 ${
            transitionStage === 'entering' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Routes location={displayLocation} key={displayLocation.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/gear" element={<Gear />} />
            <Route path="/gear/:slug" element={<ItemDetails />} />
            <Route
              path="*"
              element={
                <div className="space-y-6 pb-20">
                  <h1 className="text-4xl font-semibold text-white">Page not found</h1>
                  <p className="text-base text-text-muted">
                    The page you’re looking for does not exist. Navigate using the main menu to continue exploring the catalog.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button to="/">Return home</Button>
                    <Button to="/gear" variant="secondary">
                      Browse gear
                    </Button>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
