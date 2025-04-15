import { useState } from "react";
import { Outlet, useMatch, useNavigate } from "react-router-dom";
import QuestionPaperCard from "../../../components/QuestionPaperCard.jsx";
import { cn } from "../../../lib/utils.js";

// Sample Fill in the Blanks Data
const codingFillBlanks = [
    {
        title: "Paper 1",
        id: "coding-fb-paper-1",
        questions: [
            {
                id: 1,
                question: "The keyword used to declare constants in JavaScript is ____.",
                answer: "const"
            },
            {
                id: 2,
                question: "The DOM stands for ____.",
                answer: "Document Object Model"
            },
            {
                id: 3,
                question: "The typeof null in JavaScript returns ____.",
                answer: "object"
            },
            {
                id: 4,
                question: "The keyword used to declare constants in JavaScript is ____.",
                answer: "const"
            },
            {
                id: 5,
                question: "The DOM stands for ____.",
                answer: "Document Object Model"
            },
            {
                id: 6,
                question: "The typeof null in JavaScript returns ____.",
                answer: "object"
            },
            {
                id: 7,
                question: "The keyword used to declare constants in JavaScript is ____.",
                answer: "const"
            },
            {
                id: 8,
                question: "The DOM stands for ____.",
                answer: "Document Object Model"
            },
            {
                id: 9,
                question: "The typeof null in JavaScript returns ____.",
                answer: "object"
            },
            {
                id: 10,
                question: "The keyword used to declare constants in JavaScript is ____.",
                answer: "const"
            },
            {
                id: 11,
                question: "The DOM stands for ____.",
                answer: "Document Object Model"
            },
            {
                id: 12,
                question: "The typeof null in JavaScript returns ____.",
                answer: "object"
            },
        ]
    },
    {
        title: "Paper 1",
        id: "coding-fb-paper-1",
        questions: [
            {
                id: 1,
                question: "The keyword used to declare constants in JavaScript is ____.",
                answer: "const"
            },
            {
                id: 2,
                question: "The DOM stands for ____.",
                answer: "Document Object Model"
            },
            {
                id: 3,
                question: "The typeof null in JavaScript returns ____.",
                answer: "object"
            }
        ]
    },
    {
        title: "Paper 1",
        id: "coding-fb-paper-1",
        questions: [
            {
                id: 1,
                question: "The keyword used to declare constants in JavaScript is ____.",
                answer: "const"
            },
            {
                id: 2,
                question: "The DOM stands for ____.",
                answer: "Document Object Model"
            },
            {
                id: 3,
                question: "The typeof null in JavaScript returns ____.",
                answer: "object"
            }
        ]
    },
    {
        title: "Paper 1",
        id: "coding-fb-paper-1",
        questions: [
            {
                id: 1,
                question: "The keyword used to declare constants in JavaScript is ____.",
                answer: "const"
            },
            {
                id: 2,
                question: "The DOM stands for ____.",
                answer: "Document Object Model"
            },
            {
                id: 3,
                question: "The typeof null in JavaScript returns ____.",
                answer: "object"
            }
        ]
    },
    {
        title: "Paper 1",
        id: "coding-fb-paper-1",
        questions: [
            {
                id: 1,
                question: "The keyword used to declare constants in JavaScript is ____.",
                answer: "const"
            },
            {
                id: 2,
                question: "The DOM stands for ____.",
                answer: "Document Object Model"
            },
            {
                id: 3,
                question: "The typeof null in JavaScript returns ____.",
                answer: "object"
            }
        ]
    },
];

const languageFillBlanks = [
    {
        title: "Paper 1",
        id: "language-fb-paper-1",
        questions: [
            {
                id: 1,
                question: "The plural of 'crisis' is ____.",
                answer: "crises"
            },
            {
                id: 2,
                question: "The synonym of 'bright' is ____.",
                answer: "brilliant"
            },
            {
                id: 3,
                question: "The antonym of 'generous' is ____.",
                answer: "greedy"
            }
        ]
    }
];

const reasoningFillBlanks = [
    {
        title: "Paper 1",
        id: "reasoning-fb-paper-1",
        questions: [
            {
                id: 1,
                question: "The next number in the series 2, 4, 8, 16, ____ is 32.",
                answer: "32"
            },
            {
                id: 2,
                question: "Find the odd one out: Apple, Banana, Carrot, Mango. Answer: ____.",
                answer: "Carrot"
            },
            {
                id: 3,
                question: "If A > B and B > C, then the shortest is ____.",
                answer: "C"
            }
        ]
    }
];

const aptitudeFillBlanks = [
    {
        title: "Paper 1",
        id: "aptitude-fb-paper-1",
        questions: [
            {
                id: 1,
                question: "25% of 200 is ____.",
                answer: "50"
            },
            {
                id: 2,
                question: "If x + 3 = 7, then x = ____.",
                answer: "4"
            },
            {
                id: 3,
                question: "The area of a circle with radius 7 is ____ (π = 22/7).",
                answer: "154"
            }
        ]
    }
];

// CATEGORY MAP
export const fillBlankCategories = {
    coding: { id: "coding", title: "Ability to Code", papers: codingFillBlanks },
    language: { id: "language", title: "Language Reasoning", papers: languageFillBlanks },
    reasoning: { id: "reasoning", title: "Analytical Reasoning", papers: reasoningFillBlanks },
    aptitude: { id: "aptitude", title: "Aptitude", papers: aptitudeFillBlanks }
};

export default function CeeExamFillBlanks() {
    const [activeCategory, setActiveCategory] = useState("coding");
    const navigate = useNavigate();
    const isPaperRoute = useMatch("/cee/exam/fill-in-the-blanks/:paperId");

    const handlePaperClick = (paper) => {
        navigate(`/cee/exam/fill-in-the-blanks/${paper.id}`);
    };

    if (isPaperRoute) {
        return (
            <div className="max-w-7xl mx-auto px-6 py-10 max-h-[60vh] overflow-y-auto">
                <Outlet />
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-10 max-h-[60vh] overflow-y-auto">
            {/* Category Tabs */}
            <div className="flex justify-center mb-10">
                <div className="bg-zinc-800 rounded-full p-1 inline-flex shadow-inner">
                    {Object.values(fillBlankCategories).map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={cn(
                                "px-6 py-2 text-sm font-medium rounded-full transition-all duration-300",
                                activeCategory === category.id
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "text-zinc-400 hover:text-white hover:bg-zinc-700"
                            )}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Question Papers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fillBlankCategories[activeCategory].papers.map((paper, idx) => (
                    <QuestionPaperCard
                        key={idx}
                        paper={paper}
                        onClick={() => handlePaperClick(paper)}
                    />
                ))}
            </div>
        </div>
    );
}