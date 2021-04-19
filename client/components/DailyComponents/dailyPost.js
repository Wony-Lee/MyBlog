import React from "react";
import styled from "@emotion/styled";

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

export default DailyPost;
