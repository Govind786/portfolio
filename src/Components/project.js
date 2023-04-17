import portfolio from "../port.jpg";    

function Project() {
    return (
      <div className="text-white">
        <p className="text-3xl lg:pt-14 pt-6 text-center font-bold bg-gray-700">My Projects</p>
        <div id="project" className="bg-gray-700 lg:px-10 pt-6 pb-6">
        <div className="flex text-center mb-14 relative landing">
          <div className="overflow-hidden mx-6 mb-14 lg:mb-0 p-2 relative gov-c">
            <div className="gov-img object-cover h-full w-full">
              <img
                className="transition duration-300 ease-in-out shadow-black shadow-[0_2px_10px_2px_rgba(0,0,0,0.6)]"
                src={portfolio}
                alt=""
              />
            </div>
            <div className="gov absolute top-0 left-0 bg-black h-full lg:h-[180px] lg:w-[358px] m-2 flex flex-col opacity-90 invisible">
              <p className="text-2xl font-bold">My Web Portfolio</p>
              <p className="text-m px-6">
                Personal web profile made using ReactJS and Tailwind CSS
              </p>
              <p className="text-xs font-bold">
                <a className="text-blue-600 underline" href="#home">
                  View Project
                </a>
              </p>
            </div>
          </div>
          <div className="overflow-hidden mx-6 mb-14 lg:mb-0 p-2 relative gov-c">
            <div className="gov-img object-cover h-full w-full">
              <img
                className="transition duration-300 ease-in-out shadow-black shadow-[0_2px_10px_2px_rgba(0,0,0,0.6)]"
                src={portfolio}
                alt=""
              />
            </div>
            <div className="gov absolute top-0 left-0 bg-black h-full lg:h-[180px] lg:w-[358px] m-2 flex flex-col opacity-90 invisible">
              <p className="text-2xl font-bold">
                Criminal Activities Detection
              </p>
              <p className="text-m px-6">
                Violence Detection in CCTV videos using Machine Learning
              </p>
              <p className="text-xs font-bold">
                <a className="text-blue-600 underline" href="#home">
                  View Project
                </a>
              </p>
            </div>
          </div>
          <div className="overflow-hidden mx-6 p-2 relative gov-c">
            <div className="gov-img object-cover h-full w-full">
              <img
                className="transition duration-300 ease-in-out shadow-black shadow-[0_2px_10px_2px_rgba(0,0,0,0.6)]"
                src={portfolio}
                alt=""
              />
            </div>
            <div className="gov absolute top-0 left-0 bg-black h-full lg:h-[180px] lg:w-[358px] m-2 flex flex-col opacity-90 invisible">
              <p className="text-2xl font-bold">Visit My India</p>
              <p className="text-m">
                Statewise food and culture about the places of India made using
                ReactJS
              </p>
              <p className="text-xs font-bold">
                <a className="text-blue-600 underline" href="#home">
                  View Project
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex text-center mb-10 relative landing">
          <div className="overflow-hidden mx-6 mb-14 lg:mb-0 p-2 relative gov-c">
            <div className="gov-img object-cover h-full w-full">
              <img
                className="transition duration-300 ease-in-out shadow-black shadow-[0_2px_10px_2px_rgba(0,0,0,0.6)]"
                src={portfolio}
                alt=""
              />
            </div>
            <div className="gov absolute top-0 left-0 bg-black h-full lg:h-[180px] lg:w-[358px] m-2 flex flex-col opacity-90 invisible">
              <p className="text-2xl font-bold">FlavourSome</p>
              <p className="text-m px-6">
                Online Food Delivery web application made using Django(Python),
                HTML, CSS, JS
              </p>
              <p className="text-xs font-bold">
                <a className="text-blue-600 underline" href="#home">
                  View Project
                </a>
              </p>
            </div>
          </div>
          <div className="overflow-hidden mx-6 mb-14 lg:mb-0 p-2 relative gov-c">
            <div className="gov-img object-cover h-full w-full">
              <img
                className="transition duration-300 ease-in-out shadow-black shadow-[0_2px_10px_2px_rgba(0,0,0,0.6)]"
                src={portfolio}
                alt=""
              />
            </div>
            <div className="gov absolute top-0 left-0 bg-black h-full lg:h-[180px] lg:w-[358px] m-2 flex flex-col opacity-90 invisible">
              <p className="text-2xl font-bold">Innovative Learning</p>
              <p className="text-m px-6">
                Online Learning web application made using Django(Python), HTML,
                CSS, JS
              </p>
              <p className="text-xs font-bold">
                <a className="text-blue-600 underline" href="#home">
                  View Project
                </a>
              </p>
            </div>
          </div>
          <div className="overflow-hidden mx-6 p-2 relative gov-c">
            <div className="gov-img object-cover h-full w-full">
              <img
                className="transition duration-300 ease-in-out shadow-black shadow-[0_2px_10px_2px_rgba(0,0,0,0.6)]"
                src={portfolio}
                alt=""
              />
            </div>
            <div className="gov absolute top-0 left-0 bg-black h-full lg:h-[180px] lg:w-[358px] m-2 flex flex-col opacity-90 invisible">
              <p className="text-2xl font-bold">Easy Notes</p>
              <p className="text-m">
                Words on page converted into text file using easyOCR and Python.
              </p>
              <p className="text-xs font-bold">
                <a className="text-blue-600 underline" href="#home">
                  View Project
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default Project;