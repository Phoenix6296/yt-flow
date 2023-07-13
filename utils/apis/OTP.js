import { baseUrl, postData } from "../services";
import { toast } from "react-hot-toast";

export const submitForm = async (
  countryCode,
  phoneNo,
  isWhatsapp,
  setLoading,
  setOtpSent,
  setIsVisible,
  setPhoneno
) => {
  try {
    setLoading(true);
    const response = await postData(`${baseUrl}/sendOTP`, {
      countryCode: countryCode,
      phoneNo: phoneNo,
      isWhatsapp: isWhatsapp,
    });
    if (response.status === "success") {
      setPhoneno(phoneNo);
      setOtpSent(true);
      setIsVisible(false);
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(response.message || "Something went wrong");
    }
  } catch {
    setLoading(false);
    toast.error(response.message || "Something went wrong");
  }
};

export const submitOTP = async (
  phoneno,
  otp,
  setLoading,
  setIsWrongOTP,
  showModal,
  router
) => {
  try {
    setLoading(true);
    const response = await postData(`${baseUrl}/verifyOTP`, {
      phoneNo: phoneno,
      otp: otp,
    });
    if (response.status === "success") {
      setLoading(false);
      showModal(false);
      router.push("/ytflow");
    } else {
      setIsWrongOTP(true);
      setLoading(false);
      toast.error(response.message || "Something went wrong");
    }
  } catch {
    setIsWrongOTP(true);
    setLoading(false);
    toast.error(response.message || "Something went wrong");
  }
};
