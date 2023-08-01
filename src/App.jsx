import './App.css'
import Home from './components/Home/Home'
import Middle from './components/Middle/Middle'
import Navbar from './components/Navbar/Navbar'
import Destinations from './components/Destinations/Destinations'
import Portifolio from './components/Portifolio/Portifolio'
import Reviews from './components/Reviews/Reviews'
import Questions from './components/Questions/Questions'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Middle/>
      <Destinations/>
      <Portifolio/>
      <Reviews/>
      <Questions/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App
