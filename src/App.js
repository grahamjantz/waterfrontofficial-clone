import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Merch from './components/Merch/Merch'
// import About from './components/About/About'
import Listen from './components/Listen/Listen'
// import WhatsNext from './components/WhatsNext/WhatsNext'
import PressPage from './components/PressPage/PressPage'
// import Epk from './components/Epk/Epk'
import Footer from './components/Footer/Footer'
import ComingSoon from './components/ComingSoon/ComingSoon'
import About from './components/About/About';

export const ranNum = () => {
  return Math.floor(Math.random() * 10000);
}

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
          <Route index element={<Home name='' />}/>
          <Route path='/home' element={<Home name='HOME'/>}></Route>
          <Route path='/merch' element={<Merch name='MERCH'/>}></Route>
          <Route path='/about' element={<About name='ABOUT'/>}></Route>
          <Route path='/listen' element={<Listen name='LISTEN'/>}></Route>
          <Route path='/whats-next' element={<ComingSoon name="WHATS-NEXT"/>}></Route>
          <Route path='/press' element={<PressPage name='PRESS'/>}> </Route>
          <Route path='/epk' element={<ComingSoon name='EPK'/>}></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
