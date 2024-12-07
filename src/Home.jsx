import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './sections/hero/Hero';
import { HERO_DATA } from './data';
import Story from './sections/Story/Story';
import About from './sections/about/About';
import Review from './sections/review/Review';
import InvestmentSection from './sections/investment/InvestmentSection';
import MenuBook from './sections/menuBook/MenuBook';
import Categories from './sections/categories/Categories';

function Home() {

  return (
    <>
      <Hero src={HERO_DATA} />
      <Story/>
      <MenuBook/>
      <Categories/>
      <About/>
      <InvestmentSection />
      <Review/>
    </>
  )
}

export default Home
