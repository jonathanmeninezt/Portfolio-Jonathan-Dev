import React from "react";
import styled from "styled-components";

const Portfolio = (props) => {
  const { img, disc } = props.item;
  return (
    <Container className="project">
      <img src={img} alt="project" />
      <div className="disc">
        <button>Veja Mais</button>
      </div>
    </Container>
  );
};

export default Portfolio;

const Container = styled.div`
  height: 10rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
  .disc button {
    width: 23%;
    position: absolute;
    right: 0;
    left: 13rem;
    bottom: -10rem;
    border-radius: 15px;
    color: white;
    background-color: red;
    transition: all 400ms ease-in-out;

    h1 {
      font-size: 1rem;
    }

    p {
      width: 90%;
      font-size: 0.8rem;
      a {
        margin-left: 0.4rem;
        color: red;
      }
    }
  }

  img:hover {
    transform: scale(1.3);
  }

  :hover .disc button {
    bottom: 5rem;
  }
`;
