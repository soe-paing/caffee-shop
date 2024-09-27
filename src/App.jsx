import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header'
import Hero from './sections/hero/Hero';
import { HERO_DATA } from './data';
import Story from './sections/Story/Story';
import About from './sections/about/About';
import Menu from './sections/Menu/Menu';
import Review from './sections/review/Review';
import Footer from './sections/footer/Footer';
import InvestorsCount from './components/investorsCount/InvestorsCount';

function App() {

  return (
    <>
      <Header/>
      <Hero src={HERO_DATA} />
      <Story/>
      <Menu/>
      <About/>
      <InvestorsCount />
      <Review/>
      <Footer/>
    </>
  )
}

export default App
