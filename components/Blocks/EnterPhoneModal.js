"use client";
import Image from "next/image";
import { BottomSheet } from "../common/BottomSheet";
import { Input } from "../common/Input";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../common/Button";
import OTPInput from "react-otp-input";

export const EnterPhoneModal = ({ isVisible, setIsVisible }) => {
  const [countryCode, setCountryCode] = useState({
    name: "India",
    dial_code: "+91",
    code: "IN",
    emoji: "🇮🇳",
  });
  const [nextStep, setNextStep] = useState(false);

  const [phoneNo, setPhoneNo] = useState("");
  const [isWhatsapp, setIsWhatsapp] = useState(false);

  const [otp, setOtp] = useState("");
  const [isWrongOTP, setIsWrongOTP] = useState(false);
  const [timer, setTimer] = useState(30);

  const startTimer = useCallback(() => {
    if (nextStep) {
      return setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
  }, [nextStep]);

  const handleResendOTP = useCallback(() => {
    setTimer(30);
    // resendOTP(email, setTimer);
  }, []);

  const renderInput = (inputProps, index) => (
    <input
      {...inputProps}
      key={index}
      className={`border rounded-lg !w-[52px] !h-[52px] text-center text-black ${
        isWrongOTP ? "border-red" : "border-[#AFC6DA]"
      }`}
    />
  );

  useEffect(() => {
    const interval = startTimer();
    if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer, startTimer]);

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    console.log(otp, phoneNo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNextStep(true);
    console.log(countryCode?.dial_code, phoneNo, isWhatsapp);
  };
  return (
    <BottomSheet
      isVisible={isVisible}
      onClose={() => {
        setCountryCode({
          name: "India",
          dial_code: "+91",
          code: "IN",
          emoji: "🇮🇳",
        });
        setNextStep(false);
        setPhoneNo("");
        setIsWhatsapp(false);
        setOtp("");
        setIsWrongOTP(false);
        setTimer(30);
        setIsVisible(!isVisible);
      }}
      title={`${
        nextStep ? `OTP sent to ${phoneNo}` : "Enter phone number for OTP"
      }`}
      isTitleBorder={false}
    >
      {!nextStep ? (
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
            py={"py-4"}
            rounded="rounded-full"
            className={"bg-primary text-white"}
            type={"submit"}
          />
        </form>
      ) : (
        <form
          onSubmit={handleOTPSubmit}
          className="w-full px-5 flex flex-col items-center gap-7 pb-10"
        >
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span className="mr-4"></span>}
            renderInput={renderInput}
          />
          {timer > 0 ? (
            <p className="text-deepGray cursor-not-allowed">
              Resend OTP in <span className="font-bold">{timer}</span>
            </p>
          ) : (
            <p
              className="text-primary cursor-pointer"
              onClick={handleResendOTP}
            >
              Resend OTP
            </p>
          )}
          <Button
            title={"Confirm"}
            py={"py-4"}
            rounded="rounded-full"
            className={"bg-primary text-white"}
            type={"submit"}
          />
        </form>
      )}
    </BottomSheet>
  );
};
