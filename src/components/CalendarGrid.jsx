import React from "react";
import styled from "styled-components";
import { CalendarGridHeader } from "./CalendarGridHeader";
import { MonthDaysList } from "./MonthDaysList";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const CalendarGrid = ({
  startDay,
  today,
  totalDays,
  events,
  openFormHandler,
  setDisplayMode,
}) => {
  return (
    <>
      <GridWrapper >
        <CalendarGridHeader />
      </GridWrapper>
      <GridWrapper>
        <MonthDaysList
          totalDays={totalDays}
          openFormHandler={openFormHandler}
          events={events}
          startDay={startDay}
          today={today}
          setDisplayMode={setDisplayMode}
        />
      </GridWrapper>
    </>
  );
};

export { CalendarGrid };
