import React, { useState } from "react";
import moment from "moment";
import { AiOutlineDelete } from "react-icons/ai";
const MonthFullListPerson = ({
  title1,
  removeEventHandler,
  events,
}) => {
  const [showList, setShowList] = useState(false);

  return (
    <div>
      <h1
        onClick={() => {
          setShowList(prevState => !prevState);
        }}
        className="mb-5 text-center border-2 rounded-xl cursor-pointer hover:bg-orange-300 hover:text-black text-white text-2xl "
      >
        {title1}
      </h1>
      {showList ? (
        <div>
          <div className="bg-white rounded-2xl p-5">
            {events.map((event) => (
              <div key={event.id} className="flex justify-between mb-4 border shadow-xl rounded-2xl p-5">
                <div >
                  <div className="mb-1">{event.title}</div>
                  <hr className="mb-1" />
                  <div>
                    Дата - {moment.unix(+event.date).format("D MMMM")}. Время -{" "}
                    {moment.unix(+event.date).format("HH:mm")}
                  </div>
                </div>
                <AiOutlineDelete
                  danger
                  onClick={removeEventHandler}
                  className=" cursor-pointer text-5xl text-slate-300 hover:text-black"
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MonthFullListPerson;
