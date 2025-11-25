import { useState } from "react";
import OtpInput from "./otp-input";
const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    //number validation
    const regex = /[^0-9]/g;

    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone number");
      return;
    }

    //If all pass then ping backend
    //show OTP field
    setShowOtpInput(true);
  };

  const onOtpSubmit = (opt) => {
    console.log("login Successfull");
  };
  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
