import React from 'react'
import './Header.css'

const items = [
    {
        type: 'image',
        key: 'image',
        src: '../image/logo.svg',
    },
    {
        key: 'home',
        label:'Головна',
    },
    {
        key: 'about',
        label:'Про нас',
    },
    {
        key: 'poroducts',
        label:'Продукти',
    }
    ,
    {
        key: 'comment',
        label:'Відгуки',
    },
    {
        key: 'feedback',
        label:'Зв`язатися з нами',
    }
]

function Header() {
  return (
    
        <ul className='menu'>
            {items.map( item => (
                <li key={item.key} className={item.type === 'image' ? 'menu-image' : 'menu-item'}>
                    {item.type === 'image' ? (
                        <img src={item.src} alt=''/>
                    ) : (
                        <span>{item.label}</span>
                    )}
                </li>

            ))}
        </ul>
    
  )
}

export default Header