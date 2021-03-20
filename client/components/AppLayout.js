import React from "react";
import Link from "next/link";

import styled from "@emotion/styled";
import BodyContent from "./bodyContent";

import { injectGlobal } from "@emotion/css";

injectGlobal`
body{
    margin:0 auto;
    width:100%;
    background:#191940;
    
  }`;

const NavForm = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  height: 40px;
  display: flex;
  align-items: center;
`;

const NavText = styled.span`
  font-size: 15pt;
  color: white;
  margin-left: 30px;
`;
const NavAtag = styled.a`
  color: wthie;
  cursor: pointer;
`;

const ContentLayout = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentLeft = styled.div`
  display: flex;
  width: 40%;
  margin-bottom: 5%;
  flex-direction: column;
  align-items: flex-end;
  background: #191960;
`;
const ContentRight = styled.div`
  display: flex;
  width: 40%;
  margin-top: 5%;
  flex-direction: column;
  align-items: flex-start;
  background: #191970;
`;

const ContentItem = styled.div`
  border: 2px solid white;
  display: flex;
  width: 250px;
  height: 250px;
  margin: 10px;
  color: white;
`;

const EtcText = styled.div`
  color: white;
  margin-left: 30px;
  font-size: 15pt;
`;

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
        <div>asd</div>
        <ContentLeft>
          <ContentItem>소개</ContentItem>
          <ContentItem>포트폴리오</ContentItem>
        </ContentLeft>
        <ContentRight>
          <ContentItem>일상</ContentItem>
          <ContentItem>방명록</ContentItem>
        </ContentRight>
        <div>asd</div>
      </ContentLayout>
      <EtcText>내용추가</EtcText>
    </>
  );
};

export default AppLayout;
