import React, { useEffect } from 'react'
import './MCLUPLP.css'
import { Link } from 'react-router-dom'
import LineupTop_Laptop from './LineupTop_Laptop'
import LineupBottom_Laptop from './LineupBottom_Laptop'



const MacLineupLaptop = () => {

    let widthOfTop = [];

    useEffect(() => {

        document.querySelectorAll('.MacLineup_Product_Main').forEach((value) => {
          const computedWidth = window.getComputedStyle(value).width;
          widthOfTop.push(computedWidth);
        });

    },[])


    useEffect(() => {
        document.querySelectorAll('.MacLineup_Laptop_ProductSpecs_Main').forEach((value,index) => {
            value.style.width = widthOfTop[index]
        })
    },[])

  return (
    <div className="MacLineupwrap Laptop">
    <div className='MacLineUp_Laptop MacLineup'>
        <div className="MacLineUp_Laptop_top_wrap MacLineupTopWrap"> 
           <LineupTop_Laptop/>
        </div>
        <div className="LineUpseperator ChangingContent"></div>
        <div className="MacLineUp_Laptop_bottom_wrap MacLineUp_bottom_wrap">
            <LineupBottom_Laptop/>
        </div>

    </div>
    </div>
  )
}

export default MacLineupLaptop
