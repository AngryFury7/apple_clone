import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const LineupTop_Laptop = () => {

    let MacLineupLaptopImgPath = [] // added using loop
    for(let i = 0 ; i<=1 ; i++){MacLineupLaptopImgPath.push(`MacLineup/Laptop/Img${i+1}.png`)}

    let ProductNumber = [1,2];
    let StatusProduct = ["NEW",undefined]
    let ProcuctName = ['MacBook Air 13” and 15”','MacBook Pro 14” and 16”'];
    let ChipSet = ['M4 chip','M4, M4 Pro, or M4 Max chip'];
    let DescSpanOne = ['Strikingly thin and fast so you can','The most advanced Mac laptops'];
    let DescSpanTwo = ['work, play, or create anywhere.','for demanding workflows.'];
    let Price = ['From $999 or $83.25/mo. for 12 mo.**','From $1599 or $133.25/mo. for 12 mo.**']
    let ColorAvailabel = [['rgb(200, 216, 224)', 'rgb(227, 228, 229)', 'rgb(240, 228, 211)', 'rgb(46, 54, 66)'],['rgb(46, 44, 46)', 'rgb(227, 228, 229)']]

    //or one can use the objectmodel like this one 
    /*
    let ProductData = [
    {
    productID :"ljkj-kj2121-kjk221-fg32-89",
    productName : "iPhone 16pro",
    "chipset" : "kdfkdk"
    },] and then map this 
    */

    useEffect(() =>{
        document.querySelectorAll('.MacLineup_Laptop_Product_Img').forEach((value,index) => {
            value.classList.add(`MacLineup_Laptop_Product_Img${index+1}`);
        })
    },[])

  return (
    
        ProductNumber.map((value,index) => 
        {

            return(
                <div key={index} className="MacLineUp_Laptop_Product_outerWrap MacLineup_Product_outerWrap">
                <div className="MacLineup_Product_Main MacLineUp_Laptop_Product_Main">
                    <div className="MacLineUp_Laptop_Product_ImgageHolder MacLineUp_Product_ImgageHolder">
                        <img className='MacLineup_Laptop_Product_Img MacLineup_Product_Img ChangingContent' src={MacLineupLaptopImgPath[index]} alt="ProductImage"/>
                    </div>
                    <div className="MacLineup_Laptop_Product_ProductInfoHolder MacLineup_Product_ProductInfoHolder">
                        <ul className='MacLineUp_Laptop_ProductInfo_Color_List MacLineUp_ProductInfo_Color_List'>
                            {
                                ColorAvailabel[index].map((value,index) => {
                                    return(<li key={index} className='ListItem_Product_Color_Options ChangingContent' style={{"backgroundColor" : value }}></li>)
                                })
                            }
                        </ul>
                        {
                            StatusProduct[index] !== undefined ? (<span className='MacLineUp_Laptop_ProductInfo_NewlyAdded MacLineUp_ProductInfo_NewlyAdded ChangingContent'>{StatusProduct[index]}</span>) : (<span className='HiddenNewlyAdded'>Hidden</span>)
                        }
                        <span className='MacLineUp_Laptop_ProductInfo_ProductName MacLineUp_ProductInfo_ProductName ChangingContent'>
                            {ProcuctName[index]}
                        </span>
                        <span className='MacLineUp_Laptop_ProductInfo_ProductChipSet MacLineUp_ProductInfo_ProductChipSet ChangingContent'>
                            {ChipSet[index]}
                        </span>
                        <div className="MacLineup_Laptop_ProductInfo_ProductMiniDescription MacLineup_ProductInfo_ProductMiniDescription ChangingContent">
                            <span>{DescSpanOne[index]}</span>
                            <span>{DescSpanTwo[index]}</span>
                        </div>
                        <span className="MacLineup_Laptop_ProductInfo_ProductPrice MacLineup_ProductInfo_ProductPrice ChangingContent">
                            {Price[index]}
                        </span>
                        <div className="MacLineup_Laptop_ProductInfo_LearnMore_Buy MacLineup_ProductInfo_LearnMore_Buy ChangingContent">
                            <Link className='MacLineup_Laptop_ProductInfo_LearnMore_Buy__LearnMore MacLineup_ProductInfo_LearnMore_Buy__LearnMore'>
                            <span>Learn More</span>
                            </Link>
                            <Link className='MacLineup_Laptop_ProductInfo_LearnMore_Buy__LearnMore__Buy MacLineup_ProductInfo_LearnMore_Buy__LearnMore__Buy'>Buy &#8599;</Link>
                        </div>
                    </div>
                </div>
                </div> 
            )

        })
    
  )
}

export default LineupTop_Laptop
