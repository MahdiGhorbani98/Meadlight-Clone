import React,{useEffect} from 'react'
import hero from '../../Assets/illustrations/hero_01.png';
import SvgImport from '../SVG/SvgImport';
import gsap from 'gsap'


export default function Section1_Intro() {
    let tl = gsap.timeline({paused:true})
    useEffect(() => {
        tl.to(".svg__scroll_to_discover" ,{ duration:1 , strokeDashoffset: 0})
    }, [])
    

    function PlaySvg(){
        tl.play();
    }
    function ReverseSvg(){
        tl.reverse();
    }
    return (
        <div className="Section1_Intro_Container">
            <div className="Section1_Intro">
                <p className="Intro_p">THE BRAND-NEW DRINK</p><br/>
                <h1 className="Intro_h1">
                <bdi className="bdiSec1">
                <>PinkDrink is a</> 
                <SvgImport 
                svg={
                    <svg viewBox="0 0 135 10" style={{position: 'relative', width: 368, bottom: 15, left: 0}}>
                    <path className="linePink" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" vectorEffect="non-scaling-stroke" d="M3.1 4.5c42.5-5.4 86.3 6.1 128.9.9" style={{strokeDashoffset:  645.611, strokeDasharray: 645.611}}></path>
                    </svg>
                }
                />
                
                </bdi>
                fermented honey
                drink
                </h1>
            </div>
            <img className="hero" src={hero} alt="hero" />
            <div onMouseEnter={()=>PlaySvg()} onMouseLeave={()=>ReverseSvg()} className="div__scroll_to_dicover">
                <span className="line__before__scroll"></span>
                <p className="scroll__to__discover">
                    <SvgImport 
                    svg={
                        <svg style={{position: 'absolute', width: 92, top: -40, left: -35}} data-v-c2a89eaa="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 126">
                            <path className="svg__scroll_to_discover" data-v-c2a89eaa="" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vectorEffect="non-scaling-stroke" d="M66 22.8c-9.4-.1-13.8-1.2-21.3.1-5 .8-12.5 1.9-19.3 7.9C10.4 44 .3 76.5 14.3 94.9c14.8 19.5 32.8 31.6 54.1 29.5 59.8-6 70.9-92 18.6-117.2-15.6-7.6-29.7-6-46.8-.8C25.4 10.8 3.7 24.6 1 40.7" style={{strokeDashoffset:  355.611, strokeDasharray: 355.611}}></path>
                        </svg>
                    }/>
                    Scroll to discover
                </p>
            </div>
        </div>
    )
}
