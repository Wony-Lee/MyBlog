import React from "react";
import styled from "@emotion/styled";
import { injectGlobal } from "@emotion/css";

injectGlobal`
body{
    margin:0 auto;
    width:100%;
}`;

const MenuBar = styled.div`
  width: 90%;
  margin-left: 5%;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  height: 75px;
  align-items: center;
`;
const LeftMenu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  border: 1px solid black;
  align-items: center;
`;
const RightMenu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  border: 1px solid red;
  align-items: center;
`;

const BodyLayout = styled.div`
  width: 100%;
  border: 1px solid navy;
  height: 650px;
`;

const AppLayout = ({ children }) => {
  return (
    <>
      <MenuBar>
        <LeftMenu>ImageLogo</LeftMenu>
        <RightMenu>
          <div>게시판</div>
          <div>포트폴리오</div>
          <div>자질구레</div>
        </RightMenu>
      </MenuBar>
      <BodyLayout>body</BodyLayout>
      <div>footer</div>
    </>
  );
};

export default AppLayout;
