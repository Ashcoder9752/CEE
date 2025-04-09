import {useState} from "react";
import {cn} from "../lib/utils.js";
import VideoCEE from "../components/VideoCEE.jsx";
import ReadingCEE from "../components/ReadingCEE.jsx";

const ResourcesCEE = () => {
    const [activeTab, setActiveTab] = useState("videos");

    return (
        <div className="max-w-7xl mx-auto min-h-screen py-10 px-8 flex flex-col items-center justify-center">

            <div className="flex justify-between items-center w-full mb-8">
                <div className="text-white text-2xl font-bold">
                    CEE Resources
                </div>

                <div className="flex justify-center items-center gap-4 mx-auto">
                    {["videos", "reading"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-6 py-2 text-xl font-bold rounded-xl transition-all duration-300 border",
                                activeTab === tab
                                    ? "bg-gray-200 text-black border-gray-200"
                                    : "border-white text-white hover:bg-neutral-800"
                            )}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                <a
                    href={""}
                    className="px-5 py-2 rounded-xl font-medium bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md hover:brightness-110 transition"
                > {/* TODO: Navigate to the practice page */}
                    Practice →
                </a>

            </div>


            <div className="flex-1 w-full bg-neutral-950 rounded-2xl p-10 border border-neutral-800">
                {activeTab === "videos" && <VideoCEE />}
                {activeTab === "reading" && <ReadingCEE />}
            </div>
        </div>
    )
};

export default ResourcesCEE;