import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const ContentLeft = styled.div`
  display: flex;
  width: 40%;
  margin-bottom: 5%;
  flex-direction: column;
  align-items: flex-end;
  background: #191970;
`;
const ContentRight = styled.div`
  display: flex;
  width: 40%;
  margin-top: 5%;
  flex-direction: column;
  align-items: flex-start;
  background: #191960;
`;

const ContentItem = styled.div`
  border: 2px solid white;
  display: flex;
  width: 250px;
  height: 250px;
  margin: 30px;
  color: white;
`;

const BodyContent = () => {
  return (
    <>
      <ContentLeft>
        <ContentItem>
          <Link href="/info">
            <a>소개</a>
          </Link>
        </ContentItem>
        <ContentItem>
          <Link href="/portfolio">
            <a>포트폴리오</a>
          </Link>
        </ContentItem>
      </ContentLeft>
      <ContentRight>
        <ContentItem>
          <Link href="/daily">
            <a>일상</a>
          </Link>
        </ContentItem>
        <ContentItem>
          <Link href="/guest">
            <a>방명록</a>
          </Link>
        </ContentItem>
      </ContentRight>
    </>
  );
};

export default BodyContent;