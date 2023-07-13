import { BottomSheet } from "../common/BottomSheet";

export const EnterPhoneModal = ({ isVisible, setIsVisible }) => {
  return (
    <BottomSheet
      isVisible={isVisible}
      onClose={() => setIsVisible(!isVisible)}
      title="Enter your phone number"
    >
      <div className="text-3xl">Hello</div>
    </BottomSheet>
  );
};
