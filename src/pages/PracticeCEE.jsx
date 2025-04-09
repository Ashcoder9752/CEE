import {useState} from "react";
import {cn} from "../lib/utils.js";
import MCQsCEE from "../components/MCQsCEE.jsx";
import FillInTheBlanksCEE from "../components/FillInTheBlanksCEE.jsx";

const PracticeCEE = () => {
    const [activeTab, setActiveTab] = useState("MCQs");

    return (
        <div className="max-w-7xl mx-auto min-h-screen py-10 px-8 flex flex-col items-center justify-center">

            <div className="flex justify-between items-center w-full mb-8">
                <div className="text-white text-2xl font-bold">
                    CEE Practice
                </div>

                <div className="flex justify-center items-center gap-4 mx-auto">
                    {["MCQs", "Fill in the blanks"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-6 py-2 text-xl font-bold rounded-xl transition-all duration-300 border cursor-pointer",
                                activeTab === tab
                                    ? "bg-gray-200 text-black border-gray-200"
                                    : "border-white text-white hover:bg-neutral-800"
                            )}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                <div className={"mx-20"}></div>

            </div>

            <div className="flex-1 w-full bg-neutral-950 rounded-2xl p-10 border border-neutral-800">
                {activeTab === "MCQs" && <MCQsCEE />}
                {activeTab === "Fill in the blanks" && <FillInTheBlanksCEE />}
            </div>
        </div>
    )
};

export default PracticeCEE;