import React, {useEffect, useState} from 'react'
import "./Header.css"
import Nav from "../Nav/Nav"
import axios from 'axios'

export default function Header(props) {
    const TextArray = ['souvlaki', 'pizza', 'kouzina']
    const [text, getText] = useState("")
    const [search, getSearch] = useState([])
    const [renderSearch, getRenderSearch] = useState(false)
    const [searchResult, getSearchResult] = useState("")

useEffect(()=>{
    let text = document.getElementById("text")
    for(let i=0; i<=0; i++){
        setInterval(()=>{
            if(i===0){
                text.style.color ='red'
                text.style.transform = "translateX(-100px)"
                
                    getText(TextArray[0])
            }
            if(i===1){
  
                text.style.color ='blue'
                text.style.transform = "translateY(-100px)"
  
                    getText(TextArray[1])
              
            }
            if(i===2){
   
                text.style.color ='pink'
   
                    getText(TextArray[2])
           
            }   
            if(i===3){
                i=0
            }
            i++
        }, 2000)
        
    }
}, [])

function onSearchSubmit(e){
    e.preventDefault()
    axios.get(`http://localhost:5000/api/index/companiesbylocation?location=${searchResult}`)
    .then(res=>{
        console.log(res.data.data)
        window.location.href=`http://localhost:3000/shops?location=${searchResult}`
    })
    .catch(err=>{
        console.log(err)
    })
}


    return (
        <div className='header'>
            <Nav />
            <div className='header__container'>
                <div className='header__leftSide'>
                    <div className='header__textContainer'>
                        <h2 className='header__h2'>Παράγγειλε <span className='text' id='text'>{text}</span> Delivery <br></br> online σε 1' </h2>
                        <h5 className='header__h5'>15.000 καταστήματα, 90 πόλεις. Πλήρωσε με κάρτα, μετρητά ή PayPal </h5>
                    <form onSubmit={onSearchSubmit}>
                       <div className='header__inputTextContainer'>
                           <div className='header__inputText'>
                           <input autocomplete="off" id='inputText' onChange={(e)=>{
                               
                                axios.get(`http://localhost:5000/api/index/search/`+e.target.value)
                                .then(res=>{
                                    console.log(res.data.search)
                                    getSearch(res.data.search)
                                    getRenderSearch(true)
                                    
                                })
                                .catch(err=>{
                                    console.log(err)
                                    getRenderSearch(false)
                                })
                               
                           }} className='header__input' type='text' placeholder='Βάλε τη διεύθυνσή σου'></input>
                           </div>
                           {console.log(search.status)}
                           {renderSearch!==false? 
                           <>
                           <div className='search'>
                               {search.map((items)=>{
                                   return(<div className='search__container'>
                                       <p id='search__p' className='search__p' onClick={(e)=>{
                                        let inputText = document.getElementById("inputText").value=items.name
                                        let search__p = document.getElementById("search__p")
                                        getSearchResult(search__p.textContent)
                                        getRenderSearch(false)
                                       }}>{items.name}</p>
                                   </div>)
                               })}
                           </div>
                           </> 
                           : 
                           <></>}
                            <div className='header__inputButton'>
                                <button type='submit' className='header__inputBtn'>Παράγγειλε τώρα</button>
                            </div>
                            <span className='header__span'>π.χ. Διονύσου 48, Μαρούσι</span>
                       </div>
                       </form>
                    </div>
                </div>
                <div className='header__rightSide'>

                </div>
            </div>
        </div>
    )
}
