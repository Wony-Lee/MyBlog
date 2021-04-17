import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { injectGlobal } from "@emotion/css";

injectGlobal`
body{
    margin:0 auto;
    width:100%;
    background:#191940;
    user-select:none;
  }
button{
  outline:none;
  cursor:pointer;
  border:0px;
  background:white;
  height: 30px;
  width: 100px;
}
  `;

const NavForm = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  height: 40px;
  display: flex;
  border: 2px solid white;
  align-items: center;
`;

const NavLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
`;
const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`;

const NavText = styled.span`
  font-size: 15pt;
  color: white;
  margin-left: 30px;
  margin-right: 30px;
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

const PageContents = styled.div`
  flex-direction: column;
  width: 100%;
`;

const VoidDiv = styled.div`
  width: 10%;
`;

const EtcDiv = styled.div`
  margin-top:30px;
  border: 2px solid white;
  position: relative
  bottom: 0px;
`;

const EtcText = styled.span`
  color: white;
  padding-left: 30px;
  font-size: 15pt;
`;

const GuestText = styled.div`
  color: white;
`;

const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <>
      <NavForm>
        <NavLeft>
          <Link href="/">
            <NavAtag>
              <NavText>Wony</NavText>
            </NavAtag>
          </Link>
        </NavLeft>
        <NavRight>
          {isLoggedIn ? (
            <GuestText>관리자 로그인중</GuestText>
          ) : (
            <GuestText>환영합니다.</GuestText>
          )}
          <Link href="/blog/dailys">
            <NavAtag>
              <NavText>일상</NavText>
            </NavAtag>
          </Link>
          <Link href="/blog/portWrite">
            <NavAtag>
              <NavText>포트폴리오</NavText>
            </NavAtag>
          </Link>
          <Link href="/blog">
            <NavAtag>
              <NavText>blog</NavText>
            </NavAtag>
          </Link>
        </NavRight>
      </NavForm>
      <ContentLayout>
        <VoidDiv></VoidDiv>
        <PageContents>{children}</PageContents>
        <VoidDiv></VoidDiv>
      </ContentLayout>
      <EtcDiv>
        <EtcText>내용추가</EtcText>
      </EtcDiv>
    </>
  );
};

export default AppLayout;
