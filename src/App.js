import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Merch from './components/Merch/Merch'
import About from './components/About/About'
import Listen from './components/Listen/Listen'
import WhatsNext from './components/WhatsNext/WhatsNext'
import Press from './components/Press/Press'
import Epk from './components/Epk/Epk'


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/merch' element={<Merch />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/listen' element={<Listen />}></Route>
          <Route path='/whats-next' element={<WhatsNext />}></Route>
          <Route path='/press' element={<Press />}> </Route>
          <Route path='/epk' element={<Epk />}></Route>
        </Routes>
    </div>
  );
}

export default App;
