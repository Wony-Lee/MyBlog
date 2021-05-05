import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useSelector } from "react-redux";

const HeadTitle = styled.div`
  display: flex;
  color: white;
`;
const TextSpan = styled.span`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;
const Atag = styled.a`
  color: white;
`;

const ListHeadTitle = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <HeadTitle>
        <TextSpan>전체글</TextSpan>
        {user ? (
          <TextSpan>
            <Link href="/blog/board/write">
              <Atag>글작성</Atag>
            </Link>
          </TextSpan>
        ) : (
          <></>
        )}
      </HeadTitle>
    </>
  );
};
export default ListHeadTitle;
