import '../Css/App.css';
import FakeLorem from './FakeContent/FakeLorem';
import CanvasController from './3D_Component/CanvasController'
import React, { useRef,useEffect } from 'react'


function App() {



  return (
    <div className="App">
      {/* <p className="pTest">Hello ScrollTrigger</p> */}
      <CanvasController/>
      <div className="fakesContainer">
        <FakeLorem clss={"fake1"}/>
        <FakeLorem clss={"fake2"}/>
        <FakeLorem clss={"fake3"}/>
      </div>
    </div>
  );
}

export default App;
