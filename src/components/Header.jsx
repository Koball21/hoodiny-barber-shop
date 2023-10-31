import React, { useState } from "react";
import { SiGooglepodcasts } from "react-icons/si";
import { Button } from "../containers/StyledComponents";
import { PHOTO_PAGE, CONTACT_PAGE, CALENDAR_PAGE, MAIN_PAGE } from "../helpers/constants";

const Header = ({ display, setDisplay }) => {
  const [hoodyni, setHoodyni] = useState(false);
  return (
    <div className="flex bg-slate-700 text-white  p-2 ">
      <button
        onClick={() => setHoodyni((prevState) => !prevState)}
        className=" text-7xl mr-5 hover:text-orange-400"
      >
        <SiGooglepodcasts />
      </button>
      {hoodyni ? (
        <div onClick={(e) => e.stopPropagation()} className="mt-3">
          <Button
            white
            unPressed={display === MAIN_PAGE}
            onClick={() => setDisplay(MAIN_PAGE)}
          >
            Главная
          </Button>
          <Button
            white
            unPressed={display === CALENDAR_PAGE}
            onClick={() => setDisplay(CALENDAR_PAGE)}
          >
            Календарь
          </Button>
          <Button
            white
            unPressed={display === PHOTO_PAGE}
            onClick={() => setDisplay(PHOTO_PAGE)}
          >
            Фото
          </Button>
          <Button
            white
            unPressed={display === CONTACT_PAGE}
            onClick={() => setDisplay(CONTACT_PAGE)}
          >
            Контакты
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
