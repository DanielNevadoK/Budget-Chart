import React from 'react'
import BalanceDisplay from './BalanceDisplay'
import DataDisplay from './DataDisplay'

const CardContainer = () => {
  return (
    <div className='card-cont'>
      <BalanceDisplay />
      <DataDisplay />
    </div>
  )
}

export default CardContainer
