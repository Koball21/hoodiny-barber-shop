import React from "react";
import moment from "moment";

export const CalendarGridHeader = () => (
  <>
    {[...Array(7)].map((_, i) => (
      <div
			className="bg-slate-300 border-y-2 border-slate-500 h-8 pl-3 pt-1"
			isHeader isSelectedMonth key={i}>
          {moment()
            .day(i + 1)
            .format("ddd")}
      </div>
    ))}
  </>
);
