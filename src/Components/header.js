import React, { useState, useEffect } from "react";

function Header() {

  const mq = document.getElementsByClassName['mq-block'];

  return (
    <div>
      <div className="hidden mq-block bg-black justify-end p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    <ul className="fixed bg-black flex px-5 py-2 w-screen justify-center mq-none">
      <div className="hidden mq-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <a href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="text-white h-7 w-7"
          viewBox="0 0 24 24"
        >
          <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61"></path>
        </svg>
      </a>
      <li className="mx-3 px-2 text-white cursor-pointer font-bold hover:text-gray-400">
        <a href="/">Home</a>
      </li>
      <li className="mx-3 px-2 text-white cursor-pointer font-bold hover:text-gray-400">
        <a href="/#about">About</a>
      </li>
      <li className="mx-3 px-2 text-white cursor-pointer font-bold hover:text-gray-400">
        <a href="/#skill">Skills</a>
      </li>
      <li className="mx-3 px-2 text-white cursor-pointer font-bold hover:text-gray-400">
        <a href="/#educ">Educations</a>
      </li>
      <li className="mx-3 px-2 text-white cursor-pointer font-bold hover:text-gray-400">
        <a href="/#contacts">Contact Me</a>
      </li>
      <li className="mx-3 px-2 text-white cursor-pointer font-bold hover:text-gray-400">
        <a href="/project">Projects</a>
      </li>
      <li className="mx-3 px-2 text-white cursor-pointer font-bold hover:text-gray-400">
        <a href="/achievement">Achievements</a>
      </li>
      <li className="mx-3 px-2 text-white cursor-pointer font-bold hover:text-gray-400">
        <a href="/certificate">Certificates</a>
      </li>
    </ul>
    </div>
  );
}

export default Header;