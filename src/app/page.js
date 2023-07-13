"use client";

import { useState } from "react";
import { EnterPhoneModal } from "../../components/Blocks";
import Image from "next/image";
import { Button } from "../../components/common/Button";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="flex flex-col items-center justify-evenly h-screen">
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
            <span className="hover:underline cursor-pointer">
              Terms of service
            </span>{" "}
            &{" "}
            <span className="hover:underline cursor-pointer">
              Privacy policy
            </span>
          </p>
        </div>
      </div>
      <EnterPhoneModal isVisible={showModal} setIsVisible={setShowModal} />
    </section>
  );
}
