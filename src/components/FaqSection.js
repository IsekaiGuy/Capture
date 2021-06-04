import React from "react";
//Styles
import styled from "styled-components";
import { About } from "../styles";

const Faq = () => {
  return (
    <StyledFaq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            sequi neque itaque voluptates non nesciunt.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Daily schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            sequi neque itaque voluptates non nesciunt.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Different payment methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            sequi neque itaque voluptates non nesciunt.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>What products do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            sequi neque itaque voluptates non nesciunt.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </StyledFaq>
  );
};

const StyledFaq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: 300;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }
`;

export default Faq;
