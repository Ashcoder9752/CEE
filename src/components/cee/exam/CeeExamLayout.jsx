import {NavLink, Outlet, useLocation} from "react-router-dom";
import {Video as VideoIcon, BookOpen, CheckSquare, HelpCircle} from "lucide-react";
import {cn} from "../../../lib/utils.js";

export default function CeeExamLayout() {
    const location = useLocation();

    const examSections = [
        {
            name: "Videos",
            path: "/cee/exam/videos",
            icon: <VideoIcon size={16}/>,
            description: "Watch instructional videos about CEE topics"
        },
        {
            name: "Reading",
            path: "/cee/exam/reading",
            icon: <BookOpen size={16}/>,
            description: "Access comprehensive reading materials"
        },
        {
            name: "MCQs",
            path: "/cee/exam/mcqs",
            icon: <CheckSquare size={16}/>,
            description: "Practice with multiple choice questions"
        },
        {
            name: "Fill Blanks",
            path: "/cee/exam/fill-in-the-blanks",
            icon: <HelpCircle size={16}/>,
            description: "Complete Fill in the blanks exercises"
        }
    ];

    // Check if we're on the main exam page
    const isExamHome = location.pathname === "/cee/exam";

    return (
        <div className="space-y-6">
            {/* Exam Header */}
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-white">CEE Examination</h1>
                <p className="text-zinc-400">
                    Prepare for your CEE with our comprehensive study materials and practice tests.
                </p>
            </div>

            {/* If we're on the main exam page, show section cards */}
            {isExamHome ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {examSections.map((section) => (
                        <NavLink
                            key={section.path}
                            to={section.path}
                            className="bg-zinc-700/50 hover:bg-zinc-700/80 border border-zinc-600/50 rounded-lg p-4 transition-all hover:shadow-md hover:shadow-blue-900/20 group"
                        >
                            <div className="flex items-start gap-3">
                <span className="p-2 rounded-md bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30">
                  {section.icon}
                </span>
                                <div>
                                    <h3 className="font-medium text-white mb-1 group-hover:text-blue-300 transition-colors">
                                        {section.name}
                                    </h3>
                                    <p className="text-sm text-zinc-400">{section.description}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            ) : (
                <div>
                    {/* Secondary Navigation when on a specific exam section */}
                    <div className="bg-zinc-700/30 rounded-lg p-2 mb-6">
                        <div className="flex flex-wrap gap-2">
                            {examSections.map((section) => (
                                <NavLink
                                    key={section.path}
                                    to={section.path}
                                    className={({isActive}) =>
                                        cn(
                                            "px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2",
                                            isActive
                                                ? "bg-blue-600 text-white shadow-md"
                                                : "text-zinc-300 hover:bg-zinc-700 hover:text-white"
                                        )
                                    }
                                >
                                    {section.icon}
                                    {section.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Outlet for the specific exam section content */}
                    <div className="bg-zinc-700/20 rounded-lg p-4 border border-zinc-600/30">
                        <Outlet/>
                    </div>
                </div>
            )}
        </div>
    );
}