import React from "react";
import AppLayout from "../../components/AppLayout";
import DailyPost from "../../components/dailyPost";
import DailyContainer from "../../components/DailyComponents/dailyContainer";

const Dailys = () => {
  return (
    <>
      <AppLayout>
        <DailyContainer />
      </AppLayout>
    </>
  );
};

export default Dailys;
