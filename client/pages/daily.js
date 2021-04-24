import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";

const Daily = () => {
  return (
    <>
      <AppLayout>
        <DailyForm />
        {/* {dailyPost.map((daily) => (
          <DailyPost key={daily.id} daily={daily} />
        ))} */}
      </AppLayout>
    </>
  );
};

export default Daily;
