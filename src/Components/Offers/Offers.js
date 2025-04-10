import React from 'react'
import './offer.css'
import {Link} from 'react-router-dom'

const Offers = () => {
  return (
    <div className='offerDiv'>
      <span>
      Get up to 12 months of No Cost EMI* plus up to ₹8000.00 instant cashback* on selected products with eligible cards.<Link className='offerLink' to="/offers">See Offers</Link>
      </span>
    </div>
  )
}

export default Offers
