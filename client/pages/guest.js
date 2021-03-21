import React from "react";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

const Guest = () => {
  return (
    <>
      <AppLayout>
        <PostForm />
        <PostCard />
      </AppLayout>
    </>
  );
};

export default Guest;
