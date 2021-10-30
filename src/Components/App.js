import '../Css/App.css';
import Section1_Intro from './Sections/Section1_Intro';
import Section2_PinkDrink from './Sections/Section2_PinkDrink';
import Section3_History from './Sections/Section3_History';
import FakeLorem from './FakeContent/FakeLorem';
import CanvasController from './3D_Component/CanvasController'
import React, { useRef,useEffect } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Power2 , Elastic } from 'gsap/all';
import plus from '../Assets/images/Plus.png'
import p from '../Assets/images/P.png'
import {ReactComponent as Spinner} from '../Assets/vectors/spinner.svg'
import Section5_Contacts from './Sections/Section5_Contacts';
import Section4_Cocktails from './Sections/Section4_Cocktails';
import Header from './Sections/Header';

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
    tl.from('.plus',{y:-40, opacity:0, duration:0.8,ease: Power2.easeOut})//0.0__0.5
    tl.from('.Intro_p',{y:30, opacity:0, duration:0.8},'-=0.8') //0.0__0.8
    tl.from('.Intro_h1',{x:-200,y:600, opacity:0, duration:1 },'-=0.8') //0.0__0.8
    tl.to(".linePink" ,{ duration:0.6 , strokeDashoffset: 0,ease: Power2.easeIn},'-=0.4')//0.4__1.6
    tl.from('.hero',{x:50,y:100, opacity:0, duration:1.8,ease: Elastic.easeOut.config(1.2, 0.75)})//0.4__1.2
    tl.from('.div__spinner',{y:40, opacity:0,rotateZ:80, duration:0.5},'-=1.8')//0.6__1.1
    tl.from('.line__before__scroll',{width:0, duration:0.3},'-=1.4')//0.7__1.0
    tl.from('.scroll__to__discover',{y:30,opacity:0, duration:0.5},'-=1.2')
    tl.set('.canvas',{display:'block',duration:0.1})
    tl.from('.canvas',{y:740 , x :150, duration:3.5,ease:Elastic.easeOut.config(1.01, 0.75)} )
    
    gsap.to('.div__scroll_to_dicover',
    {
      opacity:0.0,
      // x:110,
      scrollTrigger:{
        trigger: '.App',
        start: "+=50", // when the top of the trigger hits the top of the viewport
        end: "+=60",
        scrub:1,
        markers:false
      }
    })
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
    <div id="Section1" className="App">
      <img src={plus} alt="plus" className="plus" />
      {/* <CanvasController/> */}
      <Section1_Intro/> 
      <Section2_PinkDrink/>
      <Section3_History/> 
      <Section4_Cocktails/>
      <Section5_Contacts/>
      <Header/>
      <div className="div__spinner">
        <Spinner width={100} className="spinner"/>
        <img src={p} alt="" className="p_in_spinner" />
      </div>
      {/* ////////////OnHover Run GSAP//////////// */}
      {/* <p onMouseEnter={()=>PlayTl()} onMouseLeave={()=>ReversePlayTl()} className="pTest">Hello ScrollTrigger</p> */}
      {/* ////////////OnHover Run GSAP//////////// */}
      {/* <div className="fakesContainer">
        <FakeLorem clss={"fake2"}/>
        <FakeLorem clss={"fake3"}/>
      </div> */}
    </div>
  );
}

export default App;
