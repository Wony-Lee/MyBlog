import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

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

const ListSection = ({ board }) => {
  return (
    <ListForm>
      <ListSectionForm>
        <ListTitleSpan>{board.boardTitle}</ListTitleSpan>
        <ListContentSpan>{board.boardContent}</ListContentSpan>
        <ListEtcSpan>{board.createdAt}</ListEtcSpan>
      </ListSectionForm>
    </ListForm>
  );
};

// ListSection.propTypes = {
//   ListSection: PropTypes.shape({
//     id: PropTypes.number,
//     User: PropTypes.object,
//     content: PropTypes.string,
//     createAt: PropTypes.string,
//   }).isRequired,
// };

export default ListSection;
