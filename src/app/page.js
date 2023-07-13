"use client";
import { useState } from "react";
import { EnterPhoneModal } from "../../components/Blocks";
import Image from "next/image";
import { Button } from "../../components/common/Button";
import { OTPModal } from "../../components/Blocks/OTPModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [phoneno, setPhoneno] = useState("");
  return (
    <section className="flex flex-col items-center justify-evenly h-[100dvh]">
      <Image src="/common/logo.svg" alt="logo" width={160} height={150} />
      <Image src="/banner.svg" alt="banner" width={300} height={300} />
      <div className="flex flex-col gap-14 w-full px-4">
        <div className="flex flex-col gap-8">
          <p className="text-xl text-center font-semibold">
            Login to OpeninApp
          </p>
          <Button
            title={"Login with phone"}
            onClick={() => setShowModal(!showModal)}
            rounded="rounded-full"
            prefixIcon={"/phone-call-logo.svg"}
          />
        </div>
        <div className="text-deepGray text-xs text-center">
          <p>By signing in , You agree to OpeninApp&#39;s</p>
          <p>
            {" "}
            <span className="border-b pb-0.5 border-deepGray">
              Terms of service
            </span>{" "}
            &amp;{" "}
            <span className="border-b pb-0.5 border-deepGray">
              Privacy policy
            </span>
          </p>
        </div>
      </div>
      <EnterPhoneModal
        isVisible={showModal}
        setIsVisible={setShowModal}
        setOtpSent={setOtpSent}
        setPhoneno={setPhoneno}
      />
      <OTPModal
        isVisible={otpSent}
        setIsVisible={setOtpSent}
        phoneno={phoneno}
      />
    </section>
  );
}
