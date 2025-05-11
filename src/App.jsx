import React, { useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group",  {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(()=>{
if(!showContent) return ;
    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      delay:"-1",
      ease:"Expo.easeInOut"
    });
    gsap.to(".sky",{
      scale:1.3,
      rotate:0,
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut"
    });
    gsap.to(".bg",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut"
    });
    gsap.to(".character",{
      scale:0.8,
      x:"-50%",
      bottom:"-58%",
      rotate:0,
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut"
    });
    gsap.to(".text",{
      scale:1,
      rotate:0,
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut"
    });
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function(e){
      const xMove = (e.clientX / window.innerWidth - .5) * 40; 
      gsap.to(".imagesdiv .text", {
        x: `${xMove * .4}%`
      })
      gsap.to(".sky", {
        x:xMove
      })
      gsap.to(".bg", {
        x:xMove * 1.7
      })

    })
  },[showContent])
  return (
    <>
    <div className='svg fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]'>
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250px"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                  >VI</text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
            />
        </svg>
    </div>
    {showContent &&(
      <div className='main w-full rotate-[-10deg] scale-[1.7]'>
        <div className='landing overflow-hidden relative w-full h-screen bg-black'>
          <div className="navbar absolute top-0 left-0 z-[10] w-full py-5 px-10 ">
            <div className="logo flex gap-7">
              <div className="lines flex flex-col gap-[5px]">
                 <div className="line w-15 h-2 bg-white"></div>
                 <div className="line w-8 h-2 bg-white"></div>
                 <div className="line w-5 h-2 bg-white"></div>
              </div>
              <h3 className="text-4xl mt-[-8px] leading-none text-white">Rockstar</h3>
            </div>
          </div>
          <div className="imagesdiv relative overflow-hidden w-full h-screen">
            <img className='absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="" />
            <img className='absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="" />
            <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
            <h1 className='text-[10rem] leading-none -ml-40'>grand</h1>
            <h1 className='text-[10rem] leading-none -ml-20'>theft</h1>
            <h1 className='text-[10rem] leading-none -ml-40'>auto</h1>
          </div>
            <img className="absolute character -bottom-[170%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg] overflow-hidden" src="./girlbg.png" alt="" />
          </div>
        <div className="btmbar text-white absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent">
          <div className="flex gap-2 items-center">
            <i className=" text-3xl ri-arrow-down-line"></i>
            <h3 className='text-xl font-[Helvetica_Now_Display]'>Scroll Down</h3>
          </div>

          <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-[45px]' src="./ps5.png" alt="" />
        </div>
      </div> 


      <div className="w-full h-screen flex items-center justify-center bg-black">
        <div className="cntnr flex text-white w-full h-[80%]">
          <div className="limg relative w-1/2 h-full overflow-hidden">
            <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' src="./imag.png" alt="" />
          </div>
        <div className="rg w-[40%] py-10">
          <h1 className='text-6xl'>Still Running,</h1>
          <h1 className='text-6xl'>Not Hunting</h1>
          <p className='mt-10 text-[15px]  font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quibusdam ab et consectetur cumque facere quae quasi deleniti iste delectus, laborum tempora omnis?</p>
          <p className='mt-3 text-[15px] font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex amet voluptas fuga enim eius asperiores, quod ratione distinctio eaque quaerat fugit quae, nisi laborum porro dolore veritatis iusto quasi quidem earum? Aperiam recusandae saepe dolorem!</p>
          <p className='mt-3 text-[15px] font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex amet voluptas fuga enim eius asperiores, quod ratione distinctio eaque quaerat fugit quae, nisi laborum porro dolore veritatis iusto quasi quidem earum? Aperiam recusandae saepe dolorem!</p>
          <button className='mt-10 bg-yellow-500 px-3 py-3 text-2xl text-black cursor-pointer'>Download Now</button>
        </div>
      </div>
      </div>
    </div>
    )}
  </>
  )
}

export default App;