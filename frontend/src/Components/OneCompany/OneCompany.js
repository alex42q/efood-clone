import React, {useEffect, useState} from 'react'
import "./OneCompany.css"
import axios from "axios"
import Mobile from "../Index/Mobile/Mobile"
import Footer from "../Index/Footer/Footer"

export default function OneCompany(props) {
    const [oneCompany, getOneCompany] = useState([])
    const [oneCompanyCategories, getOneCompanyCategories] = useState([])
    const [oneCompanyProducts, getOneCompanyProducts] = useState([])
    const [showProducts, getShowProducts] = useState([])
    const [products, getProducts] = useState([])
    const [categories, getCategories] = useState([])
    const [oneProduct, getOneProduct] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/index/company/${props.match.params.companyname}`)
        .then(res=>{
            getOneCompany(res.data.data)
            getOneCompanyCategories(res.data.data.productCategories)
            for(let u of res.data.data.productCategories){  
             
                getCategories(u.products)
            }
          
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/index/company/${props.match.params.companyname}`)
        .then(res=>{
  
            for(let showProducts of res.data.data.productCategories){
                getOneCompanyProducts(showProducts.products)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])


    useEffect(()=>{
        axios.post(`http://localhost:5000/api/index/productsbycategory/${props.match.params.companyname}`)
        .then(res=>{
            console.log(res.data.data)
            getProducts(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })

            }
     

    , [])
    return (
        <div className='oneCompany'>
        <div className='oneCompany__wrapper'>
            <div className='oneCompany__header' style={{backgroundImage:`url(${oneCompany.coverImage})`, width:"100%", height:"45vh", backgroundSize:"cover", objectFit:"cover", backgroundPosition:"center"}} className='oneCompanyHeader'>
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
        <div className='oneCompanyStampaContainer'>
            <div className='oneCompanyRow'>
                <div className='oneCompanyColumn'>
                    <img src={oneCompany.logo}></img>
                </div>
                <div className='oneCompanyColumn'>
                    <div className='oneCompany__topText'>
                        <h1 className='oneCompany__h1'>{oneCompany.companyName}</h1>
                    </div>
                    <div className='oneCompany__ratingAndCategory'>
                    <span className='oneCompany__span'>
                    <i className="fas fa-star oneCompanyStar"></i>
                    <span className='oneCompany__span'>4.0</span>
                    <span className='oneCompany__span'>(3801)</span>
                    <span className='oneCompany__span'>{oneCompany.category}</span>
                    </span>
                    
                    </div>
                    <div className='oneCompany__elaxisti'>
                    <span className='oneCompany__span'>
                    <span className='oneCompany__span'>30'</span>
                    <span className='oneCompany__span'>· Ελάχιστη </span>
                    <span className='oneCompany__span'> 4,9€ </span>
                    </span>
                    </div>
                    <div className='oneCompany__prosfora'>
                        <span className='oneCompany__prosforaSpan'>1+1 Προσφορά</span>
                    </div>
                </div>
            </div>
        </div>
            </div>
            <div className='oneCompany__bottomNav'>
                <div className='oneCompany__bottomNavContainer'>
                    <ul className='oneCompany__ul'>
                        <li className='oneCompany__li'><a className='oneCompany__link'>Μενού</a></li>
                        <li className='oneCompany__li'><a className='oneCompany__link'>Πληροφορίες</a></li>
                        <li className='oneCompany__li'><a className='oneCompany__link'>Αξιολογήσεις (3801)</a></li>
                        <li className='oneCompany__li'><a className='oneCompany__link'>Οι παραγγελίες μου</a></li>
                    </ul>
                </div>
            </div>
            <div className='oneCompany__bottomSide'>
                <div className='oneCompany__bottomSideContainer'>
                    <div className='oneCompany__bottomSideRow'>
                        <div className='oneCompany__bottomSideColumn1'>
                            <div className='oneCompany__bottomSideText'>
                                <h5 className='oneCompany__bottomSideH5'>Κατηγορίες</h5>
                            </div>
                            {oneCompanyCategories.map((items)=>{
                                return(<div className='oneCompany__linkSide'>
                                    <a className='oneCompany__bottomSideLink'>{items.title}</a>
                                </div>)
                            })}
                            

                           
                        </div>
                        <div className='oneCompany__bottomSideColumn'>
                        <div className='shops__searchContainer'>
                <div className='shops__input'>
                <input className='shops__searchInput2' type='text' name='search' placeholder='Αναζήτησε καταστήματα ή προϊόντα'></input>
                </div>
                <div className='shops__inputIcon'>
                <i className="fas fa-search searchIcon"></i>
                </div>
                </div>
                <div className='productsSideContainer'>
                    {products.map((items2)=>{
                            return(<div className='products'>
                                <div className='products__container'>
                                    <div className='products__topText'>
                                        <h3 className='products__span'>{items2.title}</h3>
                                        <hr className='products__hr'></hr>
                                    </div>
                                    <div className='products__middleTexts'>
                                    {items2.products.map((items)=>{
                                        console.log(items.lenght)
                                        return(<div onClick={(e)=>{
                                            axios.get(`http://localhost:5000/api/index/product/${items._id}`)
                                            .then(res=>{
                                                console.log(res.data.data)
                                                getOneProduct(res.data.data)
                                                let modal = document.getElementById("modal")
                                                let modal__main = document.getElementById("modal__main")
                                                modal.classList.add("modal__after")
                                                modal__main.classList.add("modal__mainAfter")
                                            })
                                            .catch(err=>{
                                                console.log(err)
                                            })
                                        }} className='productsMiddleContainer'>
                                            
                                            <div className='products__leftSide'>
                                            <p className='products__pTitle'>{items.title}</p>
                                            <p className='products__pDescription'>{items.description}</p>
                                            <p className='products__pPrice'>Από {items.price}</p>
                                            </div>
                                            <div className='products__rightSide'>
                                                <div className='products__image'>
                                                    {items.image!==undefined ? <><img src={items.image} className='products__img'></img></> : <></>}
                                                   
                                                </div>
                                            </div>
                                            
                                            </div>)
                                        })}
                                    </div>
                                </div>
                                

                                </div>)
                            })}
                        </div>
                        


                        </div>
                        <div className='oneCompany__bottomSideColumn3'>
           
                                <div className='oneCompany__sideContainer'>
                                <div className='oneCompany__TopTextBottom'>
                                        <span className='oneCompany__kalathi'>Το καλάθι σου</span>
                                    </div>
                                    <div className='oneCompany__middleTextBottom'>
                                        <div className='oneCompany__middleTextBottomLeftSide'>
                                            <div className='oneCompany__iconBottom'>
                                            <i className="fas fa-map-marker-alt locationIcon"></i>
                                            </div>
                                            <div className='oneCompany__textBottomtext'>
                                                <span className='addressSpan'>Αθηνάς 55, Αθήνα</span>
                                            </div>
                                        </div>
                                        <div className='oneCompany__middleTextBottomRightSide'>
                                            <span className='oneCompany__allagi'>Αλλαγή</span>
                                        </div>
                                    </div>
                                    <div className='oneCompany__textDelivery'>
                                        <div className='delivery__leftSide'>
                                            <span>Delivery</span>
                                        </div>
                                        <div className='delivery__rightSide'>
                                        <i className="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                    <div className='oneCompany__middleImage'>
                                        <img src="https://www.e-food.gr/site-assets/img/icons/basket.png"></img>
                                    </div>
                                    <div className='oneCompany__bottomImageTextSide'>
                                        <p>Γέμισε το καλάθι σου με τα <br></br> προϊόντα που βρίσκονται<br></br> αριστερά</p>
                                    </div>
                                    <div className='oneCompany__bottomButtonSide'>
                                        <button className='oneCompany__bottomBtnSide'>Συνέχεια</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                    {/* MODAL */}
                    <div id='modal__main' className='modal'>
                            <div className='modal__container'>
                                {oneProduct!==undefined ? 
                                <>
                                <div id='modal' className='modal__containerSide'>
                                    <div className='modal__closeButton'>
                                    <i onClick={(e)=>{
                                        let modal = document.getElementById("modal")
                                        let modal__main = document.getElementById("modal__main")
                                        modal.classList.remove("modal__after")
                                        modal__main.classList.remove("modal__mainAfter")
                                    }} id="close" className="fas fa-times closeBtn"></i>
                                    </div>
                                    <div className='modal__imageSide'>
                                    <img className='modal__topImg' src={oneProduct.image}></img>
                                    </div>
                                    <div className='modal__bottomTexts'>
                                    <div className='modal__title'>
                                        <span className='modal__span'>{oneProduct.title}</span>
                                    </div>
                                    <div className='modal__description'>
                                        <p className='modal__desc'>{oneProduct.description}</p>
                                    </div>
                                    <div className='modal__price'>
                                        <p className='modal__price'>{oneProduct.price}</p>
                                    </div>
                                    <div className='modal__button'>
                                        <button className='modal__btn'>Προσθήκη στο καλάθι</button>
                                    </div>
                                </div>
                                </div>

                                </> 
                                : 
                                <></>}
                            </div>
                        </div>

                        {/* MODAL */}
            </div>
            <div className='oneCompany__mobileSide'>
                <Mobile />
            </div>
            <div className='oneCompany__footerSide'>
                <Footer />
            </div>
            </div>
        </div>
    )
}
