import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const FooterSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 10pt;
  margin: 10px;
`;
const Atag = styled.a`
  color: white;
  padding-bottom: 10px;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <>
      <FooterSection>
        <div>
          <Link href="https://github.com/Wony-Lee">
            <a>WonyGithub</a>
          </Link>
          <span>||</span>
          <Link href="https://www.youtube.com/user/korealsw1">
            <a>MyBroYoutube</a>
          </Link>
        </div>
        <span>Copyright © Wony Corp. All rights reserved.</span>
      </FooterSection>
    </>
  );
};

export default Footer;
