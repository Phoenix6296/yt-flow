import Image from "next/image";
import { useEffect } from "react";

export const BottomSheet = ({ isVisible, children, title, onClose, hide }) => {
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
    <div className="fixed h-full w-full bottom-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 z-50">
      <div
        className={`flex flex-col absolute bottom-0 bg-white w-full rounded-t-2xl slide-in-bottom`}
      >
        <div className="w-10 mx-auto h-1 rounded-full bg-lightBeerus my-2 cursor-pointer"></div>
        <div className="flex items-center justify-between my-4 px-7">
          <h1 className="text-xl leading-8 font-semibold tracking-wide text-black">
            {title}
          </h1>
          <button onClick={onClose}>
            <Image height={14} width={14} src="/common/close.svg" alt="close" />
          </button>
        </div>
        <div className="border-b border-lightBeerus"></div>
        <div className="flex justify-center overflow-hidden">{children}</div>
      </div>
    </div>
  );
};
