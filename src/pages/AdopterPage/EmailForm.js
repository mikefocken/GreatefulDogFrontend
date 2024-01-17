import React, { useState } from 'react';

const EmailForm = ({ onSend }) => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendEmail = () => {
    // Validation and error handling can be added here
    onSend({ recipient, subject, message });
  };

  return (
    <div>
      <h2>Email Rescue Page</h2>
      <form>
        <div>
          <label>To:</label>
          <input
            type="email"
            value={recipient}
            onChange={handleRecipientChange}
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={handleSubjectChange}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </div>
        <button type="button" onClick={handleSendEmail}>
          Send
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
