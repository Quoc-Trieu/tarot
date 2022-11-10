import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import Love from './components/love/Love'
import Job from './components/job/Job'
import Luck from './components/luck/Luck'
import bgVideo from './assets/video/bg.mp4'
import audio from './assets/audio/audio.mp3'

function App() {
  return (
    <div id="app">
      <video src={bgVideo} autoPlay loop muted />
      {/* <audio autoPlay loop>
        <source src={audio} type="audio/ogg" />
      </audio> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Love' element={<Love />} />
          <Route path='/Job' element={<Job />} />
          <Route path='/Luck' element={<Luck />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
