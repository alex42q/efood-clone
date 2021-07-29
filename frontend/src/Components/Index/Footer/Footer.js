import React from 'react'
import "./Footer.css"

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer__logoImage'>
                    <img src="https://www.e-food.gr/site-assets/img/efood/logo.svg"></img>
                </div>
            <div className='footer__container'>

                <div className='footer__row'>
                    <div className='footer__column'>
                        <div className='footer__par'>
                            <p className='footer__p'>

                    Δουλεύεις και θες καφέ; Σπίτι μεσημέρι και ποιος μαγειρεύει;<br></br> Είναι Σαββατοκύριακο και δε θες να σηκωθείς από το κρεβάτι αλλά το ψυγείο είναι άδειο <br></br> γιατί δεν πήγες supermarket. Έρχεται η παρέα και χρειάζεσαι μια κάβα ΤΩΡΑ! <br></br> Γι' αυτό υπάρχει το efood. Ό,τι θέλεις, όποτε το θέλεις - το'χουμε!<br></br>  Παράγγειλε επιλέγοντας ανάμεσα σε 15.000 καταστήματα και 90 πόλεις! <br></br> Αφού το ξέρεις - το efood είναι το delivery στην Ελλάδα!                
                            </p>
                        </div>
                    </div>
                    <div className='footer__column'>
                        <ul className='footer__ul'>
                            <li className='footer__li'>Ποιοί είμαστε</li>
                            <li className='footer__li'>Πώς λειτουργεί</li>
                            <li className='footer__li'>FAQs</li>
                            <li className='footer__li'>Blog</li>
                            <li className='footer__li'>Επικοινωνία</li>
                        </ul>
                    </div>
                    <div className='footer__column'>
                    <ul className='footer__ul'>
                            <li className='footer__li'>Έχεις κατάστημα;</li>
                            <li className='footer__li'>Γίνε efood διανομέας</li>
                            <li className='footer__li'>Γίνε efooder</li>
                            <li className='footer__li'>Τρόποι Πληρωμής</li>
                        </ul>
                    </div>
                    <div className='footer__column'>
                    <ul className='footer__ul'>
                            <li className='footer__li'>Όροι χρήσης</li>
                            <li className='footer__li'>Αλλεργιογόνα</li>
                            <li className='footer__li'>Πολιτική απορρήτου</li>
                            <li className='footer__li'>Πολιτική προστασίας</li>
                        </ul>
                    </div>
                    <div className='footer__column'>
                    <ul className='footer__ul'>
                            <li className='footer__li'>Πολιτική cookies</li>
                            <li className='footer__li'>Πολιτική αξιολόγησης</li>
                            <li className='footer__li'>Καταστήματα</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='footer__br'></hr>
            <div className='footer__copyright'>
                <p className='footer__pcopy'>© 2021 efood Με επιφύλαξη όλων των δικαιωμάτων. Όροι χρήσης, Πολιτική ιδιωτικού απορρήτου και Πολιτική περί cookies του efood </p>
            </div>
        </div>
    )
}
