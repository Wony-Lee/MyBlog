import React from "react";

import styled from "@emotion/styled";

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

const ListSection = () => {
  return (
    <ListForm>
      <span>전체글</span>
      <ListSectionForm>
        <ListTitleSpan>title</ListTitleSpan>
        <ListContentSpan>content</ListContentSpan>
        <ListEtcSpan>2021/04/26</ListEtcSpan>
      </ListSectionForm>
    </ListForm>
  );
};

export default ListSection;
