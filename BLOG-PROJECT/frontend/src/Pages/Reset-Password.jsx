import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../assets/css/login.css'

function ResetPassword() {
  const [formData, setFormData] = useState({ 
    email: "", 
    otp: "", 
    newpassword: "" 
  });
  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post("http://localhost:8080/forgotPassword", {
        email: formData.email
      });
      
      console.log("OTP Response:", response.data); // Debug log
      alert(response.data.msg);
      setStep(2);
    } catch (error) {
      console.error("Error sending OTP:", error.response?.data || error);
      setErrorMessage(error.response?.data?.msg || "Error sending OTP. Please try again.");
    }
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    
    console.log("Sending reset request with data:", {  // Debug log
      email: formData.email,
      otp: formData.otp,
      newpassword: formData.newpassword
    });

    try {
      const response = await axios.post("http://localhost:8080/resetPassword", {
        email: formData.email,
        otp: formData.otp,
        newpassword: formData.newpassword  // Keep this as newpassword if that's what your backend expects
      });
      
      console.log("Reset Response:", response.data); // Debug log
      
      if (response.data) {
        alert("Password reset successful!");
        navigate("/login");
      } else {
        setErrorMessage("Failed to reset password. Please try again.");
      }
    } catch (error) {
      console.error("Reset Error:", error.response?.data || error); // Debug log
      setErrorMessage(
        error.response?.data?.message || 
        "Error resetting password. Please check your details and try again."
      );
    }
  };

  return (
    <div id="loginForm">
      <h1>Reset your Password</h1>
      <small>Please follow the steps to reset your password.</small>
      
      {errorMessage && (
        <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>
          {errorMessage}
        </div>
      )}

      {step === 1 ? (
        <form onSubmit={handleEmailSubmit} id="createAccountForm">
          <input
            id="email"
            type="email"
            placeholder="Enter your registered email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            name="email"
          />
          <button type="submit" id="createAccount">
            Send OTP
          </button>
        </form>
      ) : (
        <form id="createAccountForm" onSubmit={handleResetSubmit}>
          <input
            id="otp"
            type="text"
            placeholder="Enter the OTP sent to your email"
            value={formData.otp}
            onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
            required
            name="otp"
          />
          <input
            id="newpassword"
            type="password"
            placeholder="Enter your new password"
            value={formData.newpassword}
            onChange={(e) => setFormData({ ...formData, newpassword: e.target.value })}
            required
            name="newpassword"
          />
          <button type="submit" id="createAccount">
            Reset Password
          </button>
        </form>
      )}
    </div>
  );
}

export default ResetPassword;