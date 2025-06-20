import { useState } from 'react';
import './App.scss'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import EventPage from './components/EventPage';
import DirectBtn from './components/DirectBtns';
import MainVisual from './components/MainVisual';
import NowMovies from './components/NowMovies';
import Special from './components/Special';

function App() {
  const navigate = useNavigate();
  const [evtId, setEvtId] = useState(1);
  return (
    <div className='MoiveApp'>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <div id='sub_section'>
            <MainVisual />
            <div id="contents">
              <NowMovies />
              <Special />
              <section className='evt'>
                <div className='title'>
                  <h2>이벤트</h2>
                </div>
                <div className='evt_wrap'>
                  <ul className='e1'>
                    <li className='evt1'>
                      <img src={`${import.meta.env.BASE_URL}images/~.jpg`} alt=""
                      onClick={()=>{ setEvtId(1); navigate('/event/'+1 ) }}/>
                    </li>
                    <li className='evt2'>
                      <img src="/images/event2.jpg" alt="" 
                      onClick={()=>{ setEvtId(2); navigate('/event/'+2 ) }}/>
                    </li>
                    <li className='evt3'>
                      <img src="/images/event3.jpg" alt="" 
                      onClick={()=>{ setEvtId(3); navigate('/event/'+3 ) }}/>
                    </li>
                    <li className='evt4'>
                      <img src="/images/event4.jpg" alt=""/>
                    </li>
                    <li className='evt5'>
                      <img src="/images/event5.jpg" alt="" 
                      onClick={()=>{ setEvtId(4); navigate('/event/'+4 ) }}/>
                    </li>
                    <li className='evt6'>
                      <img src="/images/event6.jpg" alt="" 
                      onClick={()=>{ setEvtId(6); navigate('/event/'+6 ) }}/>
                    </li>
                  </ul>
                  {/* <div className='r_evt'>

                  </div> */}
                  
                </div>
              </section>
              <DirectBtn />
            </div>
          </div>
        </>}/>
        <Route path="/event/:id" element={<EventPage evtId={evtId} />} />
      </Routes>
    </div>
  )
}

export default App
