import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../../../components/AppLayout";
import ListSection from "../../../components/Board/ListSection";

const List = () => {
  const dispatch = useDispatch();
  const { boardPost } = useSelector((state) => state.board);
  return (
    <AppLayout>
      {boardPost.map((board) => (
        <ListSection key={board.id} board={board} />
      ))}
    </AppLayout>
  );
};

export default List;
