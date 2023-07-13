import Image from "next/image";
import { BottomSheet } from "../common/BottomSheet";
import { Button } from "../common/Button";

export const SuccessModal = ({ isVisible, setIsVisible }) => {
  return (
    <BottomSheet
      isVisible={isVisible}
      onClose={() => setIsVisible(!isVisible)}
      title="Connected Successfully"
    >
      <section className="w-full items-center justify-center px-5 flex flex-col gap-7 py-10">
        <Image
          src="/common/tick-logo.svg"
          alt="success"
          width={80}
          height={80}
        />
        <h1 className="font-semibold text-center mb-5">
          Thank you for connecting your Youtube account with OpeninApp
        </h1>
        <Button
          title={"Take me to OpeninApp"}
          className={"bg-primary text-white"}
        />
      </section>
    </BottomSheet>
  );
};
