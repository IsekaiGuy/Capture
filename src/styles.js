import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;

  @media only screen and (max-width: 1116px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  padding-right: 5rem;
  flex: 1;
  z-index: 2;

  @media only screen and (max-width: 1116px) {
    padding: 0;
  }

  h2 {
    font-weight: 300;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;

  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;

    @media only screen and (max-width: 1116px) {
      height: 70vh;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
