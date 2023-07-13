"use client";
import Image from "next/image";
import { BottomSheet } from "../common/BottomSheet";
import { Input } from "../common/Input";
import { useState } from "react";
import { Button } from "../common/Button";

export const EnterPhoneModal = ({ isVisible, setIsVisible }) => {
  const [countryCode, setCountryCode] = useState({
    name: "India",
    dial_code: "+91",
    code: "IN",
    emoji: "🇮🇳",
  });

  const [phoneNo, setPhoneNo] = useState("");
  const [isWhatsapp, setIsWhatsapp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(countryCode?.dial_code, phoneNo, isWhatsapp);
  };
  return (
    <BottomSheet
      isVisible={isVisible}
      onClose={() => setIsVisible(!isVisible)}
      title="Enter phone number for OTP"
      isTitleBorder={false}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full px-5 flex flex-col gap-7 pb-10"
      >
        <Input
          placeholder={"Enter your phone no"}
          isCountry={true}
          type={"tel"}
          countryCode={countryCode}
          setCountryCode={setCountryCode}
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        <div className="flex items-cente gap-2">
          <input
            type={"checkbox"}
            value={isWhatsapp}
            onChange={(e) => setIsWhatsapp(e.target.checked)}
          />
          <div className="flex gap-2 items-center">
            <span>Recieve on </span>
            <Image
              src="/common/whatsapp-logo.svg"
              alt="whatsapp"
              width={20}
              height={20}
            />
            <span> Whatsppp</span>
          </div>
        </div>
        <Button
          title={"Continue"}
          onClick={() => {}}
          py={"py-4"}
          rounded="rounded-full"
          className={"bg-primary text-white"}
          type={"submit"}
        />
      </form>
    </BottomSheet>
  );
};
