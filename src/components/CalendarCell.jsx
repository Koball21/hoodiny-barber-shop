import React from "react";
import { isCurrentDay, isSelectedMonth } from "../helpers";
import {
  CellWrapper,
  RowInCell,
  EventItemWrapper,
  EventListItemWrapper,
  EventListWrapper,
  ShowDayWrapper,
  CurrentDay,
  DayWrapper,
} from "../containers/StyledComponents";


export const CalendarCell = ({ dayItem, today, openFormHandler, events }) => {
  return (
    <CellWrapper
      isWeekday={dayItem.day() === 6 || dayItem.day() === 0}
      key={dayItem.unix()}
      isSelectedMonth={isSelectedMonth(dayItem, today)}
      onClick={() => openFormHandler("Create", null, dayItem)}
    >
      <RowInCell justifyContent={"flex-end"}>
        <ShowDayWrapper>
          <DayWrapper>
            {isCurrentDay(dayItem) ? (
              <CurrentDay>{dayItem.format("D")}</CurrentDay>
            ) : (
              dayItem.format("D")
            )}
          </DayWrapper>
        </ShowDayWrapper>
        <EventListWrapper>
          {events.slice(0, 2).map((event) => (
            <EventListItemWrapper key={event.id}>
              <EventItemWrapper>{event.title}</EventItemWrapper>
            </EventListItemWrapper>
          ))}
        </EventListWrapper>
      </RowInCell>
    </CellWrapper>
  );
};
