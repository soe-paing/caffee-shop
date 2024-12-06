import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header'
import Hero from './sections/hero/Hero';
import { HERO_DATA } from './data';
import Story from './sections/Story/Story';
import About from './sections/about/About';
import Review from './sections/review/Review';
import Footer from './sections/footer/Footer';
import InvestmentSection from './sections/investment/InvestmentSection';
import MenuBook from './sections/menuBook/MenuBook';
import Categories from './sections/categories/Categories';
import Products from './components/products/Products';
import CartContextProvider from './store/shop-cart-context';

function App() {

  return (
    <CartContextProvider>
      <Header/>
      <Hero src={HERO_DATA} />
      <Story/>
      <MenuBook/>
      <Categories/>
      <About/>
      <InvestmentSection />
      <Review/>
      <Footer/>
      <Products/>
    </CartContextProvider>
  )
}

export default App
