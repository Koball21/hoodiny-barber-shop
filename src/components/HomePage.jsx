import React, { useState } from "react";
import App from "./CalendarApp";
import Header from "./Header";
import ColorPage from "./ColorPage";
import PhotoPage from "./PhotoPage";
import ContactPage from "./ContactPage";
import MainPage from "./MainPage";
import {
  PHOTO_PAGE,
  CONTACT_PAGE,
  CALENDAR_PAGE,
  MAIN_PAGE,
} from "../helpers/constants";

const HomePage = () => {
  const [display, setDisplay] = useState(MAIN_PAGE);

  return (
    <ColorPage>
      <Header display={display} setDisplay={setDisplay} />
      <div className="flex justify-center p-10">
        {display === CALENDAR_PAGE ? <App /> : null}
      </div>
      {display === PHOTO_PAGE ? <PhotoPage /> : null}
      {display === CONTACT_PAGE ? <ContactPage /> : null}
      {display === MAIN_PAGE ? (
        <MainPage display={display} setDisplay={setDisplay} />
      ) : null}
    </ColorPage>
  );
};

export default HomePage;
