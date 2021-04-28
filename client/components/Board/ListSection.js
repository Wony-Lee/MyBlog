import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

const ListForm = styled.div`
  margin-top: 3%;
  margin-left: 5%;
  margin-right: 5%;
  color: white;
`;
const ListSectionForm = styled.div`
  border-bottom: 1px solid white;
  color: white;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const ListTitleSpan = styled.span`
  padding: 15px;
`;

const ListContentSpan = styled.span`
  font-size: 15pt;
  padding: 15px;
`;

const ListEtcSpan = styled.span`
  font-size: 10pt;
  padding: 5px 15px;
`;
const HeadTitle = styled.div`
  display: flex;
`;

const TextSpan = styled.span`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;
const Atag = styled.a`
  color: white;
`;

const ListSection = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <ListForm>
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
      <ListSectionForm>
        <ListTitleSpan>title</ListTitleSpan>
        <ListContentSpan>content</ListContentSpan>
        <ListEtcSpan>2021/04/26</ListEtcSpan>
      </ListSectionForm>
    </ListForm>
  );
};

export default ListSection;
