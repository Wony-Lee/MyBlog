import React from "react";
import styled from "@emotion/styled";
import BodyBanner from "./bodyBanner";

const BodyItem = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid black;
  margin: 10px;
`;

const BodyBox = styled.div`
  margin-top: 40px;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  display: flex;
  flex-direction: row;
`;

const BodyContent = () => {
  return (
    <>
      <BodyBanner></BodyBanner>
      <BodyBox>
        <BodyItem>
          <span>이미지</span>
          <span>내용</span>
        </BodyItem>
        <BodyItem>
          <span>이미지</span>
          <span>내용</span>
        </BodyItem>
        <BodyItem>
          <span>이미지</span>
          <span>내용</span>
        </BodyItem>
        <BodyItem>
          <span>이미지</span>
          <span>내용</span>
        </BodyItem>
      </BodyBox>
    </>
  );
};

export default BodyContent;
