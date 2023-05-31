import React from 'react'
import './startingpage.css'
import appleImg from '../img/apple.png';
import googleImg from '../img/google.png';
import backImg from '../img/back.png';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function StartingPage() {
  return (
    <div>

        <div className="stWrapper">
            <div className="stContainer">
                 <div className="stTextArea">
                    <div className="bgImg">
                        <img src={backImg} alt="" />
                    </div>
                    <div className="stLogo">
                        <b>META</b>  <span>MATCH</span>
                    </div>
                    <div className="stMainText">
                    <div className="stH2">
                    <h2> Find your <span className='c-red'> first meta</span>  matches.</h2>
                    </div>
                    <div className="stP">
                       
                       <p>Join us and socialize with millions of meta humans</p>
                    </div>
                 </div>
                 </div>
                 <div className="stButton">
                    <Link to='/landing' className='notextD'>
                    <div className="btn1 ">
                       <span>Get Started</span>
                       <FontAwesomeIcon className='arrow' icon={faArrowLeft} rotation={180} />

                    </div>
                    </Link>
                    <div className="btn2 btnImg">
                        <img src={appleImg} alt="" />

                    </div>
                    <div className="btn3 btnImg">
                    <img src={googleImg} alt="" />

                    </div>
                 </div>
                 <p>Already Have Account? <span className='redColor'>Sign In</span> </p>
            </div>
        </div>



    </div>
  )
}
