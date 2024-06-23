import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header'
import Home from './components/home/Home';
import { HERO_DATA } from './data';
import System from './components/system/System';
import About from './components/about/About';

function App() {

  return (
    <>
      <Header/>
      <Home src={HERO_DATA} />
      <System/>
      <About/>
    </>
  )
}

export default App
