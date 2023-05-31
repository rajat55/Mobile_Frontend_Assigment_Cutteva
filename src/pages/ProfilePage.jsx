import React from "react";
import "./profile.css";
import avatarMale from "../img/avatarMale.png";
import BottomBar from '../components/BottomBar'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  
  faTelegram,
  faFacebook,
  faInstagram,
  faArtstation,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faPen,
  faCircleCheck,
  faMusic,
  faMugHot,
  faBicycle,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

export default function ProfilePage() {
  return (
    <div>
      <div className="Pwrapper">
        <div className="Pcontainer">
          <div className="Pheading">
            <FontAwesomeIcon className="Picon" icon={faArrowLeft} />
            <p>Profile</p>
            <FontAwesomeIcon className="Picon" icon={faPen} />
          </div>
          <div className="imgGallary">
            <div className="gallary">
              <div className="imgWrapper leftImg">
                <img src={avatarMale} alt="" />
              </div>
              <div className="imgWrapper centerImg">
                <img src={avatarMale} alt="" />
              </div>
              <div className="imgWrapper rightImg">
                <img src={avatarMale} alt="" />
              </div>
            </div>
          </div>
          <div className="desc">
            <div className="descTitle">
              <span>Rajat,</span> 23
              <FontAwesomeIcon className="tick" icon={faCircleCheck} />
            </div>
            <div className="descdescription">Alpha I, Greater Noida</div>
          </div>
          <div className="Plinks">
            <div className="PlinksItem">
              <FontAwesomeIcon icon={faFacebookMessenger} />
            </div>
            <div className="PlinksItem">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="PlinksItem">
              <FontAwesomeIcon icon={faTelegram} />
            </div>
            <div className="PlinksItem">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </div>
          <div className="Pinterest">
            <div className="PinterestTitle">
              <h3>Interests</h3>
              <p>Edit</p>
            </div>

            <div className="PinterestContents">
              <div className="PinterestContent one">
                <FontAwesomeIcon className="Pinteresticon" icon={faMusic} />
                Music
              </div>

              <div className="PinterestContent two">
                <FontAwesomeIcon className="Pinteresticon" icon={faMugHot} />
                Coffe
              </div>

              <div className="PinterestContent three">
                <FontAwesomeIcon className="Pinteresticon" icon={faFire} />
                Dance
              </div>

              <div className="PinterestContent four">
                <FontAwesomeIcon
                  className="Pinteresticon"
                  icon={faArtstation}
                />
                Design
              </div>
              <div className="PinterestContent one">
                <FontAwesomeIcon className="Pinteresticon" icon={faBicycle} />
                Cycling
              </div>
            </div>
          </div>
          <BottomBar/>
        </div>
        
      </div>
    </div>
  );
}
