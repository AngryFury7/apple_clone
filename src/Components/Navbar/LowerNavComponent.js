import React from 'react'
import { Link } from 'react-router-dom'
import {DivOneBottoms,DivOneMains,DivOneTopTitle,DivthreeMains,DivThreeTitle,DivTwoMains,DivTwoTitle} from './Navbar.js'

const LowerNavComponent = (prop) => {
  return (
    <div className={prop.MainClass}>

<   div className="BelowNavBlocks">
  <span className='BlockOneTitle'>{DivOneTopTitle[prop.indexMain]}</span>
  <div className='BlockOneMain'>
    <>
    {
      DivOneMains[prop.indexMain].map((value,index) => {
        return <Link className='FirstClassSpans' key={index+100+prop.indexMain}>{value}</Link>
      })
    }
    </>
  </div>

  <div className='BlockOneLower'>
    {
        DivOneBottoms[prop.indexMain].map((value,index) => {
            if(value === undefined){return}

            return <Link className='FirstClassSpans' key={index+200+prop.indexMain}>{value}</Link>
        })
    }
  </div>
</div>

<div className="BelowNavBlocks">
<span className='BlockTwoTitle'>{DivTwoTitle[prop.indexMain]}</span>
<div className="BlockTwoMain">
{
    DivTwoMains[prop.indexMain].map((value,index) => {
      return <Link className='SecondClassSpans' key={index+300+prop.indexMain}>{value}</Link>
    })
}
</div>
</div>
<div className="BelowNavBlocks">
<span className='BlockThreeTitle'>{DivThreeTitle[prop.indexMain]}</span>
<div className="BlockThreeMain">
{
    DivthreeMains[prop.indexMain].map((value,index) => {
        if(value === undefined){return}
      return <Link className='ThirdClassSpans' key={index+400+prop.indexMain}>{value}</Link>
    })
}
</div>
</div>

</div>
      
  )
}

export default LowerNavComponent
