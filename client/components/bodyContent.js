import React from "react";
import styled from "@emotion/styled";

const BodyItem = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid black;
  margin: 10px;
`;

const BodyContent = () => {
  return (
    <>
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
    </>
  );
};

export default BodyContent;
