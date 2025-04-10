import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'


const LineupTop_Desktop = () => {
    let MacLineupLaptopImgPath = [] // added using loop
    for(let i = 0 ; i<=3 ; i++){MacLineupLaptopImgPath.push(`/MacLineup/Desktop/Img${i + 1}.png`)}

    let ProductNumber = [1,2,3,4];
    let StatusProduct = [undefined,undefined,"NEW",undefined]
    let ProcuctName = ['iMac','Mac mini','Mac Studio','Mac Pro'];
    let ChipSet = ['M4 chip','M4 or M4 Pro chip','M4 Max or M3 Ultra chip','M2 Ultra chip'];
    let DescSpanOne = ['A stunning all-in-one desktop for creativity','The mini-est, most affordable Mac with','Powerful performance and extensive','A pro workstation with PCIe expansion for'];
    let DescSpanTwo = ['and productivity.','mighty performance.','connectivity for pro workflows.','demanding workflows.'];
    let Price = ['From $999**','From $599**','From $1999.**','From $6999**']
    let ColorAvailabel = [['rgb(200, 216, 224)', 'rgb(227, 228, 229)', 'rgb(240, 228, 211)', 'rgb(46, 54, 66)'],['rgb(46, 44, 46)', 'rgb(227, 228, 229)'],['rgb(200, 216, 224)', 'rgb(227, 228, 229)', 'rgb(240, 228, 211)', 'rgb(46, 54, 66)'],['rgb(200, 216, 224)', 'rgb(227, 228, 229)', 'rgb(240, 228, 211)', 'rgb(46, 54, 66)']]

    useEffect(() =>{
        document.querySelectorAll('.MacLineup_Desktop_Product_Img').forEach((value,index) => {
            value.classList.add(`MacLineup_Desktop_Product_Img${index + 1}`);
        })
    },[])


  return (
            ProductNumber.map((value,index) => 
            {
    
                return(
                    <div key={index} className="MacLineUp_Desktop_Product_outerWrap MacLineup_Product_outerWrap">
                    <div className="MacLineup_Product_Main MacLineUp_Desktop_Product_Main">
                        <div className="MacLineUp_Desktop_Product_ImgageHolder MacLineUp_Product_ImgageHolder">
                            <img className='MacLineup_Desktop_Product_Img MacLineup_Product_Img ChangingContent' src={MacLineupLaptopImgPath[index]} alt="ProductImage"/>
                        </div>
                        <div className="MacLineup_Desktop_Product_ProductInfoHolder MacLineup_Product_ProductInfoHolder">
                            <ul className='MacLineUp_Laptop_ProductInfo_Color_List MacLineUp_ProductInfo_Color_List ChangingContent'>
                                {
                                    ColorAvailabel[index].map((value,index) => {
                                        return(<li key={index} className='ListItem_Product_Color_Options' style={{"backgroundColor" : value }}></li>)
                                    })
                                }
                            </ul>
                            {
                                StatusProduct[index] !== undefined ? (<span className='MacLineUp_Desktop_ProductInfo_NewlyAdded MacLineUp_ProductInfo_NewlyAdded ChangingContent'>{StatusProduct[index]}</span>) : (<span className='HiddenNewlyAdded'>Hidden</span>)
                            }
                            <span className='MacLineUp_Desktop_ProductInfo_ProductName MacLineUp_ProductInfo_ProductName ChangingContent'>
                                {ProcuctName[index]}
                            </span>
                            <span className='MacLineUp_Desktop_ProductInfo_ProductChipSet MacLineUp_ProductInfo_ProductChipSet ChangingContent'>
                                {ChipSet[index]}
                            </span>
                            <div className="MacLineup_Desktop_ProductInfo_ProductMiniDescription MacLineup_ProductInfo_ProductMiniDescription ChangingContent">
                                <span>{DescSpanOne[index]}</span>
                                <span>{DescSpanTwo[index]}</span>
                            </div>
                            <span className="MacLineup_Desktop_ProductInfo_ProductPrice MacLineup_ProductInfo_ProductPrice ChangingContent">
                                {Price[index]}
                            </span>
                            <div className="MacLineup_Desktop_ProductInfo_LearnMore_Buy MacLineup_ProductInfo_LearnMore_Buy ChangingContent">
                                <Link className='MacLineup_Desktop_ProductInfo_LearnMore_Buy__LearnMore MacLineup_ProductInfo_LearnMore_Buy__LearnMore'>
                                <span>Learn More</span>
                                </Link>
                                <Link className='MacLineup_Desktop_ProductInfo_LearnMore_Buy__LearnMore__Buy MacLineup_ProductInfo_LearnMore_Buy__LearnMore__Buy'>Buy &#8599;</Link>
                            </div>
                        </div>
                    </div>
                    </div> 
                )
    
            })
  )
}

export default LineupTop_Desktop
