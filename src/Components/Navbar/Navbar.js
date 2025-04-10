import React, { use, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import './Navbar.css';
import LowerNavComponent from './LowerNavComponent';
import { Power4 } from 'gsap';


export const DivOneTopTitle = ["Shop" , "Explore Mac" , "Explore iPad" , "Explore iPhone" , "Explore Watch" , "Explore Airpods" , "Explore Tv & Movies" , "Explore Entertainment" , "Shop Accessories" , "Explore Support"];

 export let DivOneMains =
 [
["Shop the Latest" , "Mac" , "iPad" , "iPhone" , "AirPods" , "Accessories"], // for the Store
["Explore All Mac" , "Macbook Pro" , "Macbook Air" , "iMac" , "Mac mini" , "Mac Studio" , "Mac Pro" , "Displays"],
["Explore All iPad" , "iPad Pro" , "iPad Air" , "iPad" , "iPad mini" , "Apple Pencil" , "Keyboards"],
["Explore All iPhone" , "iPhone 16 Pro" , "iPhone 16" , "iPhone 16e" , "iPhone 15"],
["Explore All Apple Watch", "Apple watch Series 10" , "Apple Watch Ultra 2" , "Apple Watch SE" , "Apple Watch Nike"],
["Explore All Airpod", "Airpod 4" , "AirPod Pro2" , "Airpod Max"],
["Explore TV & Home" , "TV 4K" , "HomePod" , "HomePod mini"],
["Explore Entertainment" , "Apple One" , "Apple TV+" , "Apple Music" , "Apple Arcade" , "Apple Podcasts" , "Apple Books" , "Apple Store"],
["Shop All Accessories" , "Mac" , "iPad" , "iPhone", "Apple Watch" , "Airpods" , "TV & Home"],
["Mac" , "iPad" , "iPhone" , "AirPods" , "Apple Watch" , "TV"]
];

export let DivOneBottoms = [[undefined],
["Compare Mac" , "Switch from PC to Mac"],
["Compare iPad", "why iPad"],
["Compare iPhone" , "Switch from Android"],
["Compare Apple Watch", "why Apple Watch"],
["Compare Airpod"],
[undefined],
[undefined],
[undefined],
["Explore Support"]
]

export let DivTwoTitle = ["Quick Links","Shop Mac","Shop iPad","Shop iPhone","Shop Watch","Shop AirPod","Shop TV & Home","Support","Explore Accessories","Get Help"]
export let DivThreeTitle = ["Shop Special Stores","More from Mac" , "More from iPad","More from iPhone","More from Watch","More from AirPods","More from TV & Home","","","Helpful Topics"]

export let DivTwoMains = [
  ["Find a Store","Order Status","Ways to Buy","Personal Setup"],
  ["Shop a Mac", "Mac Accessories" , "Ways to Buy"],
  ["Shop a iPad" , "iPad Accessories" , "Ways to Buy"],
  ["Shop a iPhone" , "iPhone Accessories" ,"Apple Trade in", "Ways to Buy"],
  ["Shop a Apple Watch" ,"Apple Watch Straps", "Apple Watch Accessories" , "Ways to Buy"],
  ["Shop a AirPods", "AirPods Accessories"],
  ["Shop Apple TV 4K" , "Shop HomePod" , "Shop HomePod mini" , "Shop Siri Remote" , "Apple TV Accessories"],
  ["Apple TV+ Support" , "Apple Music Support"],
  ["Made by Apple", "Beats by Dr. Dre" , "AirTag"],
  ["Community" , "Check Coverage" , "Repair"]
]

export let DivthreeMains = [
  ["Education" , "Business"],
  ["Mac Support", "AppleCare for Mac","MacOS sequoia","Apple Intelligence","Apps by Apple","Continuity","iCloud+","Mac for Business","Education"],
  ["iPad Support", "AppleCare for iPad","iPadOs 18","Apple Intelligence","Apps by Apple","iCloud+","Education"],
  ["iPhone Support", "AppleCare for iPhone","ios 18","Apple Intelligence","Apps by Apple","iCloud+","Wallet","Siri"],
  ["Apple Watch Support", "AppleCare for Apple Watch","watchOS 11","Apps by Apple","Apple Watch for KIDS"],
  ["AirPods Support", "AppleCare for HeadPhones","Apple Music"],
  ["Apple TV Support","HomePod Support","AppleCare+","Apple TV apps","Apple TV+","Home app","Apple Music","Siri","AirPlay"],
  [undefined],
  [undefined],
  ["AppleCare+","Apple Account and Password","Billing and Subscriptions","Accessibility"]
];

const Navbar = () => {

  let initialvalueofPaddingLeft ;
  let setPaddingValue = (event) => {initialvalueofPaddingLeft = document.querySelector('.appleLogo')?.getBoundingClientRect().left ;
      document.querySelectorAll('.BelowNavChilds').forEach((value,index) => {
        value.style.paddingLeft = `${initialvalueofPaddingLeft}px`
      }) 
  }
  useEffect(()=> {
    initialvalueofPaddingLeft = document.querySelector('.appleLogo')?.getBoundingClientRect().left;
    document.querySelectorAll('.BelowNavChilds').forEach((value,index) => {
      value.style.paddingLeft = `${initialvalueofPaddingLeft}px`
    }) 

      document.querySelector('.BelowNav').style.paddingLeft = `${initialvalueofPaddingLeft}px`

    window.addEventListener('resize',setPaddingValue);

    return() =>{
      document.querySelector('.BelowNav').style.paddingLeft = `${ document.querySelector('.appleLogo')?.getBoundingClientRect().left}px`
      window.removeEventListener('resize',setPaddingValue);
    }
  },[]);

  
  // from here the proper Gsap Code will be written 

  // initial Gsap // make the clip-Path small and move the "BelowNavBlocks" slightly up and give them a blur
  let IndexArray = [];
  let EffectDone = [false];

  useEffect(()=>{

    document.querySelectorAll('.BelowNavChilds').forEach((value,index) => {


      gsap.set(value,{
        clipPath : "polygon(0% 0% , 100% 0%, 100% 0% , 0% 0% )",
        opacity : 1
      })


      gsap.set(value.querySelector('.BlockOneTitle'),{
        opacity : 0
      })

      gsap.set(value.querySelector('.BlockTwoTitle'),{
        opacity : 0
      })

      gsap.set(value.querySelector('.BlockThreeTitle'),{
        opacity : 0
      })

      gsap.set(value.querySelectorAll('.FirstClassSpans'),{
        y : 0,
        opacity : 0.05,
        filter : "blur(3px)"
      })

      gsap.set(value.querySelectorAll('.SecondClassSpans'),{
        y : 0,
        opacity : 0.05,
        filter : "blur(3px)"
      })

      gsap.set(value.querySelectorAll('.ThirdClassSpans'),{
        y : 0,
        opacity : 0.05,
        filter : "blur(3px)"
      })

      gsap.set('.blurNav',{
        clipPath : "polygon(50% 50% , 50% 50%, 50% 50% , 50% 50% )",
        "--blur" : "0px",
        "--myColor" : "transparent"
      })
    })
  },[])


//now Moving to the Part where when we Enter the thing what will happen

//now you might need to glow the part which is curretly selected

const Glow = (integer) => {
  document.querySelectorAll('.Navcolor > a').forEach((value,index) => {
    if(index !== integer)
    {
      gsap.to(value,{
        color : "rgb(190, 187, 187",
        duration : 0
      })
    }else{
      gsap.to(value,{
        color : "white",
        duration : 0.1,
        ease : "power4.in"
      })
    }
  })
}

useEffect(()=>{
  document.querySelectorAll('.hoverNav').forEach((value,index) =>
  {
    value._Effect = function ()
    {
      console.log('the function is running')
      IndexArray.push(index) // pushing the index 
      let Recentindex = (IndexArray.length >=2)? IndexArray[IndexArray.length -2] : undefined // to choose which slide was open // recent
      let Currentindex = (IndexArray.length >=1)? IndexArray[IndexArray.length -1] : undefined // to choose which slide is open // current 
      Glow(Currentindex);

      // Now the First Time Animation
      if(EffectDone[EffectDone.length -1] === false)
        {console.log('if statement is running')
          document.querySelectorAll('.BelowNavChilds').forEach((value,index) =>
          {
            if(index === Currentindex)
            {
              let LengthOfTCS = value.querySelectorAll('.ThirdClassSpans').length
              let LengthOfSCS = value.querySelectorAll('.SecondClassSpans').length
              let LengthOfFCS = value.querySelectorAll('.FirstClassSpans').length
              let x = 0.4 - (LengthOfFCS * 0.03)
              let DurationFCS = (0.35 - ((LengthOfFCS - 1)* 0.02));
              let DurationSCS = (0.245 - ((LengthOfSCS - 1)* 0.014));
              let DurationTCS = (0.220 - ((LengthOfTCS - 1)* 0.014));
              let tl = gsap.timeline();
              tl.to('.navbar',{backgroundColor : "rgb(16,15,15)",duration : 0.05 , ease : "power3.in"})
              .to(value,{clipPath : "polygon(0% 0% , 100% 0%, 100% 100% , 0% 100% )",duration : 0.35,ease: "power4.inOut"},"<")
              //.to('.blurNav',{clipPath : "polygon(0% 0% , 100% 0%, 100% 100% , 0% 100% )",duration : 0,ease: "none",delay : 0},"<")
              //.to('.blurNav',{"--blur" : "3px" , "--myColor" : "rgb(255,255,255,0.1)" , duration : 0.7 , ease : "power3.out" ,delay : 0.2},"<")
              .to(value.querySelector('.BlockOneTitle'),{opacity : 1 , duration : 0.4,delay : 0},"<")
              .to(value.querySelectorAll('.FirstClassSpans'),{y : 0 , opacity : 1 , filter : "blur(0px)", stagger : 0.02 , duration :DurationFCS  , ease : "power4.inOut",delay : 0},"<")
              .to(value.querySelector('.BlockTwoTitle'),{opacity : 1 , duration : 0.08,delay : 0.105},"<")
              .to(value.querySelectorAll('.SecondClassSpans'),{y : 0 , opacity : 1 , filter : "blur(0px)", stagger : 0.014 , duration :DurationSCS  , ease : "power4.inOut",delay : 0},"<")
              .to(value.querySelector('.BlockThreeTitle'),{opacity : 1 , duration : 0.08,delay : 0.015},"<")
              .to(value.querySelectorAll('.ThirdClassSpans'),{y : 0 , opacity : 1 , filter : "blur(0px)", stagger : 0.014 , duration :DurationTCS  , ease : "power4.inOut",delay : 0},"<")
            }
          })
        }
      else{
        console.log(Currentindex,Recentindex)
        document.querySelectorAll('.BelowNavChilds').forEach((value,index) =>
          {
            
            if(index === Currentindex)
            {console.log('running the current index thing')
              
                let LengthOfTCS = value.querySelectorAll('.ThirdClassSpans').length
                let LengthOfSCS = value.querySelectorAll('.SecondClassSpans').length
                let LengthOfFCS = value.querySelectorAll('.FirstClassSpans').length
                let DurationFCS = (0.35 - ((LengthOfFCS - 1)* 0.02));
                let DurationSCS = (0.245 - ((LengthOfSCS - 1)* 0.014));
                let DurationTCS = (0.220 - ((LengthOfTCS - 1)* 0.014));
                let tl = gsap.timeline();
                tl.to('.navbar',{backgroundColor : "rgb(16,15,15)",duration : 0.05 , ease : "power3.in"})
                .set(value,{zIndex : 1},"<")
                .to(value,{clipPath : "polygon(0% 0% , 100% 0%, 100% 100% , 0% 100% )",duration : 0.35,ease: "power4.inOut"},"<")
                .to(value.querySelector('.BlockOneTitle'),{opacity : 1 , duration : 0.4},"<")
                .to(value.querySelectorAll('.FirstClassSpans'),{y : 0 , opacity : 1 , filter : "blur(0px)", stagger : 0.02 , duration :DurationFCS  , ease : "power4.inOut",delay : 0},"<")
                .to(value.querySelector('.BlockTwoTitle'),{opacity : 1 , duration : 0.08,delay : 0.105},"<")
                .to(value.querySelectorAll('.SecondClassSpans'),{y : 0 , opacity : 1 , filter : "blur(0px)", stagger : 0.014 , duration :DurationSCS  , ease : "power4.inOut",delay : 0},"<")
                .to(value.querySelector('.BlockThreeTitle'),{opacity : 1 , duration : 0.08,delay : 0.015},"<")
                .to(value.querySelectorAll('.ThirdClassSpans'),{y : 0 , opacity : 1 , filter : "blur(0px)", stagger : 0.014 , duration :DurationTCS  , ease : "power4.inOut",delay : 0},"<")
              
            }

            if(index === Recentindex && index !== Currentindex)
              {
                let tl = gsap.timeline();
                tl.to(value.querySelector('.BlockOneTitle'),{opacity : 0 , duration : 0.2},"<")
                .to(value.querySelectorAll('.FirstClassSpans'),{y : 0 , opacity : 0.05 , filter : "blur(3px)", stagger : 0 , duration :0.3  , ease : "power4.inOut",delay : 0},"<")
                .to(value.querySelector('.BlockTwoTitle'),{opacity : 0 , duration : 0.2,delay : 0.105},"<")
                .to(value.querySelectorAll('.SecondClassSpans'),{y : 0 , opacity : 0.05 , filter : "blur(3px)", stagger : 0 , duration :0.3  , ease : "power4.inOut",delay : 0},"<")
                .to(value.querySelector('.BlockThreeTitle'),{opacity : 1 , duration : 0.2,delay : 0.015},"<")
                .to(value.querySelectorAll('.ThirdClassSpans'),{y : 0 , opacity : 0.05 , filter : "blur(3px)", stagger : 0 , duration :0.3  , ease : "power4.inOut",delay : 0},"<")
                .set(value,{zIndex : -1},"<")
                .to(value,{clipPath : "polygon(0% 0% , 100% 0%, 100% 0% , 0% 0% )",duration : 0.35,ease: "none",delay : 0.08},"<")
              }
          })

      } 





      if(EffectDone[EffectDone.length -1] === false){EffectDone.push(true);console.log('pushing the true in it')} // to know weather i want to show that Effect or not for the First Time
    }

    value.addEventListener('mouseenter',value._Effect);
  })

  
  return() => {
    document.querySelectorAll('.hoverNav').forEach((value,index) => value.removeEventListener('mouseenter',value._Effect))
  }
},[])


//Now when you go out of NavBar

const MakeNavDefault = () =>{
  Glow(99);
  gsap.to('.blurNav',{
    clipPath : "polygon(0% 0% , 100% 0%, 100% 0% , 0% 0% )",
    opacity : 1,
    duration : 0.04,
    "--blur" : "0px",
    "--myColor" : "none",
    ease : "power4.inOut"
  })
      document.querySelectorAll('.BelowNavChilds').forEach((value,index) => {


      gsap.to(value,{
        clipPath : "polygon(0% 0% , 100% 0%, 100% 0% , 0% 0% )",
        opacity : 1,
        duration : 0.3
        ,ease : "power4.inOut"
      })


      gsap.to(value.querySelector('.BlockOneTitle'),{
        opacity : 0.1,
        duration : 0.1
      })

      gsap.to(value.querySelector('.BlockTwoTitle'),{
        opacity : 0,
        duration : 0.1
      })

      gsap.to(value.querySelector('.BlockThreeTitle'),{
        opacity : 0.1,
        duration : 0.1
      })

      gsap.to(value.querySelectorAll('.FirstClassSpans'),{
        y : -3,
        opacity : 0.05,
        filter : "blur(3px)",
        duration : 0.1
      })

      gsap.to(value.querySelectorAll('.SecondClassSpans'),{
        y : -3,
        opacity : 0.05,
        filter : "blur(3px)",
        duration : 0.1
      })

      gsap.to(value.querySelectorAll('.ThirdClassSpans'),{
        y : -3,
        opacity : 0.1,
        filter : "blur(3px)",
        duration : 0.1
      })
    })
  
    gsap.to('.navbar',{
      backgroundColor : "rgb(28,29,32)",
      duration : 0.5 ,
      ease : "power4.inOut"
    })

    EffectDone.push(false)
}

useEffect(()=> {
  document.querySelector('.navbar').addEventListener('mouseleave',MakeNavDefault);
  return () => {
    document.querySelector('.navbar').removeEventListener('mouseleave',MakeNavDefault);
  }
})

  return (

    <div className='navbar'>
      <ul className='listofLink'>
      <li className="siteLinks appleLogo"><Link to="/">
      <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
        <path className='logoPath' fill='white' d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
        </svg>
      </Link></li>

        <li className="siteLinks Navcolor">
          <Link to="/Store">
            <span>Store</span>
            <div className='storeNav hoverNav'></div>
          </Link>
        </li>

        <li className="siteLinks Navcolor">
          <Link to="/Mac">
            <span>Mac</span>
          <div className='MacNav hoverNav'></div>
          </Link>
        </li>


        <li className="siteLinks Navcolor">
          <Link to="/iPad">
            <span>iPad</span>
            <div className='iPadNav hoverNav'></div>
          </Link>
        </li>


        <li className="siteLinks Navcolor">
          <Link to="/iPhone">
            <span>iPhone</span>
            <div className='iPhoneeNav hoverNav'></div>
          </Link>
        </li>


        <li className="siteLinks Navcolor">
          <Link to="/watch">
            <span>Watch</span>
            <div className='watchNav hoverNav'></div>
          </Link>
        </li>

        <li className="siteLinks Navcolor">
          <Link to="/airpods">
            <span>AirPods</span>
            <div className='AirPodsNav hoverNav'></div>
          </Link>
        </li>

        <li className="siteLinks Navcolor">
          <Link to="/tv">
            <span>Tv & Movies</span>
            <div className='tvNav hoverNav'></div>
          </Link>
        </li>

        <li className="siteLinks Navcolor">
          <Link to="/entertainment ">
            <span>Entertainment</span>
            <div className='entertainmentNav hoverNav'></div>
          </Link>
        </li>

        <li className="siteLinks Navcolor">
          <Link to="/Acc">
            <span>Accessories</span>
            <div className='accessoriesNav hoverNav'></div>
          </Link>
        </li>


        <li className="siteLinks Navcolor">
          <Link to="/Support">
            <span>Support</span>
            <div className='supportNav hoverNav'></div>
          </Link>
        </li>


        <li className="siteLinks">
        <svg className='search' xmlns="http://www.w3.org/2000/svg" width="15px" height="44px" viewBox="0 0 15 44">
          <path fill='white' d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
        </svg>
        </li>
        <li className="siteLinks">
          <Link to="/cart">
          <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
          <path fill='white' d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
        </svg>
          </Link>
        </li>
        <li className="siteLinks"><Link to="/Menu">Menu</Link></li>

      </ul>
      <div className="blurNav"></div>
      <div className='BelowNav'>
      <LowerNavComponent MainClass="BelowNavChilds BelowStor" indexMain={0}/>
      <LowerNavComponent MainClass="BelowNavChilds BelowStor" indexMain={1}/>
      <LowerNavComponent MainClass="BelowNavChilds BelowStor" indexMain={2}/>
      <LowerNavComponent MainClass="BelowNavChilds BelowStor" indexMain={3}/>
      <LowerNavComponent MainClass="BelowNavChilds BelowStor" indexMain={4}/>
      <LowerNavComponent MainClass="BelowNavChilds BelowStor" indexMain={5}/>
      <LowerNavComponent MainClass="BelowNavChilds BelowStor" indexMain={6}/>
      <LowerNavComponent MainClass="BelowNavChilds BelowStor" indexMain={7}/>
      <LowerNavComponent MainClass="BelowNavChilds BelowStor" indexMain={8}/>
      <LowerNavComponent MainClass="BelowNavChilds BelowStor" indexMain={9}/>
      </div>
    </div>
  )
}

export default Navbar
