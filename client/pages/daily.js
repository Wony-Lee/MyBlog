import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import DailyPost from "../components/DailyComponents/dailyPost";
import DailyForm from "../components/DailyComponents/dailyForm";

const Daily = () => {
  const { dailyPost } = useSelector((state) => state.daily);
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
