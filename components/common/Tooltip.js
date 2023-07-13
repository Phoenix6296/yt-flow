"use client";

import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
export const Tooltip = ({
  message,
  top,
  left,
  right,
  bottom,
  corner,
  onMouseEnterEvent,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setShow(true);
        onMouseEnterEvent;
      }}
      onMouseLeave={() => setShow(false)}
      className="relative cursor-pointer"
    >
      <div className="text-gray-500 hover:text-gray-800">
        <AiOutlineInfoCircle />
      </div>
      {show ? (
        <div
          className={`${corner} z-50 scale-in-center absolute ${top} ${left} ${right} ${bottom} bg-white p-2 rounded-lg w-40 text-gray-500 text-xs border border-black border-opacity-10 leading-5 text-center`}
        >
          {message}
        </div>
      ) : null}
    </div>
  );
};
