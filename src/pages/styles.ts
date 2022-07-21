import styled from "styled-components";

export const Body = styled.div`
  max-width: 90%;
  margin: auto;
`;

export const HeroContainer = styled.div`
  padding-top: 70px;
`;

export const FContact = styled.div`
  position: fixed;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  display: flex;
  bottom: 0px;
  width: 40px;

  .line {
    height: 100px;
    width: 1px;
    background: #ccd6f6;
  }

  .email {
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
  }

  a {
    padding: 10px;
    text-decoration: none;
    letter-spacing: 2px;
    font-size: 14px;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  &.left {
    left: 50px;
  }

  &.right {
    right: 50px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const About = styled.div`
  width: 600px;
  max-width: 100%;
`;
export const Display = styled.div`
  height: 260px;
  width: 270px;
  max-width: 100%;
  background: #3d6fc7;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 640px) {
    align-self: center;
  }
  /* background: rgba(255, 255, 255, 0.15); */
  /* flex: 1; */
  position: relative;

  &:hover .outline {
    top: 10px;
    left: 10px;
  }

  .img {
    height: 100%;
    width: 100%;
    z-index: 2;
    position: relative;
    background: #3d6fc7;
    border-radius: 5px;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    img {
      object-fit: cover;
      border-radius: 5px;
      object-position: top;
      width: 100%;
      height: 100%;
    }

    &:hover {
      filter: none;
      mix-blend-mode: normal;
    }
  }

  .outline {
    content: "";
    height: 100%;
    width: 100%;
    background: transparent;
    border: 2px solid #3d6fc7;
    position: absolute;
    top: 15px;
    left: 15px;
    border-radius: 5px;
    z-index: 1;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export const SkillsCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;
export const Skills = styled.div`
  /* flex: 1; */
  width: 40%;
  position: relative;
  font-family: "Roboto Mono", monospace;
  padding: 0px 20px;

  &:before {
    content: "▹";
    position: absolute;
    left: 0px;
    top: 5px;
    color: var(--primary-color);
    font-size: 18px;
    line-height: 12px;
  }
`;

export const WhatNext = styled.div`
  width: 600px;
  max-width: 100%;
  padding: 10px;
  margin: auto;
  text-align: center;

  .header {
    position: relative;
    color: var(--primary-color);
    &:before {
      content: "";
      position: absolute;
      margin-left: -17px;
      top: 12px;
      color: #3d6fc7;
      background: #3d6fc7;
      padding: 2px 5px;
      border-radius: 10px;
    }
  }
`;
