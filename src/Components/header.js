import mine from "../mineshop.jpg";
import mine2 from "../minetable.jpeg";
import sistec from "../sistec.png";
import clry from "../clry.jpg";
import ops from "../ops.avif";
import "../App.css";
import React, { useState, useEffect } from "react";

const c = {
  width: "75%",
};
const py = {
  width: "83%",
};
const ds = {
  width: "78%",
};
const java = {
  width: "45%",
};
const dart = {
  width: "60%",
};
const htc = {
  width: "95%",
};
const js = {
  width: "82%",
};
const sql = {
  width: "76%",
};
const fire = {
  width: "72%",
};
const php = {
  width: "55%",
};
const dj = {
  width: "80%",
};
const rea = {
  width: "83%",
};

function Header() {
  const [text, setText] = useState("");
  const [fullText] = useState(
    "And I love to create beautiful and efficient code. I am Computer Science and Engineering Undergraduate. I have a strong passion for coding and wanted to give my best in this field. I am a quick learner and good team player. I am looking for a job where I can serve my best and enhance my knowledge."
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 50);
    }
  });

  const [text2, setText2] = useState("");
  const [fullText2] = useState("Hello there, I am Govind.");
  const [index2, setIndex2] = useState(0);

  useEffect(() => {
    if (index2 < fullText2.length) {
      setTimeout(() => {
        setText2(text2 + fullText2[index2]);
        setIndex2(index2 + 1);
      }, 150);
    }
  });

  return (
    <div className="text-white">
      <nav
        id="home"
        className="px-10 py-3 bg-gray-900 bg-gradient-to-b from-black to-gray-700 h-screen"
      >
        <div className="grid grid-cols-2 landing">
          <div className="py-4 my-10 lg:px-10 lg:py-28 lg:my-10">
            <h1 className="text-white text-5xl font-extrabold">{text2}</h1>
            <br />
            <br />
            <div className="flex justify-center lg:justify-start">
              <button className="text-white bg-blue-800 px-4 py-2 font-bold">
                <a href="#about">About Me</a>
              </button>
              <h2 className="mx-5 p-3 text-white font-bold cursor-pointer">
                <a href="#contact">Contact Me</a>
              </h2>
            </div>
          </div>
          <div className="lg:px-6 lg:pt-10 lg:my-10">
            <img
              className="w-[400px] h-[360px] lg:ml-20 lg:mt-10 lg:w-[400px] lg:h-[400px] rounded-full transition duration-300 ease-in-out shadow-black shadow-[0_10px_15px_5px_rgba(0,0,0,.6)] hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)] p-3 mine"
              src={mine}
              alt=""
            />
          </div>
        </div>
      </nav>
      <hr />
      <p id="about" className="text-3xl p-4 pt-16 text-center font-bold bg-gray-700">About Me</p>
      <div
        className="bg-gray-700 px-10 pt-4 grid grid-cols-2 gap-4 landing"
      >
        <div>
          <h2 className="font-bold text-3xl">I'm Govind Kushwaha</h2>
          <br />
          <p className="text-xl font-semibold text-justify text-slate-200 lg:pb-10">
            {text}
          </p>
          <br />
          <div className="flex">
            <a
              className="mx-2 ml-0"
              href="https://www.linkedin.com/in/govind-kushwaha-0b72a91b4/"
            >
              <svg
                className="w-10 h-10 lg:w-14 lg:h-14 text-blue-500 fill-current bg-black p-2 rounded-2xl"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>
            <a className="mx-2" href="https://github.com/Govind786/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 lg:w-14 lg:h-14 text-blue-500 fill-current bg-black p-2 rounded-2xl"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
            <a
              className="mx-2"
              href="https://www.youtube.com/channel/UCqxarKEB5CkMV-oM1V9q7oQ"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 lg:w-14 lg:h-14 text-blue-500 fill-current bg-black p-2 rounded-2xl"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
              className="mx-2"
              href="https://www.instagram.com/__govind__kushwaha/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 lg:w-14 lg:h-14 text-blue-500 fill-current bg-black p-2 rounded-2xl"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
            <a className="mx-2" href="https://twitter.com/GovindK35393834">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 lg:w-14 lg:h-14 text-blue-500 fill-current bg-black p-2 rounded-2xl"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a
              className="mx-2"
              href="https://www.facebook.com/profile.php?id=100022725930026"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 lg:w-14 lg:h-14 text-blue-500 fill-current bg-black p-2 rounded-2xl"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <img
            className="w-screen h-[500px] mb-14 mt-10 lg:mb-0 lg:mt-0 lg:ml-44 border border-black lg:w-2/4 lg:h-3/4 rounded-lg transition duration-300 ease-in-out shadow-black shadow-[0_10px_15px_5px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)] p-3 mine"
            src={mine2}
            alt=""
          />
        </div>
      </div>      
      <hr />
      <p id="skill" className="text-3xl p-4 pt-16 text-center font-bold bg-gray-700">Technical Skills</p>
      <div
        id="skill"
        className="bg-gray-700 px-5 lg:px-10 pt-4 pb-10 flex lg:items-center lg:pl-24 landing"
      >
        <div className="w-[95vw] lg:w-[40vw] lg:mr-16">
          <p className="font-bold mb-2">Python Programming (83%)</p>
          <div className="w-[90vw] lg:w-full p-1 bg-black">
            <div className="h-1 bg-white" style={py}></div>
          </div>
          <br />
          <p className="font-bold mb-2">Data Structure (78%)</p>
          <div className="w-[90vw] lg:w-full p-1 bg-black">
            <div className="h-1 bg-white" style={ds}></div>
          </div>
          <br />
          <p className="font-bold mb-2">C/C++ Programming (75%)</p>
          <div className="w-[90vw] lg:w-full p-1 bg-black">
            <div className="h-1 bg-white" style={c}></div>
          </div>
          <br />
          <p className="font-bold mb-2">Flutter Dart (60%)</p>
          <div className="w-[90vw] lg:w-full p-1 bg-black">
            <div className="h-1 bg-white" style={dart}></div>
          </div>
          <br />
          <p className="font-bold mb-2">PHP (55%)</p>
          <div className="w-[90vw] lg:w-full p-1 bg-black">
            <div className="h-1 bg-white" style={php}></div>
          </div>
          <br />
          <p className="font-bold mb-2">Java Programming (45%)</p>
          <div className="w-[90vw] lg:w-full p-1 bg-black">
            <div className="h-1 bg-white" style={java}></div>
          </div>
        </div>
        <div className="w-[95vw] lg:w-[40vw] lg:ml-16 pt-6 lg:pt-0">
          <p className="font-bold mb-2">HTML / CSS (95%)</p>
          <div className="w-[90vw] lg:w-full p-1 bg-black">
            <div className="h-1 bg-white" style={htc}></div>
          </div>
          <br />
          <p className="font-bold mb-2">ReactJS (83%)</p>
          <div className="w-[90vw] lg:w-full p-1 bg-black">
            <div className="h-1 bg-white" style={rea}></div>
          </div>
          <br />
          <p className="font-bold mb-2">JavaScript (82%)</p>
          <div className="w-[90vw] lg:w-full p-1 bg-black">
            <div className="h-1 bg-white" style={js}></div>
          </div>
          <br />
          <p className="font-bold mb-2">Django (80%)</p>
          <div className="w-[90vw] lg:w-full p-1 bg-black">
            <div className="h-1 bg-white" style={dj}></div>
          </div>
          <br />
          <p className="font-bold mb-2">SQL (76%)</p>
          <div className="w-[90vw] lg:w-full p-1 bg-black">
            <div className="h-1 bg-white" style={sql}></div>
          </div>
          <br />
          <p className="font-bold mb-2">FireBase (72%)</p>
          <div className="w-[90vw] lg:w-full p-1 bg-black">
            <div className="h-1 bg-white" style={fire}></div>
          </div>
        </div>
      </div>
      <hr />
      <p id="educ" className="text-3xl pt-14 text-center font-bold bg-gray-700">My Education</p>
      <div id="edu" className="bg-gray-700 lg:p-8 lg:pl-14">
        <div className="h-edu mx-8 text-center my-8 lg:my-0">
          <img
            className="h-52 w-80 p-2 shadow-black shadow-[0_10px_15px_5px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)]"
            src={sistec}
            alt=""
          />
          <br />
          <p className="font-bold text-xl">Undergraduate</p>
          <p className="pb-2 font-bold text-xs">(2019 - Present)</p>
          <p className="px-10 text-justify transition duration-300 ease-in-out invisible educate text-xs">
            Doing Bachelor of Technolohy in Computer Science & Engineering
            branch from Sagar Institute of Science, Technology & Research
            (SISTec-R), Bhopal with{" "}
            <span className="font-bold">(9.17 SGPA).</span>
          </p>
        </div>
        <div className="mx-8 h-edu text-center my-8 lg:my-0">
          <img
            className="h-52 w-80 p-2 shadow-black shadow-[0_10px_15px_5px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)]"
            src={clry}
            alt=""
          />
          <br />
          <p className="font-bold text-xl">
            12<sup>th</sup> Standard
          </p>
          <p className="pb-2 font-bold text-xs">(2018 - 2019)</p>
          <p className="px-10 text-justify transition duration-300 ease-in-out invisible educate text-xs">
            Done my Higher Secondary Education from C.L. Arya Science Higher
            Secondary School, M.P. with{" "}
            <span className="font-bold">(85.6%).</span>
          </p>
        </div>
        <div className="mx-8 h-edu text-center my-8 lg:my-0">
          <img
            className="h-52 w-80 p-2 shadow-black shadow-[0_10px_15px_5px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)]"
            src={ops}
            alt=""
          />
          <br />
          <p className="font-bold text-xl">
            10<sup>th</sup> Standard
          </p>
          <p className="pb-2 font-bold text-xs">(2016 - 2017)</p>
          <p className="px-10 text-justify transition duration-300 ease-in-out invisible educate text-xs">
            Done my Higher Education from Oriental Public Higher Secondary
            School, M.P. with <span className="font-bold">(88.83%).</span>
          </p>
        </div>
      </div>
      <hr />
      <p id="contacts" className="text-3xl pt-14 text-center font-bold bg-gray-700">Contact Me</p>
      <div id="contact" className="bg-gray-700 p-10">
        <div className="h-edu mx-8 lg:mx-20 text-center flex flex-col items-center shadow-black shadow-[0_10px_15px_5px_rgba(0,0,0,0.6)] p-4 hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)] mb-5">
          <svg
            className="h-10 w-10 text-red-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />{" "}
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
          <p className="font-bold text-xl">Phone</p>
          <p className="pb-2 font-bold text-xs">+91 9074793605</p>
        </div>
        <div className="h-edu mx-8 lg:mx-20 text-center flex flex-col items-center shadow-black shadow-[0_10px_15px_5px_rgba(0,0,0,0.6)] p-4 hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)] my-5">
          <svg
            className="h-10 w-10 text-red-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <p className="font-bold text-xl">Email</p>
          <p className="pb-2 font-bold text-xs">govindkushwaha0786@gmail.com</p>
        </div>
        <div className="h-edu mx-8 lg:mx-20 text-center flex flex-col items-center shadow-black shadow-[0_10px_15px_5px_rgba(0,0,0,0.6)] p-4 hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)] mt-5">
          <svg
            className="h-10 w-10 text-red-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="font-bold text-xl">Address</p>
          <p className="pb-2 font-bold text-xs">
            84, Betwa Colony, Bhopal (M.P.)
          </p>
        </div>
        <form action="/" method="post" className="lg:w-[1300px] mt-20 form-me lg:pl-10 landing">
          <div className="flex flex-col lg:pl-20">
            <input
              type="text"
              placeholder="Name"
              className="shadow-black shadow-[0_4px_10px_1px_rgba(0,0,0,0.6)] p-2 my-4 border-full rounded-2xl outline-0 bg-transparent hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)] lg:w-3/4"
            ></input>
            <input
              type="email"
              placeholder="E-mail"
              className="shadow-black shadow-[0_4px_10px_1px_rgba(0,0,0,0.6)] p-2 my-4 border-full rounded-2xl outline-0 bg-transparent hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)] lg:w-3/4"
            ></input>
            
            <input
              type="text"
              placeholder="Phone"
              className="shadow-black shadow-[0_4px_10px_1px_rgba(0,0,0,0.6)] p-2 my-4 rounded-2xl outline-0 bg-transparent hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)] lg:w-3/4"
            ></input>
          </div>
          <div className="flex">
            <textarea placeholder="Enter your message.." name="msg" className="shadow-black shadow-[0_4px_10px_1px_rgba(0,0,0,0.6)] p-2 my-4 rounded-2xl outline-0 bg-transparent hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)] w-full h-44 lg:h-auto lg:w-3/4"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Header;
