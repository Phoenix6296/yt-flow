"use client";

import { COUNTRY_CODE } from "../../utils/constants";
import useOutsideClick from "../../utils/hooks/useOutsideClick";
import { useEffect, useRef, useState } from "react";

export const CountryCodeDropdown = ({ value, setValue, bgColor, onClick }) => {
  const [countries, setCountries] = useState(COUNTRY_CODE);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);
  useOutsideClick(ref, setOpen);

  useEffect(() => {
    if (search) {
      let a = countries.filter((item) => item?.dial_code?.includes(search));
      setCountries([...a]);
    } else {
      setCountries(COUNTRY_CODE);
    }
  }, [search]);

  return (
    <div ref={ref} className="w-24 h-full relative">
      <button
        className={`${bgColor} border border-black border-opacity-10 h-full py-3 px-2 rounded-lg w-24`}
        type="button"
        onClick={() => setOpen((p) => !p)}
      >
        {value?.emoji + " " + value?.dial_code}
      </button>
      {open ? (
        <div className="absolute top-0 bg-white z-50 flex flex-col max-h-40 overflow-scroll border border-black border-opacity-10 p-1 rounded-md w-full">
          <input
            className="focus:outline-none border border-black p-1 rounded-sm border-opacity-10 mb-1 w-full"
            placeholder="eg. +91"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {countries.map((item, index) =>
            item?.dial_code && item?.emoji ? (
              <div onClick={onClick}>
                <button
                  onClick={() => {
                    setValue(item);
                    setOpen(false);
                  }}
                  className="hover:bg-gray-100 p-1 text-left text-sm"
                  type="button"
                  key={item?.dial_code + index}
                >
                  {item?.emoji + " " + item?.dial_code}
                </button>
              </div>
            ) : null
          )}
        </div>
      ) : null}
    </div>
  );
};
