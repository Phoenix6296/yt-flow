import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { BottomSheet, Button, Modal } from "../common";
import { submitOTP } from "../../utils/apis/OTP";
import { useRouter } from "next/navigation";

const useOTPTimer = (initialTime, isVisible) => {
  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    let interval;
    if (isVisible) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isVisible]);

  useEffect(() => {
    if (timer === 0) {
      clearInterval(interval);
    }
  }, [timer]);
  return timer;
};

export const OTPModal = ({ isVisible, setIsVisible, phoneno }) => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [isWrongOTP, setIsWrongOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const timer = useOTPTimer(30, isVisible);

  const handleOTPSubmit = () => {
    submitOTP(phoneno, otp, setLoading, setIsWrongOTP, setIsVisible, router);
  };

  const renderInput = (inputProps, index) => (
    <input
      {...inputProps}
      key={index}
      className={`border rounded-lg !w-[52px] !h-[52px] text-center text-black ${
        isWrongOTP ? "border-red" : "border-[#AFC6DA]"
      }`}
    />
  );

  return (
    <>
      <div className="lg:hidden block">
        <BottomSheet
          isVisible={isVisible}
          onClose={() => setIsVisible(!isVisible)}
          title={`OTP sent to ${phoneno}`}
          isTitleBorder={false}
        >
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
                onClick={handleOTPSubmit}
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
              loading={loading}
            />
          </form>
        </BottomSheet>
      </div>
      <div className="lg:block hidden">
        <Modal
          isVisible={isVisible}
          onClose={() => setIsVisible(!isVisible)}
          title={`OTP sent to ${phoneno}`}
          isTitleBorder={false}
        >
          <form
            onSubmit={handleOTPSubmit}
            className="w-full px-5 flex flex-col items-center gap-7 pb-5"
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
                onClick={handleOTPSubmit}
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
              loading={loading}
            />
          </form>
        </Modal>
      </div>
    </>
  );
};
