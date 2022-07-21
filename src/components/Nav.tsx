import React, { useState } from "react";
import { Flex } from ".";
import { Button } from "./Button";
import {
  NavContainer,
  Logo,
  Menu,
  MenuItems,
  ContainerN,
  MobileMenu,
  Bar,
  MItems,
  Items,
} from "./styles";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavContainer>
      <ContainerN className="container-nav">
        <Flex justify="space-between">
          <Logo>E</Logo>
          <Menu>
            <MenuItems href="#about">About</MenuItems>
            <MenuItems>Experience</MenuItems>
            <MenuItems>Work</MenuItems>
            <MenuItems href="#contact">Contact</MenuItems>
            <a href="/resume.pdf" download>
              <Button style={{ marginTop: "18px" }} className="outlined sm">
                Resume
              </Button>
            </a>
          </Menu>
          <MobileMenu>
            <Bar onClick={() => setOpen(!open)}>
              {open ? (
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 17L16.5563 1.44365"
                    stroke="#8d98bd"
                    stroke-width="2"
                  />
                  <path
                    d="M1 1L16.5563 16.5563"
                    stroke="#8d98bd"
                    stroke-width="2"
                  />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1H22" stroke="#8d98bd" stroke-width="2" />
                  <path d="M0 11H22" stroke="#8d98bd" stroke-width="2" />
                </svg>
              )}
            </Bar>

            <MItems className={open ? "added" : ""}>
              <Items href="#about">About</Items>
              <Items>Experience</Items>
              <Items>Work</Items>
              <Items href="#contact">Contact</Items>
              <a href="/resume.pdf" download>
                <Button style={{ marginTop: "18px" }} className="outlined sm">
                  Resume
                </Button>
              </a>
            </MItems>
          </MobileMenu>
        </Flex>
      </ContainerN>
    </NavContainer>
  );
};

export default Nav;
