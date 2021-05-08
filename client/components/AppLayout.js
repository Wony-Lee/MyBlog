import React, { useCallback } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { injectGlobal } from "@emotion/css";
import { logoutRequestAction } from "../reducer/user";
import Footer from "./Footer";

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
input {
  outline:none;
}

.slick-slider {
  display:block;
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
  border: 2px solid white;
  position: relative;
  bottom: 0px;
`;

const EtcText = styled.span`
  color: white;
`;

const GuestText = styled.div`
  color: white;
`;

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const onLogout = useCallback((e) => {
    e.preventDefault();
    dispatch(logoutRequestAction());
  });
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
          {user ? (
            <Link href="/logout">
              <a>
                <GuestText onClick={onLogout}>로그아웃</GuestText>
              </a>
            </Link>
          ) : (
            <Link href="/login">
              <a>
                <GuestText>로그인</GuestText>
              </a>
            </Link>
          )}
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
        <EtcText>
          <Footer />
        </EtcText>
      </EtcDiv>
    </>
  );
};

export default AppLayout;
