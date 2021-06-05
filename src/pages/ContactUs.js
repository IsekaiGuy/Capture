import React from "react";
import ScrollTop from "../components/ScrollTop";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>

      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h4>Send us a message</h4>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h4>Send an email</h4>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h4>Social media</h4>
          </Social>
        </Hide>
      </div>
      <ScrollTop />
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  background: white;

  @media only screen and (max-width: 1116px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h4 {
    margin: 2rem;
    font-weight: 300;
  }
`;

export default ContactUs;
