import React from "react";
import { useSelector } from "react-redux";

import AppLayout from "../components/AppLayout";
import DailyContent from "../components/dailyContent";

const Daily = () => {
  const { dailyPost } = useSelector((state) => state.daily);
  return (
    <>
      <AppLayout>
        <DailyContent />
      </AppLayout>
    </>
  );
};

export default Daily;
