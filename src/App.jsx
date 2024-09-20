import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header'
import Home from './components/home/Home';
import { HERO_DATA } from './data';
import Story from './components/Story/Story';
import About from './components/about/About';
import Menu from './components/Menu/Menu';
import Review from './components/review/Review';
import Footer from './components/footer/Footer';
import InvestorsCount from './components/investorsCount/InvestorsCount';

function App() {

  return (
    <>
      <Header/>
      <Home src={HERO_DATA} />
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
