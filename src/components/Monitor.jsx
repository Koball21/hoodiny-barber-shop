import React from "react";
import { DISPLAY_MODE_DAY, DISPLAY_MODE_MONTH } from "../helpers/constants";
import { BsArrowRightSquare } from "react-icons/bs";
import { BsArrowLeftSquare } from "react-icons/bs";
import { Button }from "../containers/StyledComponents";


const Monitor = ({
  today,
  prevHandler,
  todayHandler,
  nextHandler,
  setDisplayMode,
  displayMode,
}) => (
  <div className="bg-gray-500 border-b-2 border-slate-500 flex justify-between rounded-t-lg p-2 pl-6 pr-6">
    <div className="text-white text-xl border-b-2 pl-2 pr-2">
      {today.format("DD-MMMM-YYYY")}
    </div>
    <div>
      <Button
        unPressed={displayMode === DISPLAY_MODE_MONTH}
        onClick={() => setDisplayMode(DISPLAY_MODE_MONTH)}
      >
        Месяц
      </Button>
      <Button
        unPressed={displayMode === DISPLAY_MODE_DAY}
        onClick={() => setDisplayMode(DISPLAY_MODE_DAY)}
      >
        День
      </Button>
    </div>
    <div className="flex text-lg border-2 pl-2 pr-2 rounded-lg">
      <button
        className="text-white mr-1 hover:text-orange-400"
        onClick={prevHandler}
      >
        <BsArrowLeftSquare />
      </button>
      <button
        className="text-white mr-1 pl-1 pr-1 hover:text-orange-400 "
        onClick={todayHandler}
      >
        Today
      </button>
      <button
        className="text-white hover:text-orange-400"
        onClick={nextHandler}
      >
        <BsArrowRightSquare />
      </button>
    </div>
  </div>
);

export { Monitor };
