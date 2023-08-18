import React from 'react'
import './OurProducts.css'
import items from './data.js'

function OurProducts() {
  return (
    <div className='back-layer'>
        <div className='products-container' >
            <div className='headline-container-pr'>
                <h1 className='headline'>НАША ПРОДУКЦІЯ</h1>
            </div>
            <div className='products-content'>
                {items.map( item => (
                    <div className='product' key={item.key}>
                        <div className='foto-product-container'>
                            <img src={item.src} alt='' className='foto-product'/>
                        </div>
                        <div className='content'>
                        <div className='h-container-pr'>
                            <h1 className='name-products'>{item.label}</h1>
                            <h1 className='price'>ЦІНА ДОГОВІРНА</h1>
                        </div>
                        <div className='t-container'>
                            <p className='text-p'>{item.text}</p>
                            <p className='contacts'> Контакти: Валентина Резнік+38 050 332 26 45, vp.reznik@upi-agro.com.ua</p>
                        </div>
                        </div>
                        <span className='line'></span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default OurProducts