import React from 'react'

const LineupBottom_Laptop = () => {
    let ProductData = [
        {
            Spec1 : {TypeOne : '13.6” or 15.3”' , FirstTypeTwo : 'Liquid Retina display with 500 nits of brightness' , SecondTypeTwo : 'and support for 1 billion colors' , ThirdTwoTwo : undefined },
            Spec2 : {ImagePath : '/MacLineup/Laptop/Chips/Img1.png' , TypeTwo : 'Apple M4 chip'},
            Spec3 : {ImagePath : '/MacLineup/Laptop/Chips/AppleIntelligence.png',TypeTwo : "Apple Intelligence"},
            Spec4 : {FirstTypeTwo : 'Up to' , TypeOne : '18 hours',SecondTypeTwo : 'battery life'},
            Spec5 : {TypeOne : '4 ports',FirstTypeTwo : '2x Thunderbolt 4 (USB‑C),',SecondTypeTwo : 'headphone jack, MagSafe',ThirdTypeTwo : undefined},
            Spec6 : {TypeOne : '2.7 lb. or 3.3 lb.',TypeTwo : 'Weight'}
        },
        {
            Spec1 : {TypeOne : '14.2” or 16.2”' , FirstTypeTwo : 'Liquid Retina XDR display with up to 1600' , SecondTypeTwo : 'nits peak brightness, 1,000,000:1 contrast' , ThirdTwoTwo : 'ratio, and up to 120Hz refresh rates' },
            Spec2 : {ImagePath : '/MacLineup/Laptop/Chips/Img2.png' , TypeTwo : 'Apple M4, M4 Pro, or M4 Max chip'},
            Spec3 : {ImagePath : '/MacLineup/Laptop/Chips/AppleIntelligence.png',TypeTwo : "Apple Intelligence"},
            Spec4 : {FirstTypeTwo : 'Up to' , TypeOne : '24 hours',SecondTypeTwo : 'battery life'},
            Spec5 : {TypeOne : '7 ports',FirstTypeTwo : '3x Thunderbolt 4 (USB‑C),',SecondTypeTwo : '3x Thunderbolt 5 (USB‑C), HDMI, SDXC,' , ThirdTypeTwo : 'headphone jack, MagSafe'},
            Spec6 : {TypeOne : '3.4 lb. or 4.7 lb.',TypeTwo : 'Weight'}
        }
    ]
  return (
        
            ProductData.map((value,index) => {
                return (
                    <div key={index} className='MacLineup_Laptop_ProductSpecs_OuterWrap MacLineup_ProductSpecs_OuterWrap'>
                    <div className="MacLineup_Laptop_ProductSpecs_Main MacLineup_ProductSpecs_Main">
                        <div className="MacLineup_Laptop_ProductSpecs_Main_Spec1 MacLineup_ProductSpecs_Main_Spec1 ChangingContent">
                            <span className="TypeOne">{value.Spec1.TypeOne}</span>
                            <span className="TypeTwo">{value.Spec1.FirstTypeTwo}</span>
                            <span className="TypeTwo">{value.Spec1.SecondTypeTwo}</span>
                            {value.Spec1.ThirdTwoTwo !== undefined ? <span className="TypeTwo">{value.Spec1.ThirdTwoTwo}</span> : <span className="TypeTwo HiddenNewlyAdded">Hidden</span>}
                        </div>
                        <div className="MacLineup_Laptop_ProductSpecs_Main_Spec2 MacLineup_ProductSpecs_Main_Spec2 ChangingContent">
                            <div className="chipImages">
                                <img src={value.Spec2.ImagePath} alt="" />
                            </div>
                            <span className="TypeTwo">{value.Spec2.TypeTwo}</span>
                        </div>
                        <div className="MacLineup_Laptop_ProductSpecs_Main_Spec3 MacLineup_ProductSpecs_Main_Spec3 ChangingContent">
                            <div className="AppleIntelligenceImage">
                                <img src={value.Spec3.ImagePath} alt="" />
                            </div>
                            <div className="TypeTwo">{value.Spec3.TypeTwo}</div>
                        </div>
                        <div className="MacLineup_Laptop_ProductSpecs_Main_Spec4 MacLineup_ProductSpecs_Main_Spec4 ChangingContent">
                            <span className="TypeTwo">{value.Spec4.FirstTypeTwo}</span>
                            <span className="TypeOne">{value.Spec4.TypeOne}</span>
                            <span className="TypeTwo">{value.Spec4.SecondTypeTwo}</span>         
                        </div>
                        <div className="MacLineup_Laptop_ProductSpecs_Main_Spec5 MacLineup_ProductSpecs_Main_Spec5 ChangingContent">
                            <span className="TypeOne">{value.Spec5.TypeOne}</span>
                            <span className="TypeTwo">{value.Spec5.FirstTypeTwo}</span>
                            <span className="TypeTwo">{value.Spec5.SecondTypeTwo}</span>
                            {value.Spec5.ThirdTypeTwo !== undefined ? <span className="TypeTwo">{value.Spec5.ThirdTypeTwo}</span> : <span className="TypeTwo HiddenNewlyAdded">Hidden</span>}
                        </div>
                        <div className="MacLineup_Laptop_ProductSpecs_Main_Spec6 MacLineup_ProductSpecs_Main_Spec6 ChangingContent">
                            <span className="TypeOne">{value.Spec6.TypeOne}</span>
                            <span className="TypeTwo">{value.Spec6.TypeTwo}</span>
                        </div>
            
                    </div>
                </div>
                )
            })
        
  )
}

export default LineupBottom_Laptop
