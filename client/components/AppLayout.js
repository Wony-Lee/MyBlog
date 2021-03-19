import React from "react";
import Link from "next/link";

import styled from "@emotion/styled";
import BodyContent from "./bodyContent";

import { injectGlobal } from "@emotion/css";

injectGlobal`
body{
    margin:0 auto;
    width:100%;
}`;

const NavForm = styled.div`
  margin: 30px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6a5acd;
`;

const NavText = styled.span`
  font-size: 15pt;
  color: white;
`;
const NavAtag = styled.a`
  color: wthie;
  cursor: pointer;
`;

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 790px;
  background: #483d8b;
`;

const ContentTop = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
const ContentBot = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const LeftContent = styled.div`
  margin-right: 30px;
  border: 1px solid black;
  width: 50%;
  text-align: right;
  width: 200px;
  height: 200px;
`;
const RightContent = styled.div`
  margin-left: 30px;
  border: 1px solid black;
  width: 50%;
  text-align: left;
  width: 200px;
  height: 200px;
`;

const EtcText = styled.div``;

const AppLayout = ({ children }) => {
  return (
    <>
      <NavForm>
        <Link href="/">
          <NavAtag>
            <NavText>Wony</NavText>
          </NavAtag>
        </Link>
      </NavForm>
      <ContentLayout>
        <ContentTop>
          <LeftContent>소개</LeftContent>
          <RightContent>포트폴리오</RightContent>
        </ContentTop>
        <ContentBot>
          <LeftContent>일상</LeftContent>
          <RightContent>방명록</RightContent>
        </ContentBot>
      </ContentLayout>
      <div>asdasd</div>
    </>
  );
};

export default AppLayout;
