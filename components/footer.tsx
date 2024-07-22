import React from "react";
import { HiMail } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';
import Link from "next/link";

export default function Footer() {
  const email = "damolakevwe@gmail.com";

  const handleEmailClick = (e: any) => {
    e.preventDefault();
    window.location.href = `mailto:${email}`;
  };
  return (
    <footer className="text-center items-center align-middle flex flex-row w-full">
      <div className="sm:ml-[20rem] text-[10px] sm:text-base px-4  flex flex-row justify-between items-center bg-gradient-to-r from-white to-pink-200 w-full h-[80px]">
        <p className="text-pink-400 font-medium">
          Damola Kevwe | Designer | damolakevwe@gmail.com
        </p>
        <div className="flex items-center space-x-4">
          <Link href="https://www.linkedin.com/in/oluwadamola-olaleye-29b10279/">
            <FaLinkedin className="sm:w-6 sm:h-6 w-5 h-5 text-pink-400" />
          </Link>
          <a href={`mailto:${email}`} onClick={handleEmailClick}>
            <HiMail className="sm:w-6 sm:h-6 w-5 h-5 text-pink-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}