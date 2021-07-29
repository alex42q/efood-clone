import React, {useEffect, useState} from 'react'
import axios from "axios"
import "./Prosfores.css"

export default function Prosfores() {
    const [indexCompanies, getIndexCompanies] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/index/companies`)
        .then(res=>{
            getIndexCompanies(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    return (
        <div className='prosfores'>
            <div className='prosfores__container'>
            <div className='prosfores__text'>
                        <h2 className='prosfores__h2'><span className='prosfores__span'>20.000</span> προσφορές μόνο για εσένα </h2>
                    </div>
                <div className='prosfores__row'>
                    {indexCompanies.map((items)=>{
                        return(<div className='prosfores__column' key={items._id}>
                            <div className='prosfores__image'>
                                <img src={items.companyImage}></img>
                            </div>
                            <div className='prosfores__columnText'>
                                <h3 className='prosfores__h3'>{items.companyName}</h3>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}
