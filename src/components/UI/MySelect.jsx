import React from "react";

const MySelect = ({ option, defValue, value, onChange }) => {
  return (
    <div className="mb-4">
      <select
        value={value}
				onChange={event => onChange(event.target.value)}
        className="w-36 rounded-lg border-2  p-2 mr-2 hover:bg-blue-300 "
      >
        <option disabled value="">
          {defValue}
        </option>
        {option.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
