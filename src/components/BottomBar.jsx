import React from 'react'
import './bottombar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faMessage,
    faPaste,
    faPerson
    
  } from "@fortawesome/free-solid-svg-icons";

  import { Link } from 'react-router-dom';

export default function BottomBar() {
  return (
    <div>
        <div className="bottomBarContainer">
            <div className="btItem">
                <Link to='/landing'>
            <FontAwesomeIcon icon={faPaste} />
            </Link>
            </div>
            <div className="btItem">
            <FontAwesomeIcon icon={faMessage} />
            </div>
            <div className="btItem">
            <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="btItem">
                <Link to="/profile">
                <FontAwesomeIcon icon={faPerson} />
                </Link>
            
            </div>
        </div>
    </div>
  )
}
