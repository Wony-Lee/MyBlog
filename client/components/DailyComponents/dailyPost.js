import React from "react";
import styled from "@emotion/styled";

const DailyContainer = styled.div`
  border: 1px solid white;
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
  margin-bottom: 10px;
  height: 200px;
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

const DailyPost = () => {
  return (
    <>
      <DailyContainer>
        <DailyPosts>
          <DailyTitle>
            <Title>Title</Title>
          </DailyTitle>
          <DailyContent>
            <PostItem>PostItem</PostItem>
          </DailyContent>
        </DailyPosts>
      </DailyContainer>
    </>
  );
};

export default DailyPost;
