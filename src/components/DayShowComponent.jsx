import React, { useEffect, useState, useRef } from "react";
import moment from "moment";
import {
  isDayContainCurrentEvent,
  isDayContainCurrentTimestamp,
	isCurrentDay,
} from "../helpers";
import {
  Button,
  EventBody,
  RedLine,
  HoursButton,
  PositionRelative,
  ListOfHours,
  SelectEventTimeWrapper,
  EventItemButton,
  ScaleCellEventWrapper,
  ScaleCellTimeWrapper,
  ScaleCellWrapper,
  ScaleWrapper,
  EventFormWrapper,
  EventsListWrapper,
  DayShowWrapper,
} from "../containers/StyledComponents";
import { ITEMS_PER_DAY } from "../helpers/constants";
import { eventMapper } from "../helpers/eventMapper";
import MyInput from "./UI/MyInput";

export const DayShowComponent = ({
  events,
  today,
  selectedEvent,
  changeEventHandler,
  cancelButtonHandler,
  eventFetchHandler,
  removeEventHandler,
  openFormHandler,
  updateEventByDragAndDrop,
}) => {
  const [heightDiv, setHeightDiv] = useState(0);
  const [widthDiv, setWidthDiv] = useState(0);
  const [eventMap, setEventMap] = useState([]);
  const [droppedHour, setDroppedHour] = useState(null);

	
  const ref = useRef(null);
  useEffect(() => {
    const eventList = events
		.filter((event) =>
      isDayContainCurrentEvent(event, today)
    );

    const map = eventMapper(eventList);

    const tempArr = [];
    map.forEach((column, rank) => {
      column.forEach((event) => {
        tempArr.push({ ...event, rank });
      });
    });

    setEventMap(tempArr);
    setHeightDiv(ref.current.clientHeight / ITEMS_PER_DAY);
    setWidthDiv((ref.current.clientWidth - 38) / map.size);
  }, [events]);

  const [showTimePicker, setShowTimePicker] = useState(false);
  const cells = [...new Array(ITEMS_PER_DAY)].map((_, i) => {});

  const setTimeForEvent = (i) => {
    setShowTimePicker(false);
    const time = moment.unix(+selectedEvent.date).hour(i).format("X");
    changeEventHandler(time, "date");
  };

  const getTopPosition = (event) => {
    return heightDiv * +moment.unix(+event.date).format("H");
  };

  const getRedLinePosition = () =>
    ((moment().format("X") - today.format("X")) / 86400) * 100;

  const onDragEndHandler = (e, event) => {
    const date = moment.unix(+event.date).hour(droppedHour).format("X");
    updateEventByDragAndDrop({ ...event, date });
  };

  const onDropHandler = (e, i) => {
    e.preventDefault();
    setDroppedHour(i);
  };

  const onDragOverHandler = (e) => {
    e.preventDefault();
  };

  return (
    <DayShowWrapper>
      <EventsListWrapper>
        <ScaleWrapper ref={ref}>
          {isDayContainCurrentTimestamp(moment().format("X"), today) ? (
            <RedLine position={getRedLinePosition()} />
          ) : null}
          {cells.map((_, i) => (
            <ScaleCellWrapper
              onDrop={(e) => onDropHandler(e, i)}
              onDragOver={onDragOverHandler}
            >
              <ScaleCellTimeWrapper>
                {i ? <>{`${i}`.padStart(2, "0")}:00</> : null}
              </ScaleCellTimeWrapper>
              <ScaleCellEventWrapper />
            </ScaleCellWrapper>
          ))}
          {eventMap.map((event, i) => (
            <EventItemButton
              draggable
              onDragEnd={(e) => onDragEndHandler(e, event)}
              w={widthDiv - 2}
              h={heightDiv * event.duration.toFixed(0) - 3}
              onClick={() => openFormHandler("Update", event)}
              left={32 + widthDiv * event.rank}
              top={getTopPosition(event) + 1}
            >
							{event.title}
            </EventItemButton>
          ))}
        </ScaleWrapper>
      </EventsListWrapper>
      <EventFormWrapper>
        {selectedEvent ? (
          <div className="border-2 border-gray-800 rounded-lg p-2 m-2">
            <MyInput
              value={selectedEvent.title}
              onChange={(e) => changeEventHandler(e.target.value, "title")}
              placeholder="ФИО"
            />
            <SelectEventTimeWrapper>
              <PositionRelative>
                <button>
                  {moment.unix(+selectedEvent.date).format("dddd, D MMMM")}
                </button>
              </PositionRelative>
              <PositionRelative>
                {showTimePicker ? (
                  <ListOfHours>
                    {[...new Array(ITEMS_PER_DAY)].map((_, i) => (
                      <li>
                        <HoursButton onClick={() => setTimeForEvent(i)}>
                          {`${i}`.padStart(2, "0")}:00
                        </HoursButton>
                      </li>
                    ))}
                  </ListOfHours>
                ) : null}
              </PositionRelative>
            </SelectEventTimeWrapper>
            <SelectEventTimeWrapper>
              <div>
                {" "}
                Выберите время: {}
                <button
                  onClick={() => setShowTimePicker((prevState) => !prevState)}
                >
                  {moment.unix(+selectedEvent.date).format("HH:mm")}
                </button>
              </div>
            </SelectEventTimeWrapper>
            <EventBody
              value={selectedEvent.description}
              onChange={(e) =>
                changeEventHandler(e.target.value, "description")
              }
              placeholder="Ваши контакты для связи: "
            />
            <div className="flex justify-between">
              <Button onClick={cancelButtonHandler}>Отменить</Button>
              <Button onClick={eventFetchHandler}>Записаться</Button>
              <Button danger onClick={removeEventHandler}>
                Удалить
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-center mt-1">
              <Button onClick={() => openFormHandler("Create", null, today)}>
                Записаться на прием
              </Button>
            </div>
          </>
        )}
      </EventFormWrapper>
    </DayShowWrapper>
  );
};
