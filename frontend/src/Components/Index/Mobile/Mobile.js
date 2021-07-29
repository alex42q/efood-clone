import React, {useEffect, useState} from 'react'
import "./Mobile.css"

export default function Mobile() {
    return (
        <div className='mobile'>
            <div className='mobile__container'>
                <div className='mobile__row'>
                    <div className='mobile__column1'>
                        <div className='mobile__topText'>
                            <h3 className='mobile__h3'>Κατέβασε το App </h3>
                        </div>
                        <div className='mobile__middleText'>
                            <h3 className='mobile__h32'> Παράγγειλε τώρα από το κινητό σου (iOS ή Android) με <br></br> τρία απλά βήματα: προσθήκη, καλάθι, αποστολή. </h3>
                        </div>
                        <div className='mobile__photos'>
                            <div className='mobile__photo'>
                                <img src="https://www.e-food.gr/cdn-cgi/image/w=130,fit=cover,q=100,f=auto/site-assets/img/howitworks/app-store-icon.png"></img>
                            </div>
                            <div className='mobile__photo'>
                                <img src="https://www.e-food.gr/cdn-cgi/image/w=130,fit=cover,q=100,f=auto/site-assets/img/howitworks/play-store-icon.png"></img>
                            </div>
                            <div className='mobile__photo'>
                                <img src="https://www.e-food.gr/cdn-cgi/image/w=130,fit=cover,q=100,f=auto/site-assets/img/howitworks/huawei-appGallery.png"></img>
                            </div>
                        </div>
                    </div>
                    <div className='mobile__column'>
                        <div className='mobile__bigImage'>
                            <img src="https://www.e-food.gr/cdn-cgi/image/w=668,f=auto,q=100/site-assets/img/banners/efood-mobileapps-20210618.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
