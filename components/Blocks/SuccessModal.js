import Image from "next/image";
import { BottomSheet, Button, Modal } from "../common";

export const SuccessModal = ({ isVisible, setIsVisible }) => {
  return (
    <>
      <div className="lg:hidden block">
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
              rounded="rounded-full"
              className={"bg-primary text-white"}
            />
          </section>
        </BottomSheet>
      </div>
      <div className="lg:block hidden">
        <Modal
          isVisible={isVisible}
          onClose={() => setIsVisible(!isVisible)}
          title="Connected Successfully"
        >
          <section className="w-full items-center justify-center px-5 flex flex-col gap-7 py-5">
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
              rounded="rounded-full"
              title={"Take me to OpeninApp"}
              className={"bg-primary text-white"}
            />
          </section>
        </Modal>
      </div>
    </>
  );
};
