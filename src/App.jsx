import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header'
import Home from './components/home/Home';
import { HERO_DATA } from './data';
import System from './components/system/System';
import About from './components/about/About';
import Menu from './components/Menu/Menu';

function App() {

  return (
    <>
      <Header/>
      <Home src={HERO_DATA} />
      <System/>
      <Menu/>
      <About/>
    </>
  )
}

export default App
