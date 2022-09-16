import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
// import Merch from './components/Merch/Merch'
// import About from './components/About/About'
// import Listen from './components/Listen/Listen'
// import WhatsNext from './components/WhatsNext/WhatsNext'
// import Press from './components/Press/Press'
// import Epk from './components/Epk/Epk'
import Footer from './components/Footer/Footer'
import ComingSoon from './components/ComingSoon/ComingSoon'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/merch' element={<ComingSoon />}></Route>
          <Route path='/about' element={<ComingSoon />}></Route>
          <Route path='/listen' element={<ComingSoon />}></Route>
          <Route path='/whats-next' element={<ComingSoon />}></Route>
          <Route path='/press' element={<ComingSoon />}> </Route>
          <Route path='/epk' element={<ComingSoon />}></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
