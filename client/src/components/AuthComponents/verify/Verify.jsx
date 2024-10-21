import React, { useState, useRef } from 'react';
import { UserData } from '../../../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Verify() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const {btnLoading, verifyOtp} = UserData()
  const navigate = useNavigate()

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    // console.log("OTP Entered:", otpValue);
    await verifyOtp(Number(otpValue),navigate)
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email ba**@dipainhouse.com</p>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  {otp.map((data, index) => {
                    return (
                      <div className="w-12 h-12" key={index}>
                        <input
                          className="w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="text"
                          maxLength="1"
                          value={data}
                          onChange={(e) => handleChange(e.target, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          ref={(el) => (inputRefs.current[index] = el)}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col space-y-5">
                  <div>
                    <button
                      disabled={btnLoading}
                      type="submit"
                      className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                    >
                     {btnLoading?"Please Wait...":"Verify Account"} 
                    </button>
                  </div>
                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't receive the code?</p>{" "}
                    <a
                      className="flex flex-row items-center text-blue-600"
                      href="#"
                      rel="noopener noreferrer"
                    >
                      Resend
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
