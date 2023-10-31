import React from "react";

const MyInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref}
        {...props}
        className=" w-full rounded-lg border-2 border-gray-800 mb-1 p-2"
      ></input>

    </div>
  );
})

export default MyInput;
