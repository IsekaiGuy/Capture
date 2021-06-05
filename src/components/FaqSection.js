import React from "react";
import Toggle from "./Toggle";
//Styles
import styled from "styled-components";
import { About } from "../styles";
//Animation
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const Faq = () => {
  const [element, controls] = useScroll();
  return (
    <StyledFaq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>

      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              sequi neque itaque voluptates non nesciunt.
            </p>
          </div>
        </Toggle>

        <Toggle title="Daily schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              sequi neque itaque voluptates non nesciunt.
            </p>
          </div>
        </Toggle>

        <Toggle title="Different payment methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              sequi neque itaque voluptates non nesciunt.
            </p>
          </div>
        </Toggle>

        <Toggle title="What products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              sequi neque itaque voluptates non nesciunt.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};

//Styling

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
