import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { injectGlobal } from "@emotion/css";

injectGlobal`
body{
    margin:0 auto;
    width:100%;
}`;

const Layout = styled.div`
  display: flex;
  position: relative;
  min-height: 860px;
`;
const LeftLayout = styled.div`
  width: 50%;
  background: #191970;
`;

const LeftMenu = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  height: 40px;
  display: flex;
  align-items: center;
`;
const MenuText = styled.span`
  font-size: 15pt;
  color: white;
`;
const RightLayout = styled.div`
  width: 50%;
  background: #191960;
`;
const RightMenu = styled.div`
  margin-top: 30px;
  margin-right: 30px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const RightTextForm = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  margin-top: 200px;
`;

const NextPage = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20%;
`;
const NextPageItem = styled.span`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15pt;
  background: white;
  border: 1px solid white;
  opacity: 0.5;
  color: black; ;
`;

const CenterText = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 50pt;
  user-select: none;
`;

const Alink = styled.a`
  color: wthie;
  cursor: pointer;
`;

const FirstPage = () => {
  return (
    <>
      <Layout>
        <LeftLayout>
          <LeftMenu>
            <MenuText>Wony</MenuText>
          </LeftMenu>
        </LeftLayout>
        <CenterText>
          <span alt="도끼를 갈아 바늘을 만든다">
            磨<br />斧<br />爲<br />針<br />
          </span>
        </CenterText>
        <RightLayout>
          <RightMenu>
            <MenuText>포트폴리오</MenuText>
          </RightMenu>
          <RightTextForm>
            <MenuText>
              Wony의 블로그 입니다.
              <br />
              <br />
              비록 볼 것은 없지만, <br />
              <br />
              그럼에도 불구하고
              <br />
              <br />
              방문해 주셔서 감사합니다.
              <br />
              <br />
            </MenuText>
          </RightTextForm>
          <NextPage>
            <Link href="/blog">
              <Alink>
                <NextPageItem>블로그 보기</NextPageItem>
              </Alink>
            </Link>
          </NextPage>
        </RightLayout>
      </Layout>
    </>
  );
};

export default FirstPage;
