import React from "react";
import Link from "next/link";
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
  height: 40px;
  align-items: center;
`;
const LeftMenu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;

  align-items: center;
`;
const RightMenu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;

  align-items: center;
`;
const MenuItem = styled.div`
  margin: 15px;
`;

const BodyLayout = styled.div`
  width: 100%;
  background: gray;
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
          <MenuItem>
            <Link href="/display">
              <a>전시</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/guestBook">
              <a>방명록</a>
            </Link>
          </MenuItem>
        </RightMenu>
      </MenuBar>
      <BodyLayout>{children}</BodyLayout>
      <div>footer</div>
    </>
  );
};

export default AppLayout;
