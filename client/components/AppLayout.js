import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { injectGlobal } from "@emotion/css";

import BodyBanner from "../components/bodyBanner";

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
const MenuItem = styled.div`
  margin: 15px;
`;

const BodyLayout = styled.div`
  width: 100%;
  border: 1px solid navy;
  height: 650px;
  background: gray;
  overflow: auto;
  min-height: 300px;
`;

const BodyBox = styled.div`
  margin-top: 40px;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  display: flex;
  flex-direction: row;
`;

const AppLayout = ({ children }) => {
  return (
    <>
      <MenuBar>
        <LeftMenu>
          <Link href="/">
            <a>ImageLogo</a>
          </Link>
        </LeftMenu>
        <RightMenu>
          <MenuItem>
            <Link href="/notice">
              <a>공지사항</a>
            </Link>
          </MenuItem>
          <MenuItem>전시</MenuItem>
          <MenuItem>방명록</MenuItem>
        </RightMenu>
      </MenuBar>
      <BodyLayout>
        <BodyBox>{children}</BodyBox>
      </BodyLayout>
      <div>footer</div>
    </>
  );
};

export default AppLayout;
