import Image from "next/image";
import { useEffect, useRef } from "react";
import useOutsideClick from "../../utils/hooks/useOutsideClick";

export const BottomSheet = ({
  isVisible,
  children,
  title,
  onClose,
  hide,
  isTitleBorder = true,
}) => {
  const ref = useRef(null);

  useOutsideClick(ref, null, onClose);

  useEffect(() => {
    const bodyElement = document.getElementsByTagName("body");
    bodyElement[0].style.overflow = isVisible ? "hidden" : "";
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      window?.google?.accounts.id.cancel();
    }
  }, [isVisible]);

  useEffect(() => {
    const bodyElement = document.getElementsByTagName("body");
    bodyElement[0].style.overflow = hide ? "hidden" : "";
  }, [hide]);

  if (hide) return;
  if (!isVisible) return;

  return (
    <div
      ref={ref}
      className="fixed h-full w-full bottom-0 left-1/2 transform -translate-x-1/2 backdrop-blur bg-black bg-opacity-50 z-50 flex items-end justify-center"
      onClick={onClose}
    >
      <div
        className={`flex flex-col bg-white w-full rounded-t-2xl slide-in-bottom`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-10 mx-auto h-1 rounded-full bg-lightBeerus my-2 cursor-pointer"></div>
        <h1 className="text-xl font-semibold text-black text-center w-full my-4 mb-7 px-7">
          {title}
        </h1>
        <div
          className={`${isTitleBorder && "border-b border-lightBeerus"}`}
        ></div>
        <div className="flex justify-center overflow-hidden">{children}</div>
      </div>
    </div>
  );
};
