import React from "react";

const DateComponent = ({ date }: { date: string }) => {
  const data_psot = new Date(date).toDateString();
  return <>{data_psot}</>;
};

export default DateComponent;
