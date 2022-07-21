import styled from "styled-components";
import { Flex } from ".";

export const NavContainer = styled.div`
  height: 70px;
  line-height: 70px;

  &.added {
    box-shadow: 0 10px 30px -10px var(rgba(2, 12, 27, 0.7));
    background: rgba(10, 25, 47, 0.85);
  }
`;

export const ContainerN = styled.div`
  /* padding-right: var(--bs-gutter-x, 2.75rem); */
  /* padding-left: var(--bs-gutter-x, 2.75rem); */
  @media (max-width: 640px) {
    padding: 0px 20px;
  }
`;
export const Menu = styled.div`
  display: flex;

  @media (max-width: 640px) {
    display: none;
  }
`;
export const MenuItems = styled.a`
  font-family: "Roboto Mono", monospace;
  padding: 0px 25px;
  position: relative;
  text-decoration: none;

  &:before {
    content: "";
    position: absolute;
    left: -5px;
    top: 35px;
    color: #3d6fc7;
    background: #3d6fc7;
    padding: 2px 5px;
    border-radius: 10px;
  }
`;
export const Logo = styled.div`
  display: flex;
  height: 40px;
  width: 40px;
  background: transparent;
  border-radius: 50%;
  border: 2px solid #3d6fc7;
  align-items: center;
  justify-content: center;
  margin-top: 16px;

  font-weight: 700;
  font-size: 18px;
  position: relative;

  &:after {
    content: "";
    height: 10px;
    width: 10px;
    border-radius: 50%;
    position: absolute;
    top: -6px;
    left: 10px;
    background: #3d6fc7;
  }
`;

export const HeaderContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  position: relative;
  h1 {
    font-size: 32px;
    flex-shrink: 0;
    white-space: nowrap;
  }

  .line {
    width: 40%;
    /* flex: 1; */
    height: 0.5px;
    background: #ccd6f65e;
    margin-left: 20px;
  }

  &:before {
    content: "";
    position: absolute;
    left: -5px;
    top: 35px;
    color: var(--primary-color);
    background: var(--primary-color);
    padding: 2px 5px;
    border-radius: 10px;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  position: relative;

  @media (max-width: 640px) {
    display: block;
  }
`;
export const FootCon = styled.div`
  text-align: center;
  padding: 10px;
`;

export const Foot = styled.div`
  padding: 10px;
  display: none;
  justify-content: center;

  @media (max-width: 640px) {
    display: flex;
  }

  svg {
    height: 20px;
  }
  a {
    padding: 0pc 20px;
  }
`;

export const Bar = styled.div`
  cursor: pointer;
`;

export const MItems = styled.div`
  position: absolute;
  background: #010a18;
  width: 100vw !important;
  right: 0px;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 2px 20px #000712;
  transition: 0.8s cubic-bezier(0.25, 0.1, 0.57, 1.43);
  transform: translateX(-100vw) rotate(90deg);
  transform-origin: top;
  z-index: 999;

  &.added {
    transform: translateX(0vw) rotate(0deg);
    transform-origin: top;

    > path {
      transform: rotate(30deg);
    }
  }
`;

export const Items = styled.a`
  font-family: "Roboto Mono", monospace;
  padding: 0px 25px;
  position: relative;
  text-decoration: none;
`;
