import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/about' element={ <About />}>About</Route>
        <Route path='/contact' element={ <Contact />}>Contact</Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
