import SkipLink from './components/SkipLink.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import {
  Audience,
  ProductGrid,
  Stats,
  News,
  Engagements,
  AppPromo,
} from './components/HomeSections.jsx';

export default function App() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Audience />
        <ProductGrid />
        <Stats />
        <News />
        <Engagements />
        <AppPromo />
      </main>
      <Footer />
    </>
  );
}
