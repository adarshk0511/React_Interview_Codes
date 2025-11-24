import { useState } from "react";

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
        <div>Enter OTP sent to {phoneNumber}</div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
