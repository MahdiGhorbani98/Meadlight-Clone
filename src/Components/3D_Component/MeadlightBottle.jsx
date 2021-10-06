import React, { useRef,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function MeadlightBottle(props) {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {

    gsap.to(rotateGSAP.current.rotation , 
      {
        y:20,
        duration:400,
        scrollTrigger:{
          trigger: '.App',
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=5930",
          scrub:1
        }
      }
    );
  },[])
  useEffect(() => {
    gsap.from(rotateGSAP.current.rotation , 
      {
        y:5,
        duration:0.8,
        delay:1.2,
        
      }
    );
  }, [])



  const mesh = useRef(null);
  const group = useRef()
  const rotateGSAP = useRef(null)
  const { nodes, materials } = useGLTF('../../../../MeadlightBottle.glb')

  return(
    
    <>
      <group rotation={[0,0,0]} scale={1.2,1.2,1.2} ref={group} {...props} dispose={null}>
        <group ref={mesh} rotation={[-Math.PI / 2, 0, 0]}>
          <group ref={rotateGSAP} rotation={[Math.PI / 2, 0 ,0.26]}>
            <mesh geometry={nodes.defaultMaterial.geometry} material={materials.bottle} />
            <mesh rotation={[0,15,0]} geometry={nodes.defaultMaterial_1.geometry} material={materials.wrap} />
          </group>
        </group>
      </group>
    </>

    
    
  )
}

useGLTF.preload('../../../../MeadlightBottle.glb')



