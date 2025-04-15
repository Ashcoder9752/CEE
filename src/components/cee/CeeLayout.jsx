import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { cn } from "../../lib/utils.js";
import {
    ChevronDown,
    ChevronRight,
    Menu,
    X,
    Home,
    BookOpen,
    VideoIcon,
    FileText,
    HelpCircle,
    CheckSquare,
    Award
} from "lucide-react";

export default function CeeLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();

    // Generate breadcrumbs from current path
    const generateBreadcrumbs = () => {
        const paths = location.pathname.split('/').filter(Boolean);
        return paths.map((path, index) => {
            const formattedPath = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
            return {
                label: formattedPath,
                path: '/' + paths.slice(0, index + 1).join('/')
            };
        });
    };

    const breadcrumbs = generateBreadcrumbs();

    const navigationItems = [
        {
            label: "CEE Exam",
            to: "/cee/exam",
            icon: <BookOpen size={16}/>,
            subItems: [
                {label: "Videos", to: "/cee/exam/videos", icon: <VideoIcon size={14}/>},
                {label: "Reading", to: "/cee/exam/reading", icon: <FileText size={14}/>},
                {label: "MCQs", to: "/cee/exam/mcqs", icon: <CheckSquare size={14}/>},
                {label: "Fill Blanks", to: "/cee/exam/fill-in-the-blanks", icon: <HelpCircle size={14}/>}
            ]
        },
        {
            label: "CEE Interview",
            to: "/cee/interview",
            icon: <Award size={16}/>,
            subItems: [
                {label: "Coming Soon", to: "/cee/interview", icon: <ChevronRight size={14}/>}
            ]
        },
    ];

    // Check if we are on the /cee route
    const isCeeRoute = location.pathname === "/cee";

    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 text-white">
            <div className="mx-auto max-w-7xl px-4 py-6">
                <header className="mb-6">
                    <div
                        className="bg-zinc-800/80 backdrop-blur-sm shadow-lg rounded-xl px-6 py-4 border border-zinc-700/50 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="p-1.5 rounded-md bg-zinc-700/50 hover:bg-zinc-700 transition-colors cursor-pointer"
                            >
                                {sidebarOpen ? <X size={18}/> : <Menu size={18}/>}
                            </button>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                                CEE Portal
                            </h1>
                        </div>

                        <div className="hidden md:flex items-center space-x-4">
                            <div className="bg-zinc-700/30 px-3 py-1.5 rounded-md text-sm flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                <span className="text-zinc-300">Ready for Exam</span>
                            </div>
                            <div
                                className="bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full text-xs text-blue-400">
                                Beta Access
                            </div>
                        </div>
                    </div>
                </header>

                <div className={cn("flex", sidebarOpen === true ? "gap-6" : "")}>
                    {/* Sidebar Navigation */}
                    <aside className={cn(
                        "transition-all duration-300 ease-in-out",
                        sidebarOpen ? "w-64 opacity-100" : "w-0 opacity-0 overflow-hidden"
                    )}>
                        <div
                            className="bg-zinc-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-zinc-700/50 p-4 sticky top-6">

                            <nav className="space-y-1">
                                {navigationItems.map((item) => {
                                    const isItemActive = location.pathname.startsWith(item.to);
                                    const [isExpanded, setIsExpanded] = useState(isItemActive);

                                    return (
                                        <div key={item.to} className="mb-3">
                                            <div className="flex items-center">
                                                <NavLink
                                                    to={item.to}
                                                    end={item.to === "/cee/exam" || item.to === "/cee/interview"}
                                                    className={({isActive}) =>
                                                        cn(
                                                            "flex-1 flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                                            isActive
                                                                ? "bg-blue-600 text-white shadow"
                                                                : "text-zinc-300 hover:bg-zinc-700 hover:text-white"
                                                        )
                                                    }
                                                >
                                                    {item.icon}
                                                    {item.label}
                                                </NavLink>
                                                {item.subItems.length > 0 && (
                                                    <button
                                                        onClick={() => setIsExpanded(!isExpanded)}
                                                        className="p-1 hover:bg-zinc-700/50 rounded-md ml-1"
                                                    >
                                                        {isExpanded ? <ChevronDown size={16}/> :
                                                            <ChevronRight size={16}/>}
                                                    </button>
                                                )}
                                            </div>

                                            {/* Sub-items */}
                                            {isExpanded && (
                                                <div className="ml-4 mt-1 space-y-1 pl-2 border-l border-zinc-700/50">
                                                    {item.subItems.map(subItem => (
                                                        <NavLink
                                                            key={subItem.to}
                                                            to={subItem.to}
                                                            className={({isActive}) =>
                                                                cn(
                                                                    "block px-3 py-1.5 rounded-md text-xs font-medium transition-colors flex items-center gap-2",
                                                                    isActive
                                                                        ? "bg-blue-500/20 text-blue-400 shadow-sm"
                                                                        : "text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-300"
                                                                )
                                                            }
                                                        >
                                                            {subItem.icon}
                                                            {subItem.label}
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 flex flex-col">
                        {/* Breadcrumbs */}
                        <div
                            className="bg-zinc-800/60 backdrop-blur-sm mb-4 px-4 py-2 rounded-lg border border-zinc-700/50">
                            <div className="flex items-center text-sm text-zinc-400">
                                <NavLink to="/" className="hover:text-zinc-200 transition-colors">
                                    <Home size={14}/>
                                </NavLink>
                                {breadcrumbs.map((crumb, index) => (
                                    <div key={crumb.path} className="flex items-center">
                                        <span className="mx-2 text-zinc-600">/</span>
                                        {index === breadcrumbs.length - 1 ? (
                                            <span className="text-zinc-200">{crumb.label}</span>
                                        ) : (
                                            <NavLink to={crumb.path} className="hover:text-zinc-200 transition-colors">
                                                {crumb.label}
                                            </NavLink>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="bg-zinc-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-zinc-700/50 p-8 min-h-[70vh]">
                            {isCeeRoute ? (
                                <div className="text-center text-zinc-300 text-xl py-12 space-y-8">
                                    <h2 className="text-4xl font-extrabold text-white mb-6">
                                        Welcome to the CEE Preparation Portal!
                                    </h2>
                                </div>
                            ) : (
                                <Outlet />
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}