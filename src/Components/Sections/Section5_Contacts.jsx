import React,{useEffect, useRef} from 'react'
import SvgImport from '../SVG/SvgImport';
import rose from '../../Assets/illustrations/rose_00.png';
import hand_01 from '../../Assets/illustrations/hand_01.png';
import ln from '../../Assets/images/in.png';
import g from '../../Assets/images/Git.png';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
// import { Power2 , Elastic } from 'gsap/all';
export default function Section5_Contacts() {
    let tl_info = gsap.timeline()
    function MoreInfo(){
        if(document.querySelector('.defaultInfo').style.display!=="none")
        {
            gsap.to('.plusInfo', {rotationZ:-135, duration:0.5})
            tl_info.to('.defaultInfo' , {y:-40 ,opacity:0 ,display:'none' , duration:0.4})
            tl_info.fromTo('.altInfo' , {y:40 ,opacity:0,display:'none'},{y:0 ,opacity:1 ,display:'block', duration:0.4})
        }else{
            gsap.to('.plusInfo', {rotationZ:0, duration:0.5})
            tl_info.to('.altInfo' , {y:-40 ,opacity:0 ,display:'none' , duration:0.4})
            tl_info.fromTo('.defaultInfo' , {y:40 ,opacity:0,display:'none'},{y:0 ,opacity:1 ,display:'flex', duration:0.4})
        }
    }
    gsap.registerPlugin(ScrollTrigger)


    let tl_02 = gsap.timeline({
        scrollTrigger:{
            trigger:".Section5_Contacts",
            start: "+=1650",
            markers:false,
        },
    })
    let tl_articles = gsap.timeline({
        scrollTrigger:{
            trigger:".Section5_Contacts",
            start: "+=1770",
            markers:false,
        },
    })
    // useEffect(() => {
    //     gsap.from('.roseS3',
    //     {
    //         scrollTrigger:{
    //             trigger:".Section3_History_Container",
    //             start: "-=550",
    //             markers:false,
    //         },
    //         opacity:0,
    //         y:20,
    //         duration:0.5
    //     })
    //     gsap.from('.story_00',
    //     {
    //         scrollTrigger:{
    //             trigger:".Section3_History_Container",
    //             start: "-=550",
    //             markers:false,
    //         },
    //         opacity:0,
    //         y:30,
    //         duration:0.5
    //     })
    //     tl_02.from('.zeroS3',
    //     {
    //         rotateX:-50,
    //         rotateY:-50,
    //         opacity:0,
    //         duration:0.4
    //     })
    //     tl_02.from('.oneS3',
    //     {
    //         rotateX:-50,
    //         rotateY:-50,
    //         opacity:0,
    //         duration:0.4
    //     },"-=0.2")
    //     // tl_01.from('.hand00',
    //     // {
    //     //     y:40,
    //     //     opacity:0,
    //     //     duration:0.4
    //     // },"-=0.4")
    //     tl_02.from('.svg__02',
    //     {
    //         strokeDashoffset:355.611,
    //         duration:0.4
    //     },"-=0.1")
    //     gsap.from('.pHeader__s3',
    //     {
    //         scrollTrigger:{
    //             trigger:".Section3_History_Container",
    //             start: "-=450",
    //             markers:false,
    //         },
    //         y:30,
    //         opacity:0,
    //         duration:0.5
    //     })
    //     // gsap.from('.svg_nextInfo',
    //     // {

    //     //     strokeDashoffset:330,
    //     //     duration:0.5
    //     // })

    //     tl_articles.from('.pBold__s3',
    //     {
    //         rotateX:-50,
    //         rotateY:-50,
    //         opacity:0,
    //         x:30,
    //         duration:0.8
    //     },"-=0.2")
    //     tl_articles.from('.linePink_pBold_S3',
    //     {
    //         strokeDashoffset:650,
    //         duration:0.8,
    //         ease: Power2.easeIn
    //     },'-=0.3')
    //     tl_articles.from('.pCaption__s3',
    //     {
    //         rotateX:-50,
    //         rotateY:-50,
    //         opacity:0,
    //         x:20,
    //         duration:0.6,
    //         stagger:1
    //     },'-=0.3')
    //     gsap.from('.story_01',
    //     {
    //         scrollTrigger:{
    //             trigger:".Section3_History_Container",
    //             start: "-=290",
    //             markers:false,
    //         },
    //         opacity:0,
    //         y:50,
    //         x:30,
    //         duration:0.8,
    //     },'-=0.0')

    // })



    return (
        <div className="Section5_Contacts_Container">
            <div className="Section5_Contacts">
                <div>
                    <img className="roseS5" src={rose} alt="rose" />
                    
                    <p className="pHeader__s5">NICE TO MEET YOU</p>
                    <div className="articles_S5">
                        <p className="pBold__s5">Let’s get to know <br/>
                        <bdi className="bdiSec2">
                        <>each other<br/></>
                        <SvgImport 
                        svg={
                            <svg viewBox="0 0 135 10" style={{position: 'absolute', width: 175, bottom: -8, right: 0}}>
                            <path className="linePink_pBold_S5" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" vectorEffect="non-scaling-stroke" d="M3.1 4.5c42.5-5.4 86.3 6.1 128.9.9" style={{strokeDashoffset:  0, strokeDasharray: 645.611}}></path>
                            </svg>}
                        />
                        </bdi>
                        </p>

                        <p className="pCaption__s5">
                        You can call, write or contact us on social media.<br/> We will be delighted to meet you!</p>
                        <img className="hand_01" src={hand_01} alt="hand_01" />

                    </div>
                </div>
                <div className="Info">
                    <button onClick={()=>MoreInfo()} className="pureInfo"><p className="plusInfo">+</p> INFO</button>
                    <div className="defaultInfo">
                        <div className="name">
                            <p>NAME</p>
                            <p>MAHDI GHORBANI</p>
                        </div>
                        <div className="email">
                            <p>EMAIL</p>
                            <p>MAHDIG502@GMAIL.COM</p>
                        </div>
                        <div className="socials">
                            <img src={ln} className="linkedin" alt="linkedin" />
                            <img src={g} className="git" alt="git" />

                        </div>
                    </div>

                    <div className="altInfo">
                        I was at last year of university(2020) that I started to learn "CSS", "Html", "JS" and "React". Now, every day I my passion in learning more and more is increasing and I believe that I can implement Front side of your next web project. I have a crazy love for User-Friendly, Interactive and Motion-Based webpages. 
                    </div>
                
                </div>
            </div>
        </div>
    )
}
