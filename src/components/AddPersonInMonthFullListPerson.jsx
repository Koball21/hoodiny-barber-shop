import React from "react";
import moment from "moment";
import { AiOutlineDelete } from "react-icons/ai";

const AddPersonInMonthFullListPerson = ({ removeEventHandler, event, }) => {
	return (
    <div>
      <div className="flex justify-between border shadow-xl rounded-2xl p-5">
        <div>
          <div className="mb-1">{event.title}</div>
          <hr className="mb-1" />
          <div>
						id - {event.id}
            Дата - {moment.unix(+event.date).format("D MMMM")}. 
						Время -{" "}
            {moment.unix(+event.date).format("HH:mm")}
          </div>
        </div>
        <AiOutlineDelete
          onClick={qwerrtyuuio}
          className=" cursor-pointer text-5xl text-slate-300 hover:text-black"
        />
      </div>
    </div>
  );
};

export default AddPersonInMonthFullListPerson;
