import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

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

const PostCard = ({ post }) => {
  const id = useSelector((state) => state.user.user?.id);

  return (
    <>
      <CardForm>
        <CardArea>
          <CardTitle>
            <CardSpan>이름</CardSpan>
            <CardSpan> {post.User.nickname}</CardSpan>
          </CardTitle>
          <CardContent>
            {post.content}
            내용
          </CardContent>
          <CardFooter>
            {id && guest.User.id === id ? (
              <>
                <DeleteButton>삭제</DeleteButton>
              </>
            ) : (
              <>
                <div>없음</div>
              </>
            )}
          </CardFooter>
        </CardArea>
      </CardForm>
    </>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createAt: PropTypes.object,
  }).isRequired,
};

export default PostCard;
