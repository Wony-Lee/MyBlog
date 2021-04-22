import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const DailyContainer = styled.div`
  color: white;
`;

const DailyPosts = styled.div``;
const DailyTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const DailyContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 5px;
  height: 170px;
`;
const Title = styled.span`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background: white;
  box-shadow: 5px 5px 5px #ddd;
  color: black;
`;
const PostItem = styled.div`
  width: 70%;
  height: 150px;
  background: white;
  box-shadow: 5px 5px 5px #ddd;
  color: black;
`;
const EtcMenu = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DailyPost = ({ daily }) => {
  const id = useSelector((state) => state.user.user?.id);
  return (
    <>
      <DailyContainer>
        <DailyPosts>
          <DailyTitle>
            <Title>{daily}</Title>
          </DailyTitle>
          <DailyContent>
            <PostItem>{daily}</PostItem>
          </DailyContent>
          <EtcMenu>
            <div>
              <button style={{ marginRight: "10px" }}>수정</button>
              <button>삭제</button>
            </div>
          </EtcMenu>
        </DailyPosts>
      </DailyContainer>
    </>
  );
};

DailyPost.propTypes = {
  daily: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    dailytitle: PropTypes.string,
    content: PropTypes.string,
    createAt: PropTypes.object,
  }).isRequired,
};

export default DailyPost;
