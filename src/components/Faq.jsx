import React, { useState } from 'react';
import arrowDownIcon from "../images/icon-arrow-down.svg";

function Faq(props) {
  const faqIndex = props.id;
  const [isHidden, setIsHidden] = useState(true);
  
  const handleClick = (idx) => {
    const selectedAnswer = document.getElementsByClassName("answer")[idx];
    const selectedQuery = document.getElementsByClassName("query")[idx];
    const selectedArrow = document.getElementsByClassName("arrow-icon")[idx];

    if(isHidden){
      selectedAnswer.classList.remove("hide");
      selectedQuery.classList.add("query-highlight");
      selectedArrow.classList.add("arrow-icon-invert");
      setIsHidden(false);
    } else{
      selectedAnswer.classList.add("hide");
      selectedQuery.classList.remove("query-highlight");
      selectedArrow.classList.remove("arrow-icon-invert");
      setIsHidden(true);
    }
  }

  return (
    <div>
      <div className="query-div">
        <p className="query">{props.faq}</p>
        <img className="arrow-icon" onClick={()=> handleClick(faqIndex)} src={arrowDownIcon} alt=""/>
      </div>
      <p className="answer hide">{props.answer}</p>
      <div className="faq-separator"></div>
    </div>
  );
}

export default Faq;