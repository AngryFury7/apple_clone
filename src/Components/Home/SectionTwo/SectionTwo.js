import React, { useEffect } from 'react'
import './SectionTwo.css'
import { Link } from 'react-router-dom';
import {gsap} from 'gsap';
let StoreTwoimgPath = [];
for(let i = 0 ; i<= 4; i++){
    StoreTwoimgPath.push(`/StoreTwoImg/Img${i+1}.jpeg`) // i+1 is done for a purpose
}

const SectionTwo = () => {
    let SectionTwoAnn = ["Apple Specialist",undefined,"Today at Apple","Personal setup",undefined]
    let SectionTwoHeadingOne = ["Shop one on one with a","Shop with spealist over","Join free sessiosn at your","Set up new device with help","Get expert service and"]
    let SectionTwoHeadingTwo = ["Specialist. Online or in a store","video.","App Store","from a specalist","support at Genius Bar."]
    let SectionTwoInfo = [undefined,"Choose your next device with guide.","Learn more with us.","Get guided with one on one session.",undefined]

    //adjusting some things 
    useEffect(() => {
        document.querySelectorAll('.STholder').forEach((value,index) => {
            value._EnterEffect = function () {
                    gsap.to(value,{
                        scale : 1.010,
                        duration : 0.3,
                        boxShadow : "0 0 12px rgba(255, 255, 255, 0.7)",
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
            document.querySelectorAll('.STholder').forEach((value,index) => {
                value.removeEventListener('mouseenter',value._EnterEffect)
                value.removeEventListener('mouseleave',value._LeaveEffect)
            })
        }
    },[])
    return (
    <div className='SectionTwo'>
        <div className="SectionTwodeclaration">
            <span>Help is here.</span>
            <span>Whenever and however you need it.</span>
        </div>

        <div className="SectionTwoscroll">
            <div>
            {
                SectionTwoAnn.map((value,index) => {

                    return (
                        <div className='STholder'>
                            <Link>
                            <div className="STimgholder">
                                <img src={StoreTwoimgPath[index]} alt='stimg'/>
                            </div>

                            {
                                SectionTwoAnn[index] !== undefined ? (<span className='STA'>{SectionTwoAnn[index]}</span>) : (<span style={{display : "none"}}></span>)
                            }

                                <div className="STH">
                                <span className='STHO'>{SectionTwoHeadingOne[index]}</span>
                                <span className='STHT'>{SectionTwoHeadingTwo[index]}</span>
                                </div>

                            {
                                SectionTwoInfo[index] !== undefined ? (<span className='STI'>{SectionTwoInfo[index]}</span>) : (<span style={{display : "none"}}></span>)
                            }
                            </Link>
                        </div>
                    )
                })
            }
            </div>
        </div>
      
    </div>
  )
}

export default SectionTwo
