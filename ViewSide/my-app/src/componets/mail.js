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
      <div className="modal fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="w-[90%] max-w-[700px] h-auto p-6 rounded-xl bg-[#161819] flex flex-col shadow-2xl relative">
          <button
            className="absolute top-4 right-4"
            onClick={closeModal}
            type="button"
          >
            <X className="text-white w-6 h-6" />
          </button>

          <h2 className="text-white text-2xl font-bold mb-6">Let's Talk</h2>

          {/* Name Input */}
          <div className="w-full bg-[#272829] rounded-xl mb-4 overflow-hidden">
            <input
              type="text"
              name="Name"
              placeholder="Name"
              className="w-full h-12 pl-5 bg-transparent text-white text-lg font-semibold outline-none placeholder:text-white/60"
            />
          </div>

          {/* Email Input */}
          <div className="w-full bg-[#272829] rounded-xl mb-4 overflow-hidden">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full h-12 pl-5 bg-transparent text-white text-lg font-semibold outline-none placeholder:text-white/60"
            />
          </div>

          {/* Message Input */}
          <div className="w-full bg-[#272829] rounded-xl mb-6 overflow-hidden">
            <textarea
              name="message"
              placeholder="Message"
              className="w-full h-32 pl-5 py-3 bg-transparent text-white text-lg font-semibold outline-none placeholder:text-white/60 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="w-full">
            <Button
              type="submit"
              width="w-full"
              color="bg-[#914bf1]"
              text="Send Message"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default MailBox;
