import React from 'react'
import './landingpage.css'
import avatorMale from '../img/avatarMale.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    
    faBellSlash,
    faCamera,
    faLocationDot,
    faMicrophone,
    faVolumeLow,faEquals,faCircleXmark,faHeart,faHandsClapping
  } from "@fortawesome/free-solid-svg-icons";
import BottomBar from '../components/BottomBar';


export default function LandingPage() {
  return (
    <div>
        <div className="Pwrapper cys">
        <div className="Pcontainer custumLanding">

            <div className="rrrController">
            

            

             <div className="imgModalContainer r45">
            <img src={avatorMale} alt="" />
             </div>

             <div className="imgModalContainer r135">
            <img src={avatorMale} alt="" />
             </div>
             <div className="imgModalContainer r0">
            <img src={avatorMale} alt="" />
             </div>

             <div className="landingHeader">
                <div className="nameImg">
                    <img src={avatorMale} alt="" />
                    Hi,
                    <span >Rajat</span> 
                </div>
                <div className="iconImg">
                <FontAwesomeIcon icon={faLocationDot} />
                <FontAwesomeIcon icon={faBellSlash} />
                </div>
             </div>
            <div className="controlsWrapper">
            <div className="controls">

            <FontAwesomeIcon icon={faCamera} />
            <FontAwesomeIcon icon={faMicrophone} />
            <FontAwesomeIcon icon={faVolumeLow} rotation={180} />
            </div>
            </div>

            <div className="landingNameDesc">
                <h3>Rajat Gupta, 23</h3>
                <p>Noida, India</p>

            </div>

            

             

          

            
        </div>

        <div className="circleWrapper">
            <div className="circle">
            <FontAwesomeIcon className='equal' icon={faEquals} rotation={90} />
            </div>
        </div>

        <div className="lastControllers">
        <FontAwesomeIcon icon={faCircleXmark} style={{color: "#e91c45",}} />
        <FontAwesomeIcon icon={faHandsClapping} style={{color: "#e2cd65",}} />
        <FontAwesomeIcon icon={faHeart} style={{color: "#df2a57",}} />
        </div>

        <BottomBar/>

        </div>
            
        </div>

        
        
    </div>
  )
}
