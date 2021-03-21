import React from "react";
import styled from "@emotion/styled";

const CardForm = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const CardArea = styled.div`
  width: 70%;
  border: 1px solid white;
`;

const CardTitle = styled.div`
  border-bottom: 1px solid white;
  height: 50px;
  display: flex;
  align-items: center;
`;

const CardSpan = styled.div`
  color: white;
  margin-left: 10px;
  margin-right: 5px;
`;

const CardContent = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  background: white;
  height: 120px;
  padding: 10px;
`;

const CardFooter = styled.div`
  border-top: 1px solid white;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: flex-end;
`;

const DeleteButton = styled.button`
  color: red;
  margin-left: 10px;
  margin-right: 20px;
`;

const PostCard = () => {
  return (
    <>
      <CardForm>
        <CardArea>
          <CardTitle>
            <CardSpan>이름</CardSpan>
            <CardSpan>홍길동</CardSpan>
          </CardTitle>
          <CardContent>내용</CardContent>
          <CardFooter>
            <DeleteButton>삭제</DeleteButton>
          </CardFooter>
        </CardArea>
      </CardForm>
    </>
  );
};

export default PostCard;
