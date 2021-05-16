import React from "react";
import styled from "@emotion/styled";
import PostImages from "./postImages";
import BoardContents from "./BoardContents";
import moment from "moment";

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

const PhotoZone = styled.div``;

const ListContentSpan = styled.span`
    font-size: 15pt;
    padding: 15px;
`;

const ListEtcSpan = styled.span`
    font-size: 10pt;
    padding: 5px 15px;
`;

const HashTagForm = styled.div`
    margin: 10px;
`;

moment.locale("ko");

const ListSection = ({ board }) => {
    return (
        <ListForm>
            <ListSectionForm>
                <ListTitleSpan>{board.boardTitle}</ListTitleSpan>
                <PhotoZone>
                    {board.Images[0] && <PostImages images={board.Images} />}
                </PhotoZone>
                <ListContentSpan>{board.boardContent}</ListContentSpan>
                <ListEtcSpan>
                    {moment(board.createdAt).format("YYYY-MM-DD HH-mm")}
                </ListEtcSpan>
                <HashTagForm>
                    <BoardContents boardData={board.boardContent} />
                </HashTagForm>
            </ListSectionForm>
        </ListForm>
    );
};

export default ListSection;
