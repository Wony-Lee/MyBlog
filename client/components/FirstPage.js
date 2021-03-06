import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { jsx } from "@emotion/react";
import { injectGlobal, css } from "@emotion/css";

injectGlobal`
html {
    height:auto;
}
body{
    margin:0 auto;
    width:100%;
    height:100%;
}`;
const Layout = styled.div`
    display: flex;
    position: relative;
    min-height: 960px;
    height: 100%;
    @media (max-width: 480px) {
        min-height: 500px;
    }
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
    color: white;
    font-size: 15pt;
    @media (max-width: 485px) {
        font-size: 9pt;
    }
    @media (max-width: 280px) {
        font-size: 7pt;
    } ;
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
    color: black;
    @media (max-width: 485px) {
        font-size: 10pt;
        width: 80px;
    }
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
    @media (max-width: 485px) {
        font-size: 30pt;
        bottom: 25%;
    }
    @media (max-width: 280px) {
        font-size: 28pt;
    }
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
                    <span alt="????????? ?????? ????????? ?????????">
                        ???<br />???<br />???<br />???<br />
                    </span>
                </CenterText>
                <RightLayout>
                    <RightMenu>
                        <MenuText>???????????????</MenuText>
                    </RightMenu>
                    <RightTextForm>
                        <MenuText>
                            Wony??? ????????? ?????????.
                            <br />
                            <br />
                            ?????? ??? ?????? ?????????, <br />
                            <br />
                            ???????????? ????????????
                            <br />
                            <br />
                            ????????? ????????? ???????????????.
                            <br />
                            <br />
                        </MenuText>
                    </RightTextForm>
                    <NextPage>
                        <Link href="/blog">
                            <Alink>
                                <NextPageItem>????????? ??????</NextPageItem>
                            </Alink>
                        </Link>
                    </NextPage>
                </RightLayout>
            </Layout>
        </>
    );
};

export default FirstPage;
