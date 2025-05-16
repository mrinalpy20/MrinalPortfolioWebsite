import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { X } from "lucide-react";
import ".././output.css";
import Button from "./button";

//note down the input validation
function MailBox({ closeModal }) {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.Name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    // Validation Checks
    if (!name) {
      alert("Name cannot be empty.");
      return;
    }

    if (!email) {
      alert("Email cannot be empty.");
      return;
    }

    // Simple email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!message) {
      alert("Message cannot be empty.");
      return;
    }

    emailjs
      .sendForm(
        "service_zoajuuc",
        "template_vzjmehp",
        form.current,
        "vBRl4NZ4B5T8A6sT7"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset(); // Reset form on success
          closeModal(); // Close modal
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="modal fixed inset-0 flex items-center justify-center bg-white bg-opacity-15">
        <div className="w-[700px] h-[500px] rounded-xl bg-[#161819] flex flex-col">
          <button
            className="flex flex-row pt-2 justify-end pr-3"
            onClick={closeModal}
            type="button"
          >
            <X className="text-white w-6 h-6" />
          </button>

          {/* Name Input */}
          <div className="w-[88%] h-[10%] bg-[#272829] rounded-xl mt-2 ml-[5.5%] overflow-hidden">
            <input
              type="text"
              name="Name"
              placeholder="Name"
              className="w-full h-full pl-5 bg-transparent text-white text-lg font-semibold outline-none placeholder:text-white/60"
            />
          </div>

          {/* Email Input */}
          <div className="w-[88%] h-[10%] bg-[#272829] rounded-xl mt-3 ml-[5.5%] overflow-hidden">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full h-full pl-5 bg-transparent text-white text-lg font-semibold outline-none placeholder:text-white/60"
            />
          </div>

          {/* Message Input */}
          <div className="w-[88%] h-[42%] bg-[#272829] rounded-xl mt-3 ml-[5.5%] overflow-hidden">
            <textarea
              name="message"
              placeholder="Message"
              className="w-full h-full pl-5 mt-1 bg-transparent text-white text-lg font-semibold outline-none placeholder:text-white/60"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="ml-[5.5%]">
            <Button
              type="submit"
              width="w-[93%]"
              mt="3"
              color="bg-[#914bf1]"
              text="Send"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default MailBox;
