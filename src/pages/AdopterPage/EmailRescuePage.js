import React from "react";
import EmailForm from "./EmailForm";

const EmailRescuePage = () => {
  const sendEmail = async ({ recipient, subject, message }) => {
    try {
      // Make a POST request to your email sending API
      const response = await axios.post(
        "https://example.com/send-email", // Replace with your actual API endpoint
        {
          recipient,
          subject,
          message,
        }
      );

      // Check if the email was sent successfully (you can define your own criteria)
      if (response.status === 200) {
        alert("Email sent successfully!");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Email Rescue Page</h2>
      <EmailForm onSend={sendEmail} />
    </div>
  );
};

export default EmailRescuePage;
