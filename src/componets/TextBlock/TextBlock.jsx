import React from 'react'
import './TextBlock.css'
import Button from '../UI/Button/Button'
function TextBlock() {
  return (
    <div className='container'>
        <div className='text-headline-container'>
            <h1 className='text-headline'>КУКУРУДЗА</h1>
        </div>
        <div className='text-container'>
            <p className='text-block'>Щорічний експорт зернових культур 100 000 тонн.<br/>
             Для продовольчих, кормових цілей та на експорт</p>
        </div>
        <div className='text-block-button-container'>
            <Button>Купити зараз</Button>
        </div>
    </div>
  )
}

export default TextBlock