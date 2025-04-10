import React,{useEffect} from 'react'
import LineupBottom_Desktop from './LineupBottom_Desktop.js'
import LineupTop_Desktop from './LineupTop_Desktop.js'
import './MCLUPDKTPS.css'

const MacLineupDesktop = () => {
  
      let widthOfTop = [];
  
      useEffect(() => {
  
          document.querySelectorAll('.MacLineup_Product_Main').forEach((value) => {
            const computedWidth = window.getComputedStyle(value).width;
            widthOfTop.push(computedWidth);
          });
  
      },[])
  
  
      useEffect(() => {
          document.querySelectorAll('.MacLineup_Desktop_ProductSpecs_Main').forEach((value,index) => {
              value.style.width = widthOfTop[index]
          })
      },[])


  return (
    <div className="MacLineupwrap Desktop">
    <div className='MacLineUp_Desktop MacLineup'>
        <div className="MacLineUp_Desktop_top_wrap MacLineupTopWrap"> 
           <LineupTop_Desktop/>
        </div>
        <div className="LineUpseperator"></div>
        <div className="MacLineUp_Desktop_bottom_wrap MacLineUp_bottom_wrap">
            <LineupBottom_Desktop/>
        </div>
    </div>
    </div>
  )
}

export default MacLineupDesktop
