import React, { use, useEffect } from 'react'
import './SectionOne.css'
import {Link} from 'react-router-dom'
import {gsap,ScrollTrigger} from 'gsap/all';


//add mouse wheel roll feature to scroll 


let SectionPath = []; // path will be added with the use of loops 

for(let i = 0 ; i<= 11 ; i++){
    SectionPath.push(`/SectionOneImg/Img${i+1}.jpg`) 
}

//apple_clone\public\SectionOneImg\Img1.jpg



const SectionOne = () => {
    let SectionOneAnn = [undefined,undefined,undefined,undefined,"NEW","SPECIAL OFFER",undefined,undefined,undefined,undefined,undefined,"Apple Watch Straps"]
    let SectionOneHeadings = ["iPhone 16 Pro","Mac Air","iPad Air","Apple Watch Series 10","iPhone 16e","--","Mac Studio","iPad","iPhone 16","Macbook Pro","Apple Watch Ultra 2","Show your true colours"]
    let SectionOneLabel = ["Apple Intelligence","Apple Intelligence","Apple Intelligence","ThinStant Classic","Apple Intelligence",undefined,"Apple Intelligence","Lovable. Drawable. Magical.","Apple Intelligence","Apple Intelligence","New Finish. Never Quit",undefined]
    let SectionOnePrice = ["From 119000_*","From 119000/*","From 119000-*","From 119000+*","From 119000`*",undefined,"From 119000~*","From 119000@*","From 119000!*","From 119000#*","From 119000^*",undefined]

    //for my personal use To make the work Easy
    useEffect(() => {
        document.querySelectorAll('.SOL').forEach((value,index) => {if(value.innerHTML === "Apple Intelligence"){value.classList.add('SOL_AppleIntelligence')}})
        document.querySelectorAll('.SOH').forEach((value,index) => {if(index === 0 ||index === 8 || index === 9 || index === 10){value.classList.add('SOH_white');}})
        document.querySelectorAll('.SOP').forEach((value,index) => {if(index === 0 ||index === 8 || index === 9 || index === 7){value.classList.add('SOH_white');}})
        document.querySelectorAll('.SOL').forEach((value,index) => {if(index === 99 ||index === 99 || index === 9 || index === 79){value.classList.add('SOH_white');}})
        document.querySelectorAll('.SOA').forEach((value,index) => {if(index === 0 ||index === 99 || index === 99 || index === 79){value.classList.add('SOH_brown');}})
    },[])

    //animations  // nothing you just need to scale it up by like 20% means make its scale 1.2
    useEffect(() => {
        document.querySelectorAll('.SOHolders').forEach((value,index) => {
            value._EnterEffect = function () {
                    gsap.to(value,{
                        scale : 1.017,
                        duration : 0.3,
                        boxShadow : "0 0 12px rgba(255, 255, 255, 0.4)",
                        ease: "power2.out",
                    })
            }

            value._LeaveEffect = function () {
                gsap.to(value,{
                    scale : 1,
                    duration : 0.31 , // duration is more then enter one to prevent the misfunction 
                    boxShadow : "0 0 0px rgba(255, 255, 255, 0.6)",
                    ease : "power4.inOut",
                })
            }


            value.addEventListener('mouseenter',value._EnterEffect);
            value.addEventListener('mouseleave',value._LeaveEffect)
        })

        return() => {
            document.querySelectorAll('.SOHolders').forEach((value,index) => {
                value.removeEventListener('mouseenter',value._EnterEffect)
                value.removeEventListener('mouseleave',value._LeaveEffect)
            })
        }
    },[])



  return (
    <div className='SectionOne'>
        <div className="SectionOneDeclaration">
            <span>The latest.</span>
            <span>Take a look at what’s new right now.</span>
        </div>

        <div className="SectionOneScroll">
         <div>
         {
            SectionOneAnn.map((value,index) => {
                return (
                    <div key={index+54} className='SOHolders'>
                        <Link className="SOLinks">
                        <div className="SOimageHolder">
                            <img src={SectionPath[index]} alt="" />
                        </div>
                        {value !== undefined ? (<span className='SOA'>{value}</span>) : (<span className='SODeactivated'></span>)}
                        <br />
                        <span className='SOH'>{SectionOneHeadings[index]}</span>
                        <br />
                        {SectionOneLabel[index] !== undefined ? (<span className='SOL'>{SectionOneLabel[index]}</span>) : (<span className='SODeactivated'></span>)}
                        <br />
                        {SectionOnePrice[index] !== undefined ? (<span className='SOP'>{SectionOnePrice[index]}</span>) : (<span className='SODeactivated'></span>)}
                        </Link>
                    </div>
                )
            })
         }</div>
        </div>
    </div>
  )
}

export default SectionOne
