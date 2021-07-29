import React from 'react'
import "./Nav.css"

export default function Nav() {
    return (
        <div className='nav'>
            <div className='nav__container'>
                <div className='nav__logoSide'>
                    <img src="https://www.e-food.gr/site-assets/img/efood/logo.svg"></img>
                </div>
                <div className='nav__rightSide'>
                    <ul className='nav__rightSideUl'>
                        <li className='nav__li'><a className='nav__link'>Πώς λειτουργεί</a></li>
                        <li className='nav__li'><a className='nav__link'>GR</a></li>
                        <li className='nav__li'><a className='nav__link'><span className='nav__span'>Σύνδεση/Εγγραφή</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
