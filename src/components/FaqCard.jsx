import React from 'react';
import faqData from '../faqData';
import Faq from './Faq';
import Illustration from "./Illustration";

function FaqCard(props) {
  return (
    <div className="card">
      <Illustration/>
      <h1 className="faq-heading">FAQ</h1>
      {
        faqData.map((item, index) => {
          return (<Faq key = {index} id ={index} faq={item.faq} answer={item.answer}/>)
        })
      }
    </div>
  );
}

export default FaqCard;