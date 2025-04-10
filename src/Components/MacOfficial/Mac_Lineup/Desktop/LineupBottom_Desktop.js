import React from 'react'

const LineupBottom_Desktop = () => {

  let ProductData = [
    {
        Spec1 : {TypeOne : '24”' , FirstTypeTwo : '4.5K Retina display with 500 nits of brightness delivers' , SecondTypeTwo : 'sharp and vibrant detail.'},
        Spec2 : {ImagePath : '/MacLineup/Desktop/Chips/Img1.png' , TypeTwo : 'Apple M4 chip'},
        Spec3 : {ImagePath : '/MacLineup/Laptop/Chips/AppleIntelligence.png',TypeTwo : "Apple Intelligence"},
        spec4 : {TypeOne : "-",TypeTwo : undefined},
        spec5 : {FirstTypeTwo : "Up to",TypeOne : "6 Ports" , SecondTypeTwo : "2x Thunderbolt / USB 4 or 4x Thunderbolt 4," , ThirdTypeTwo : "Gigabit Ethernet, headphone jack"}
    },
    {
      Spec1 : {TypeOne : '-' , FirstTypeTwo : undefined , SecondTypeTwo : undefined},
      Spec2 : {ImagePath : '/MacLineup/Desktop/Chips/Img2.png' , TypeTwo : 'Apple M4 chip'},
      Spec3 : {ImagePath : '/MacLineup/Laptop/Chips/AppleIntelligence.png',TypeTwo : "Apple Intelligence"},
      spec4 : {TypeOne : "-",TypeTwo : undefined},
      spec5 : {FirstTypeTwo : "Up to",TypeOne : "8 Ports" , SecondTypeTwo : "3x Thunderbolt 4 or 3x Thunderbolt 5, 2x USB‑C, HDMI," , ThirdTypeTwo : "Gigabit Ethernet, headphone jack"}
  },
  {
    Spec1 : {TypeOne : '-' , FirstTypeTwo : undefined , SecondTypeTwo : undefined},
    Spec2 : {ImagePath : '/MacLineup/Desktop/Chips/Img3.png' , TypeTwo : 'Apple M4 chip'},
    Spec3 : {ImagePath : '/MacLineup/Laptop/Chips/AppleIntelligence.png',TypeTwo : "Apple Intelligence"},
    spec4 : {TypeOne : "-",TypeTwo : undefined},
    spec5 : {FirstTypeTwo : "Up to",TypeOne : "12 Ports" , SecondTypeTwo : "4x or 6x Thunderbolt 5 (USB‑C), 2x USB‑A, up to" , ThirdTypeTwo : "2x USB‑C, HDMI, 10Gb Ethernet, SDXC, headphone jack"}
},
{
  Spec1 : {TypeOne : '-' , FirstTypeTwo : undefined , SecondTypeTwo : undefined},
  Spec2 : {ImagePath : '/MacLineup/Desktop/Chips/Img4.png' , TypeTwo : 'Apple M4 chip'},
  Spec3 : {ImagePath : '/MacLineup/Laptop/Chips/AppleIntelligence.png',TypeTwo : "Apple Intelligence"},
  spec4 : {TypeOne : "-",TypeTwo : undefined},
  spec5 : {FirstTypeTwo : "Up to",TypeOne : "18 Ports" , SecondTypeTwo : "8x Thunderbolt 4, 3x USB‑A, 2x HDMI, 2x 10Gb Ethernet," , ThirdTypeTwo : "2x Serial ATA, headphone jack"}
},

]

return(
  ProductData.map((value,index) => {
    return (
        <div key={index} className='MacLineup_Desktop_ProductSpecs_OuterWrap MacLineup_ProductSpecs_OuterWrap'>
        <div className="MacLineup_Desktop_ProductSpecs_Main MacLineup_ProductSpecs_Main">
            <div className="MacLineup_Desktop_ProductSpecs_Main_Spec1 MacLineup_ProductSpecs_Main_Spec1 ChangingContent">
                <span className="TypeOne">{value.Spec1.TypeOne}</span>
              { value.Spec1.FirstTypeTwo !== undefined ?  <span className="TypeTwo">{value.Spec1.FirstTypeTwo}</span> : <span style={{"display" : "none"}}></span>}
              { value.Spec1.SecondTypeTwo !== undefined ?  <span className="TypeTwo">{value.Spec1.SecondTypeTwo}</span> : <span style={{"display" : "none"}}></span>}
            </div>
            <div className="MacLineup_Laptop_ProductSpecs_Main_Spec2 MacLineup_ProductSpecs_Main_Spec2 Desktop ChangingContent">
                <div className="chipImages">
                    <img src={value.Spec2.ImagePath} alt="" />
                </div>
                <span className="TypeTwo">{value.Spec2.TypeTwo}</span>
            </div>
            <div className="MacLineup_Laptop_ProductSpecs_Main_Spec3 MacLineup_ProductSpecs_Main_Spec3 Desktop ChangingContent">
                <div className="AppleIntelligenceImage">
                    <img src={value.Spec3.ImagePath} alt="" />
                </div>
                <div className="TypeTwo">{value.Spec3.TypeTwo}</div>
            </div>
            <div className="MacLineup_Laptop_ProductSpecs_Main_Spec6 MacLineup_ProductSpecs_Main_Spec4 Desktop ChangingContent">
                <span className="TypeOne">-</span>
            </div>
            <div className="MacLineup_Laptop_ProductSpecs_Main_Spec4 MacLineup_ProductSpecs_Main_Spec5 Desktop ChangingContent">
                <span className="TypeTwo">{value.spec5.FirstTypeTwo}</span>
                <span className="TypeOne">{value.spec5.TypeOne}</span>
                <span className="TypeTwo">{value.spec5.SecondTypeTwo}</span>         
                <span className="TypeTwo">{value.spec5.ThirdTypeTwo}</span>         
            </div>
        </div>
    </div>
    )
})
  )
}

export default LineupBottom_Desktop
