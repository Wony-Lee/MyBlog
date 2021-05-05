import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../../../components/AppLayout";
import ListHeadTitle from "../../../components/Board/ListHeadTitle";
import ListSection from "../../../components/Board/ListSection";
import { LOAD_BOARDS_REQUEST } from "../../../reducer/board";
import axios from "axios";
import wrapper from "../../../store/configureStore";
import { END } from "redux-saga";

const List = () => {
  const dispatch = useDispatch();
  const { boardPost, hasMoreBoards, loadBoardsLoading } = useSelector(
    (state) => state.board
  );

  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMoreBoards && !loadBoardsLoading) {
          const lastId = boardPost[boardPost.length - 1]?.id;
          dispatch({
            type: LOAD_BOARDS_REQUEST,
            lastId,
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMoreBoards, loadBoardsLoading, boardPost]);

  return (
    <AppLayout>
      <ListHeadTitle />
      {boardPost.map((board) => (
        <ListSection key={board.id} board={board} />
      ))}
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_BOARDS_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default List;
