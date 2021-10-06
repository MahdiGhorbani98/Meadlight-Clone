import '../Css/App.css';
// import FakeLorem from './FakeContent/FakeLorem';
import CanvasController from './3D_Component/CanvasController'
import React, { useRef,useEffect } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Section1_Intro from './Sections/Section1_Intro';
import plus from '../Assets/images/Plus.png'
import p from '../Assets/images/P.png'
import {ReactComponent as Spinner} from '../Assets/vectors/spinner.svg'

function App() {
  gsap.registerPlugin(ScrollTrigger)
  let tl = gsap.timeline();
  useEffect(()=>{
    gsap.to('.spinner',
    {
        rotateZ:400,
        duration:400,
        scrollTrigger:{
          trigger: '.App',
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=5930",
          scrub:1
        }
    })
  },[])

  useEffect(() => {
    tl.from('.plus',{y:-50, opacity:0, duration:0.5})
    tl.from('.Intro_p',{y:30, opacity:0, duration:0.8},'-=0.5')
    tl.from('.Intro_h1',{x:-200,y:600, opacity:0, duration:0.8},'-=0.8')
    tl.from('.hero',{x:50,y:100, opacity:0, duration:0.8},'-=0.8')
    tl.from('.div__spinner',{y:40, opacity:0,rotateZ:-80, duration:0.5},'-=0.4')
    tl.from('.line__before__scroll',{width:0, duration:0.3})
    tl.from('.scroll__to__discover',{y:30,opacity:0, duration:0.5})
    tl.from('.canvas',{y:740 , x :150, duration:0.8},'-=0.3')

  },[])
  
  /////////////////////////OnHover Run GSAP//////////////////////
  // let tl = gsap.timeline({paused:true})

  // useEffect(()=>{
  //   tl.to('.pTest',{opacity:0, duration:1})
  // },[])
  
  // function PlayTl(){
  //   tl.play();
  // }
  // function ReversePlayTl(){
  //   tl.reverse();
  // }
  /////////////////////////OnHover Run GSAP//////////////////////
  

  return (
    <div className="App">
      <img src={plus} alt="plus" className="plus" />
      <CanvasController/>
      <Section1_Intro/> 
      <div className="div__spinner">
        <Spinner width={100} className="spinner"/>
        <img src={p} alt="" className="p_in_spinner" />
      </div>
      {/* ////////////OnHover Run GSAP//////////// */}
      {/* <p onMouseEnter={()=>PlayTl()} onMouseLeave={()=>ReversePlayTl()} className="pTest">Hello ScrollTrigger</p> */}
      {/* ////////////OnHover Run GSAP//////////// */}
      {/* <div className="fakesContainer">
        <FakeLorem clss={"fake1"}/>
        <FakeLorem clss={"fake2"}/>
        <FakeLorem clss={"fake3"}/>
      </div> */}
    </div>
  );
}

export default App;
