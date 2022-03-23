import React from 'react';
import {isMobile} from 'react-device-detect';
import illustrationMobile from "../images/illustration-woman-online-mobile.svg";
import IllustrationDesktop from "../images/illustration-woman-online-desktop.svg";
import BgPatternMobile from "../images/bg-pattern-mobile.svg";
import BgPatternDesktop from "../images/bg-pattern-desktop.svg";
import box from "../images/illustration-box-desktop.svg";

function Illustration(props) {
  return (
    <section>
      {isMobile?
        <img className="illus-mobile" src={illustrationMobile} alt=""/>
        : <img className="illus-desktop" src={IllustrationDesktop} alt=""/>
      }
      {isMobile?
         <img className="pattern-mobile" src={BgPatternMobile} alt=""/>
        :<img className="pattern-desktop" src={BgPatternDesktop} alt=""/>
      }
      {isMobile?<></>
        :<img className="illus-box" src={box} alt=""/>
      }
    </section>
  );
}

export default Illustration;