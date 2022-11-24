import React from "react";
import styled from "styled-components";
import { Container, Text, Flex, Spacer, Wrapper } from "../components";
import { Button } from "../components/Button";
import Header from "../components/Header";
import {
  Body,
  HeroContainer,
  FContact,
  About,
  Display,
  SkillsCon,
  Skills,
  WhatNext,
} from "./styles";

const Home = () => {
  return (
    <Container>
      <Body>
        {/* HERO SECTION */}

        <HeroContainer>
          <Text className="mono" size="16px" weight="500">
            Hi, My Name is{" "}
          </Text>
          <Text as="h1" size="64px" sizeM="32px" weight="900" color="#ccd6f6">
            Emmanuel Taiwo
          </Text>
          <Text as="h1" size="64px" sizeM="18px" weight="900">
            I Build Reality Into Web.
          </Text>

          <Spacer height={20} />

          <Text as="p" size="18px">
            I’m a software engineer specializing in building and
            <br />
            designing exceptional digital experiences. Currently, I’m focused
            <br />
            on building accessible, human-centered products at{" "}
            <a href="https://buildingsandmore.ng">buildingsandmore.ng</a>
          </Text>
          <Spacer height={20} />

          <Button className="primary outlined">Get in touch</Button>
        </HeroContainer>

        <Spacer height={150} />

        <Wrapper id="about">
          <Header title="About me" />
        </Wrapper>

        <Wrapper>
          <Flex gap={30} directionM="column">
            <About>
              <Text as="p">
                Hello! My name is Emmanuel and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2009 when I decided to learn programming — turns out that i fell
                i love with web development after discovering HTML & CSS!
              </Text>

              <Text as="p">
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
              </Text>

              <Text as="p">
                I am team spirited and will love to work with a technical team
                where I can solve problems with a good balance of freedom and
                responsibility.
              </Text>

              <SkillsCon>
                <Skills>
                  <Text size="14px">JavaScript</Text>
                </Skills>
                <Skills>
                  <Text size="14px">TypeScript</Text>
                </Skills>
                <Skills>
                  <Text size="14px">React</Text>
                </Skills>
                <Skills>
                  <Text size="14px">ReactNative</Text>
                </Skills>
                <Skills>
                  <Text size="14px">Vue</Text>
                </Skills>
                <Skills>
                  <Text size="14px">NodeJs</Text>
                </Skills>
                <Skills>
                  <Text size="14px">Laravel php</Text>
                </Skills>
                <Skills>
                  <Text size="14px">Solidity</Text>
                </Skills>
                <Skills>
                  <Text size="14px">Web3</Text>
                </Skills>
              </SkillsCon>
            </About>

            <Display>
              <div className="img">
                <img
                  src={require("../images/img.png")}
                  alt="Emmanuel Display"
                />
              </div>
              <div className="outline"></div>
            </Display>
          </Flex>
        </Wrapper>

        <Spacer height={150} />

        <Wrapper id="contact">
          <WhatNext>
            <Text className="header mono" weight="700">
              What's Next
            </Text>
            <Text size="62px" sizeM="32px" weight="700" color="#ccd6f6">
              Get in Touch
            </Text>
            <Text as="p">
              I’m currently looking forward to any new opportunities, my inbox
              is always open. Whether you have any project you want to discuss
              or just want to say hi, I’ll get back to you!
            </Text>

            <a href="mailto:taiwoemmanuel0011@gmail.com">
              <Button className=" outlined">Say Hello</Button>
            </a>
          </WhatNext>
        </Wrapper>

        <Spacer height={150} />

        <FContact className="right">
          <a className="email" href="mailto:taiwoemmanuel0011@gmail.com">
            taiwoemmanuel0011@gmail.com
          </a>
          <div className="line"></div>
        </FContact>
        <FContact className="left">
          <a
            href="https://github.com/emmer12/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-instagram"
            >
              <title>Instagram</title>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-twitter"
            >
              <title>Twitter</title>
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/emmanueltaiwo"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-linkedin"
            >
              <title>LinkedIn</title>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <div className="line"></div>
        </FContact>
      </Body>
    </Container>
  );
};

export default Home;
