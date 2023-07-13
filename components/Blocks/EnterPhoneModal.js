import { useState } from "react";
import Image from "next/image";
import { Input, Button, Modal, BottomSheet } from "../common";
import { submitForm } from "../../utils/apis/OTP";

const INITIAL_COUNTRY_CODE = {
  name: "India",
  dial_code: "+91",
  code: "IN",
  emoji: "🇮🇳",
};

export const EnterPhoneModal = ({
  isVisible,
  setIsVisible,
  setOtpSent,
  setPhoneno,
}) => {
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState(INITIAL_COUNTRY_CODE);
  const [phoneNo, setPhoneNo] = useState("");
  const [isWhatsapp, setIsWhatsapp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(
      countryCode?.dial_code,
      phoneNo,
      isWhatsapp,
      setLoading,
      setOtpSent,
      setIsVisible,
      setPhoneno
    );
  };

  return (
    <>
      <div className="lg:hidden block">
        <BottomSheet
          isVisible={isVisible}
          onClose={() => {
            setCountryCode(INITIAL_COUNTRY_CODE);
            setPhoneNo("");
            setIsWhatsapp(false);
            setIsVisible(!isVisible);
          }}
          title={"Enter phone number for OTP"}
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
              py={"py-4"}
              rounded="rounded-full"
              className={"bg-primary text-white"}
              type={"submit"}
              loading={loading}
            />
          </form>
        </BottomSheet>
      </div>
      <div className="lg:block hidden">
        <Modal
          isVisible={isVisible}
          onClose={() => {
            setCountryCode(INITIAL_COUNTRY_CODE);
            setPhoneNo("");
            setIsWhatsapp(false);
            setIsVisible(!isVisible);
          }}
          title={"Enter phone number for OTP"}
          isTitleBorder={false}
        >
          <form
            onSubmit={handleSubmit}
            className="w-full px-5 flex flex-col gap-7 py-5"
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
              loading={loading}
            />
          </form>
        </Modal>
      </div>
    </>
  );
};
