import React from 'react'
import './AboutUs.css'
import Button from '../UI/Button/Button'
function AboutUs() {
  return (
    <div className='back-layer'>
        <div className='aboutus-container'>
            <div className='headline-container-at'>
                <h1 className='headline'>ПРО НАС</h1>
            </div>
            <div className='text-container-at'>
                <p className='text-at'> На базах господарств вирощуються профільні овочеві та<br/>
                зернобобові культури, які постачаються на власні консервні заводи<br/>
                для переробки, та біржові культури. Використання власної сировини<br/>
                є однією із умов, що гарантує високу якість та безпечність овочевої<br/>
                консервації.
                </p>
                <p className='text-at'>Починаючи з етапу підбору насіння, ми приділяємо значну увагу<br/>
                біологічним характеристиками сортів, завдяки чому отримуємо<br/>
                сировину з високими смаковими показниками. Чітке дотримання<br/>
                технології вирощування без застосування стимуляторів росту,<br/>
                відповідальність при зборі урожаю та максимально короткий час<br/>
                транспортування дають можливість зберегти свіжість та якість<br/>
                агропродукції.
                </p>
            </div>
            <div className='button-container-at'>
                <Button small>Читати далі &#10230;</Button>
            </div>
        </div>
        <div className='foto-container'>
                <img className='foto-harvester' src='../image/harvester.png' alt=''/>
        </div>
    </div>
  )
}

export default AboutUs