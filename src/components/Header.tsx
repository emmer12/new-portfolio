import React from "react";
import { HeaderContainer } from "./styles";
import { Text } from ".";

interface IHeader {
  title: string;
}

const Header = ({ title }: IHeader) => {
  return (
    <HeaderContainer>
      <Text as="h1" color="#ccd6f6" weight="700">
        {title}
      </Text>
      <div className="line"></div>
    </HeaderContainer>
  );
};

export default Header;
