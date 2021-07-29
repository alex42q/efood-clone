import React,{useEffect, useState} from 'react'
import axios from "axios"
import "./Shops.css"
import Nav from "../Index/Nav/Nav"

export default function Shos(props) {
    const [shops, getShops] = useState([])
    const [fiveShops, getFiveShops] = useState([])
    const [allCategories, getAllCategories] = useState([])

    useEffect(()=>{
        console.log(window.location)
        axios.get(`http://localhost:5000/api/index/companiesbylocation${props.location.search}`)
        .then(res=>{
            console.log(res.data.data)
            getShops(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/index/shops/companies`)
        .then(res=>{
            console.log(res.data.data)
            getFiveShops(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/index/shops/categories`)
        .then(res=>{
            getAllCategories(res.data.data)
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    return (
        <div className='shops'>
            {/* <div className='shops__nav'>
                <div className='shops__navContainer'>
                    <div className='shops__navLeftSide'>
                        <img src=""></img>
                    </div>
                    <div className='shops__navRightSide'>

                    </div>
                </div>
            </div> */}
        <div className='nav'>
            <div className='nav__container'>
                <div className='nav__logoSide'>
                    <img src="https://www.e-food.gr/site-assets/img/efood/logo_white.svg"></img>
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
            <div className='shops__header'>
                <div className='shops__headerText'>
                    {shops.length===1 ? <><h2>Βρήκαμε {shops.length} καταστήμα</h2></> : <><h2>Βρήκαμε {shops.length} καταστήματα</h2></>}
                    
                </div>
            </div>

            <div className='shops__container'>
                <div className='shops__leftSide'>
                    <div className='shops__shops'>
                        <div className='shops__headerText'>
                            <h6 className='shops__h6'>Καταστήματα</h6>
                        </div>
                        <div className='shops__shopsContainer'>
                            {fiveShops.map((items)=>{
                                return(<div className='shops__shopsRow'>
                                   
                                        <div className='shops__shopsColumn'>
                                            <img className='shops__shopsImage' src={items.logo}></img>
                                        </div>
                                        <div className='shops__shopsColumn'>
                                            <span className='shops__shopsSpan'>{items.companyName}</span>
                                        </div>
                                </div>)
                            })}
                        </div>
                    </div>
                    <div className='shops__shops2'>
                        <div className='shops__headerTextCategories'>
                            <h6 className='shops__h6'>Κουζίνες</h6>
                        </div>
                        <div className='shops__shopsContainer'>
                            {allCategories.map((items)=>{
                                return(<div className='shops__shopsRow'>
                                        <div className='shops__shopsColumn'>
                                            <input type='checkbox'></input>
                                        </div>
                                        <div className='shops__shopsColumn'>
                                            <label>{items.title}</label>
                                        </div>
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
                <div className='shops__rightSide'>
                <div className='shops__searchContainer'>
                <div className='shops__input'>
                <input className='shops__searchInput' type='text' name='search' placeholder='Αναζήτησε καταστήματα ή προϊόντα'></input>
                </div>
                <div className='shops__inputIcon'>
                <i className="fas fa-search searchIcon"></i>
                </div>
               
            </div>
                {shops.map((items)=>{
                    return(<div className='shops__row' key={items._id}>
                    <a className='shops__link' href={`/shop/${items.slug}`}>
                        <div className='shops__rowContainer'>
                        <div className='shops__shopsIcon'><img className='shops__shopsIconImage' src={items.logo}></img></div>
                            <div className='shops__rowLeftSide'>
                                <img src={items.companyImage}></img>
                            </div>
                            <div className='shops__rowRightSide'>
                                <div className='shops__rowRightTexts'>
                                    <h3 className="shops__h3">{items.companyName}</h3>
                                    <span className='shops__span'>{items.category} - 
                                        30'
                                    · Ελάχιστη 5€
                                    </span>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>)
                })}
                </div>
            </div>
        </div>
    )
}
