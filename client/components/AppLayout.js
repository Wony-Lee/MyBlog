import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

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
  border: 2px solid white;
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
  position: relative;
  min-height: 860px;
  overflow: hidden;
`;

const VoidDiv = styled.div`
  border: 2px solid white;
  width: 10%;
`;

const EtcDiv = styled.div`
margin-top:30px;
  width: 100%;
  border: 2px solid white;
  position: relative
  bottom: 0px;
`;

const EtcText = styled.span`
  color: white;
  padding-left: 30px;
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
        <VoidDiv>asd</VoidDiv>
        {children}
        <VoidDiv>asd</VoidDiv>
      </ContentLayout>
      <EtcDiv>
        <EtcText>내용추가</EtcText>
      </EtcDiv>
    </>
  );
};

AppLayout.protoTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
