import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { AiOutlineFacebook, AiOutlineYoutube } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";
import "./styles.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div class="p-3 bg-dark text-white">
        <a href="/">
          <FaRegEnvelope />
        </a>
        <a href="/">
          <AiOutlineFacebook />
        </a>
        <a href="/">
          <MdPhoneIphone />
        </a>
        <a href="/">
          <AiOutlineYoutube />
        </a>
      </div>
    </div>
  );
}
