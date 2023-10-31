import React from "react";
import { Button } from "../containers/StyledComponents";
import { CALENDAR_PAGE } from "../helpers/constants";

const MainPage = ({ display, setDisplay }) => {
  return (
    <div className="">
      <img
        className="w-3/4 z-10 relative"
        src="https://mykaleidoscope.ru/x/uploads/posts/2023-05/1684997148_mykaleidoscope-ru-p-strizhka-bevel-krasivo-46.jpg"
      />
      <div className=" bg-gray-200/5 border-2 border-gray-900 rounded-lg p-3 m-2 w-3/5">
        <h1 className="text-2xl text-white font-mono mb-5">
          Я Супер пупер барбер, хочешь стрижку тогда кликай на кнопку
        </h1>
        <Button
          unPressed={display === CALENDAR_PAGE}
          onClick={() => setDisplay(CALENDAR_PAGE)}
          className="bg-slate-400 w-96"
        >
          Записаться на стрижку
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
