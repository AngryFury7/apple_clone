import React, { useEffect } from 'react'
import './Mac.css'
import { Link } from 'react-router-dom'
import {gsap,ScrollTrigger} from 'gsap/all'
import MacTopG from './MacTopG';
import MacLineupLaptop from './Mac_Lineup/Laptops/MacLineupLaptop';
import MacLineupDesktop from './Mac_Lineup/Desktop/MacLineupDesktop';
//MacTop_Products_wrap
//height of video container is fixed and is 729.797 px

let MacTopPathLinks = [];
for(let i = 0 ; i<=10;i++)
{
    MacTopPathLinks.push(``)
}

/*
some other effects can be added on but why do we need this you know like the reveal effect of the website
 */


const Mac = () => {
    gsap.registerPlugin(ScrollTrigger); // <== Register the plugin!

    let VideoPlaybackStatus = [true];



    //effect for the video // we will work on the playPause button later
    useEffect(() => {
        ScrollTrigger.create({
            trigger: document.querySelector('.Video_Mac_Welcome'),
            start: "bottom bottom+=100px",
            end: "bottom 34%",
            onUpdate: (self) => {
                let innerWidthWindow = window.innerWidth;
                let progress = self.progress;
                let borderRadiusN = 40*progress;
                let newWidth = innerWidthWindow - ((130 * 2) * progress);
    
                gsap.set('.VideoContainerOuter', {
                    width: `${newWidth}px`,
                    borderRadius: `${borderRadiusN}px`
                });
            }
        });
    }, []);


    //initail Effect
    useEffect(() => {
        document.querySelectorAll('.MacLineupwrap').forEach((value,index) => {
            if(index === 1 || index === 2)
            {
                gsap.set(value.querySelectorAll('.ChangingContent'),{opacity : 0})
                gsap.set(value,{opacity : 0 , display : "none"})
            }
        })
    },[])


    useEffect(() => {
        document.querySelector('.MainLineupContainer').style.height = window.getComputedStyle(document.querySelectorAll('.MacLineupwrap')[0]).height
    },[])


    //animation for the slider of Mac_lineup
    let MacLineupActiveButtonIndex = [0] // tells about the index of the button which is active

    useEffect(() =>{

        document.querySelectorAll('.MacLineup_chooseButtons').forEach((value,index) => {
            value._MacLineupEffect = function () 
            {
                let RecentActiveIndex_Mac = MacLineupActiveButtonIndex[MacLineupActiveButtonIndex.length - 1]
                MacLineupActiveButtonIndex.push(index);
                let CurrentActiveIndex_Mac = MacLineupActiveButtonIndex[MacLineupActiveButtonIndex.length - 1]

                if(MacLineupActiveButtonIndex.length > 100){MacLineupActiveButtonIndex.splice(0,90)}

                if(RecentActiveIndex_Mac === CurrentActiveIndex_Mac){return}
                let MovingDistance = 15 + ((130)*CurrentActiveIndex_Mac);
                let CurrentDistance = 15 + ((130)*RecentActiveIndex_Mac);
                let differenceOfIndes = (CurrentActiveIndex_Mac - RecentActiveIndex_Mac)*0.1

                let delayCount = Math.abs(differenceOfIndes)

                document.querySelectorAll('.MacLineup_chooseButtons').forEach((value,index) => {
                    if(index === CurrentActiveIndex_Mac)
                    {
                        gsap.to(value,{
                            color : "rgb(28,29,32)",
                            duration : 0.4,
                            delay : delayCount,
                            ease : "power4.inOut"
                        })
                    }else{
                        gsap.to(value,{
                            color : "rgb(255,255,255)",
                            duration : 0.4,
                            delay : 0.05,
                            ease : "power4.inOut"
                        })
                    }
                })


                gsap.fromTo('.MacLineup_Slider',{position : "absolute",left : `${CurrentDistance}px`},{position : "absolute",left : `${MovingDistance}px`,duration : 0.7 , ease : "power4.inOut"})

                document.querySelectorAll('.MacLineupwrap').forEach((value,index) => {
                    if(index === CurrentActiveIndex_Mac)
                    {
                        gsap.set(value,{display : "flex"})
                        gsap.to(value,{opacity : 1 , duration : 0 , delay : 0,ease : "power4.inOut"})
                        gsap.to(value.querySelectorAll('.ChangingContent'),{opacity : 1 , duration : 0.7 , delay : 0.1,ease : "power4.inOut"})
                    }else{
                        gsap.set(value,{opacity : 0 , display : "none"})
                        gsap.to(value.querySelectorAll('.ChangingContent'),{opacity : 0 , duration : 0.4 , delay : 0,ease : "power4.inOut"})
                    }
                })

            }

            value.addEventListener('click',value._MacLineupEffect)
        })

        return () => {
            document.querySelectorAll('.MacLineup_chooseButtons').forEach((value,index) => {
                value.removeEventListener('click',value._MacLineupEffect)
            })
        }
    },[])


     useEffect(() => {
         document.querySelectorAll('.MacLineup_Product_Img').forEach((value,index) => {
             value._EnterEffect = function () {
                     gsap.to(value,{
                         scale : 1.017,
                         duration : 0.3,
                         ease: "power2.out",
                     })
             }
 
             value._LeaveEffect = function () {
                 gsap.to(value,{
                     scale : 1,
                     duration : 0.31 , // duration is more then enter one to prevent the misfunction 
                     ease : "power4.inOut",
                 })
             }
 
 
             value.addEventListener('mouseenter',value._EnterEffect);
             value.addEventListener('mouseleave',value._LeaveEffect)
         })
 
         return() => {
             document.querySelectorAll('.MacLineup_Product_Img').forEach((value,index) => {
                 value.removeEventListener('mouseenter',value._EnterEffect)
                 value.removeEventListener('mouseleave',value._LeaveEffect)
             })
         }
     },[])

     //MacLineupwrap



    
  return (
    <div>
        <div className="MacTop_Products_wrap">
            <div className='MacTop_leftScroll'></div>
            <MacTopG/>
            <div className='MacTop_rightScroll'></div>
        </div>

        <div className="MacTop_offer">
            <span>Buy Mac with education savings.*<Link className='Mac_Top_Offer_Link'>Shop</Link></span> 
        </div>

        <div className='Mac_Declaration'>
            <span className="Mac_MainSpan">Mac</span>
            <div className="Mac_MainRightSpansWrap">
                <span>If you can dream it,</span>
                <span>Mac can do it.</span>
            </div>
        </div>  

        <div className="Mac_VideoWrap">
            <div className="VideoContainerOuter">
                <div className="VideoContiner">
                <video className='Video_Mac_Welcome' controls="" autoPlay muted loop name="media"><source src="https://www.apple.com/105/media/us/mac/family/2025/59856fc1-d007-421a-90ee-734ddf3fd25d/anim/welcome/medium.mp4#t=5.758346" type="video/mp4"/></video>
                </div> 
                <div className="VideoButton"></div>
            </div>
        </div>


        <div className="GetToKnow_Mac">
            <div className="GTK_Mac_declaration"></div>
        </div>


        <div className="scrollerSpace"></div>


        <div className="MacLineup_wrap_container">
            <div className="MacLineup_declaration">
                <div className="MacLineUp_Main_Text">
                    <span>Explore the lineup</span>
                </div>
                <div className="MacLineup_Main_Links">
                    <Link>Help me choose &#8599;</Link>
                    <Link>Compare all models &#8599;</Link>
                </div>
            </div>


            <div className="MacLineupButtons_choose_select_wrap">
                <div className="MacLineup_ChooseButtons_outerwrap">
                    <div className="MacLineup_Slider"></div>
                    <div className="MacLineup_chooseButtons">Laptops</div>
                    <div className="MacLineup_chooseButtons">Desktops</div>
                    <div className="MacLineup_chooseButtons">Displays</div>
                </div>
            </div>
        </div>

        <div className="MainLineupContainer">
        <MacLineupLaptop/>
        <MacLineupDesktop/>
        <MacLineupDesktop/>
        </div>
        <div className="scrollerSpace"></div>
    </div>
  )
}

export default Mac
