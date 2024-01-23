import React from "react";

const ContactUsForm = () => {
  return (
    <div>
      {/* In React, we generally do not include <html>, <head>, and <body> tags in components. */}
      {/* The <title> tag and meta tags are typically managed in the public/index.html file or using libraries like React Helmet for dynamic changes. */}
      <form action="mailto:mikefocken@gmail.com"method="get" encType="text/plain" >
        <label>
          Subject:
          <br />
          <input type="text" name="subject" placeholder="Your Subject" />
          <br />
        </label>
        <label>
          Email:
          <br />
          <input type="email" name="email" placeholder="Your Email" />
          <br />
        </label>
        <label>
          Message:
          <br />
          <textarea
            name="body"
            rows="5"
            cols="30"
            placeholder="Your Message"
          ></textarea>
          <br />
        </label>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactUsForm;
