import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header'
import Home from './components/home/Home';
import { HERO_DATA } from './data';
import Story from './components/Story/Story';
import About from './components/about/About';
import Menu from './components/Menu/Menu';
import Products from './components/products/Products';
import Review from './components/review/Review';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Header/>
      <Home src={HERO_DATA} />
      <Story/>
      <Menu/>
      <About/>
      <Products/>
      <Review/>
      <Footer/>
    </>
  )
}

export default App
