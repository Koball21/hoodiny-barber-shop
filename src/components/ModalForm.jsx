import React, { useState } from "react";
import moment from "moment";
import { DISPLAY_MODE_DAY } from "../helpers/constants";

import {
  EventBody,
  SelectEventTimeWrapper,
  ListOfHours,
  PositionRelative,
  HoursButton,
  Button,

} from "../containers/StyledComponents";
import { ITEMS_PER_DAY } from "../helpers/constants";
import MyInput from "./UI/MyInput";

const ModalForm = ({
  selectedEvent,
  changeEventHandler,
  cancelButtonHandler,
  eventFetchHandler,
  removeEventHandler,
	displayMode,
	setDisplayMode,
	setShowForm,
}) => {
  const [showTimePicker, setShowTimePicker] = useState(false);

  const setTimeForEvent = (i) => {
    setShowTimePicker(false);
    const time = moment.unix(+selectedEvent.date).hour(i).format("X");
    changeEventHandler(time, "date");
  };
	const openFullDayList = () => {
		setDisplayMode(DISPLAY_MODE_DAY)
		setShowForm(false)
		
	}
  return (

    <div>
      <div>
        <div className=" bg-gray-200 border-2 border-gray-800 rounded-lg p-2 m-2">
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
              Выберите время:{" "}
              <button
                onClick={() => setShowTimePicker((prevState) => !prevState)}
              >
                {moment.unix(+selectedEvent.date).format("HH:mm")}
              </button>
            </div>
          </SelectEventTimeWrapper>
          <EventBody
            value={selectedEvent.description}
            onChange={(e) => changeEventHandler(e.target.value, "description")}
            placeholder="Ваши контакты для связи:"
          />
          <div className="flex justify-between">
            <Button onClick={cancelButtonHandler}>Отменить</Button>
            <Button onClick={eventFetchHandler}>Записаться</Button>
            <Button danger onClick={removeEventHandler}>
              Удалить
            </Button>
          </div>
					<Button className="w-full mt-1"
        unPressed={displayMode === DISPLAY_MODE_DAY}
        onClick={openFullDayList}
      >
        Все записи на день
      </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
