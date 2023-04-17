import sih from "../SIH_1.jpg";
import manthan from "../Sagar_Manthan_1.jpg";
import master from "../Branch_Master_1.jpg";
import ch5 from "../codehunt.jpg";
import btop from "../branch_1.jpg";
import prastuti from "../prastuti.jpg";

function Achievement() {
    return (
        <div className="text-white">
            <p className="text-3xl lg:pt-14 pt-6 text-center font-bold bg-gray-700">Achievements</p>
            <div className="bg-gray-700 lg:p-8 lg:pl-14 achieve landing">
                <div className="h-edu mx-8 text-center my-10">
                    <img
                        className="h-52 w-80 p-2 shadow-black shadow-[0_10px_15px_5px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)]"
                        src={sih}
                        alt=""
                    />
                    <br />
                    <p className="font-bold text-xl">SIH - 2022</p>
                    <p className="pb-2 font-bold text-s">(Finalist)</p>
                    <p className="px-10 text-justify transition duration-300 ease-in-out invisible educate text-xs">
                        We are the Runner up in Smart India Hackathon 2022 held by Govt. of India. I was the Team Leader of my Team. 
                    </p>
                </div>
                <div className="h-edu mx-8 text-center mb-10">
                    <img
                        className="h-52 w-80 p-2 shadow-black shadow-[0_10px_15px_5px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)]"
                        src={manthan}
                        alt=""
                    />
                    <br />
                    <p className="font-bold text-xl">
                        Sagar Manthan - 2022
                    </p>
                    <p className="pb-2 font-bold text-s">(Star Performer)</p>
                    <p className="px-10 text-justify transition duration-300 ease-in-out invisible educate text-xs">
                        Sagar Manthan 2022 was organised by Training & Placement Team of my college. I won the competition of Star performer of the event.
                    </p>
                </div>
                <div className="h-edu mx-8 text-center mb-10">
                    <img
                        className="h-52 w-80 p-2 shadow-black shadow-[0_10px_15px_5px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)]"
                        src={master}
                        alt=""
                    />
                    <br />
                    <p className="font-bold text-xl">
                        Branch Master - 2022
                    </p>
                    <p className="pb-2 font-bold text-s">(Winner)</p>
                    <p className="px-10 text-justify transition duration-300 ease-in-out invisible educate text-xs">
                        Branch Master was organused by CSE Department of my college and I won the event.
                    </p>
                </div>
            </div>
            <div className="bg-gray-700 lg:p-8 lg:pl-14 achieve landing">
                <div className="h-edu mx-8 text-center my-10">
                    <img
                        className="h-52 w-80 p-2 shadow-black shadow-[0_10px_15px_5px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)]"
                        src={ch5}
                        alt=""
                    />
                    <br />
                    <p className="font-bold text-xl">Code Hunt 5.O - 2021</p>
                    <p className="pb-2 font-bold text-s">(Winner)</p>
                    <p className="px-10 text-justify transition duration-300 ease-in-out invisible educate text-xs">
                        Code Hunt 5.O is and inter-college coding competition held by Amity University, U.P. and I secure the 1st position in competition.
                    </p>
                </div>
                <div className="h-edu mx-8 text-center mb-10">
                    <img
                        className="h-52 w-80 p-2 shadow-black shadow-[0_10px_15px_5px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)]"
                        src={btop}
                        alt=""
                    />
                    <br />
                    <p className="font-bold text-xl">
                        Branch Topper - 2023
                    </p>
                    <p className="pb-2 font-bold text-s">(6th Semester Topper)</p>
                    <p className="px-10 text-justify transition duration-300 ease-in-out invisible educate text-xs">
                        I won the academic excellence award for branch topper of my college in Sixth Semester.
                    </p>
                </div>
                <div className="h-edu mx-8 text-center mb-10">
                    <img
                        className="h-52 w-80 p-2 shadow-black shadow-[0_10px_15px_5px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)]"
                        src={prastuti}
                        alt=""
                    />
                    <br />
                    <p className="font-bold text-xl">
                        Prastuti - 2020
                    </p>
                    <p className="pb-2 font-bold text-s">(2016 - 2017)</p>
                    <p className="px-10 text-justify transition duration-300 ease-in-out invisible educate text-xs">
                        Prastuti event was a Presentation show and explain competition in which I secure 3rd position.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Achievement;