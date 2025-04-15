import { useState } from "react";
import {Outlet, useMatch, useNavigate} from "react-router-dom";
import QuestionPaperCard from "../../../components/QuestionPaperCard.jsx";
import { cn } from "../../../lib/utils.js";

const abilityToCode = [
    {
        title: "Paper 1",
        id: "coding-paper-1",
        questions: [
            {
                id: 1,
                question: "Which keyword declares a block-scoped variable in JavaScript?",
                options: ["var", "let", "const", "function"],
                answer: "let"
            },
            {
                id: 2,
                question: "What is the output of typeof null in JavaScript?",
                options: ["object", "null", "undefined", "string"],
                answer: "object"
            },
            {
                id: 3,
                question: "What does DOM stand for?",
                options: [
                    "Document Object Model",
                    "Data Object Map",
                    "Document Oriented Model",
                    "Data Output Method"
                ],
                answer: "Document Object Model"
            }
        ]
    },
    {
        title: "Paper 2",
        id: "coding-paper-2",
        questions: [
            {
                id: 1,
                question: "Which of the following is not a JavaScript data type?",
                options: ["Boolean", "Undefined", "Float", "String"],
                answer: "Float"
            },
            {
                id: 2,
                question: "Which method converts JSON text to a JavaScript object?",
                options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.decode()"],
                answer: "JSON.parse()"
            },
            {
                id: 3,
                question: "How do you create a function in JavaScript?",
                options: [
                    "function myFunc()",
                    "def myFunc()",
                    "func myFunc()",
                    "create function myFunc()"
                ],
                answer: "function myFunc()"
            }
        ]
    }
];

const languageReasoning = [
    {
        title: "Paper 1",
        id: "language-paper-1",
        questions: [
            {
                id: 1,
                question: "What is the antonym of 'generous'?",
                options: ["Kind", "Greedy", "Friendly", "Gentle"],
                answer: "Greedy"
            },
            {
                id: 2,
                question: "Choose the correct spelling:",
                options: ["Accomodate", "Acommodate", "Accommodate", "Acomodate"],
                answer: "Accommodate"
            },
            {
                id: 3,
                question: "The plural of 'crisis' is:",
                options: ["Crisis", "Crises", "Crisises", "Crisis'"],
                answer: "Crises"
            }
        ]
    },
    {
        title: "Paper 2",
        id: "language-paper-2",
        questions: [
            {
                id: 1,
                question: "Select the synonym of 'brilliant':",
                options: ["Dull", "Smart", "Intelligent", "Bright"],
                answer: "Bright"
            },
            {
                id: 2,
                question: "What is the feminine form of 'actor'?",
                options: ["Actoress", "Actress", "Actorine", "Actara"],
                answer: "Actress"
            },
            {
                id: 3,
                question: "Which of the following is a conjunction?",
                options: ["Run", "Beautiful", "And", "Happy"],
                answer: "And"
            }
        ]
    }
];

const analyticalReasoning = [
    {
        title: "Paper 1",
        id: "reasoning-paper-1",
        questions: [
            {
                id: 1,
                question: "Which number comes next in the series: 2, 4, 8, 16, ___?",
                options: ["18", "24", "32", "64"],
                answer: "32"
            },
            {
                id: 2,
                question: "Find the odd one out: Apple, Banana, Carrot, Mango.",
                options: ["Apple", "Banana", "Carrot", "Mango"],
                answer: "Carrot"
            },
            {
                id: 3,
                question: "If A is taller than B, and B is taller than C, who is the shortest?",
                options: ["A", "B", "C", "Can't say"],
                answer: "C"
            }
        ]
    },
    {
        title: "Paper 2",
        id: "reasoning-paper-2",
        questions: [
            {
                id: 1,
                question: "Which shape does not belong: Square, Rectangle, Triangle, Circle?",
                options: ["Square", "Rectangle", "Triangle", "Circle"],
                answer: "Circle"
            },
            {
                id: 2,
                question: "What comes next: J, F, M, A, M, ___?",
                options: ["J", "N", "S", "O"],
                answer: "J"
            },
            {
                id: 3,
                question: "If RED = 27 and BLUE = 40, then GREEN = ?",
                options: ["51", "47", "49", "52"],
                answer: "49"
            }
        ]
    }
];

const aptitude = [
    {
        title: "Paper 1",
        id: "aptitude-paper-1",
        questions: [
            {
                id: 1,
                question: "What is 25% of 200?",
                options: ["25", "50", "75", "100"],
                answer: "50"
            },
            {
                id: 2,
                question: "If x + 3 = 7, then x = ?",
                options: ["2", "3", "4", "5"],
                answer: "4"
            },
            {
                id: 3,
                question: "Simplify: 2(3 + 4)",
                options: ["14", "16", "12", "10"],
                answer: "14"
            }
        ]
    },
    {
        title: "Paper 2",
        id: "aptitude-paper-2",
        questions: [
            {
                id: 1,
                question: "Area of a circle with radius 7 (π = 22/7) is?",
                options: ["144", "154", "164", "140"],
                answer: "154"
            },
            {
                id: 2,
                question: "Speed = Distance / ___",
                options: ["Time", "Speed", "Mass", "Work"],
                answer: "Time"
            },
            {
                id: 3,
                question: "Average of 10, 20, and 30 is:",
                options: ["15", "20", "25", "30"],
                answer: "20"
            }
        ]
    }
];

// CATEGORY MAP
export const categories = {
    coding: { id: "coding", title: "Ability to Code", papers: abilityToCode },
    language: { id: "language", title: "Language Reasoning", papers: languageReasoning },
    reasoning: { id: "reasoning", title: "Analytical Reasoning", papers: analyticalReasoning },
    aptitude: { id: "aptitude", title: "Aptitude", papers: aptitude },
};

export default function CeeExamMCQs() {
    const [activeCategory, setActiveCategory] = useState("coding");
    const navigate = useNavigate();

    const isPaperRoute = useMatch("/cee/exam/mcqs/:paperId");

    const handlePaperClick = (paper) => {
        navigate(`/cee/exam/mcqs/${paper.id}`);
    };

    // ✅ If on a paper route, just show the Outlet (nested page)
    if (isPaperRoute) {
        return (
            <div className="max-w-7xl mx-auto px-6 py-10 max-h-[60vh] overflow-y-auto">
                <Outlet />
            </div>
        );
    }

    // ✅ Default view with tabs and cards
    return (
        <div className="max-w-7xl mx-auto px-6 py-10 max-h-[60vh] overflow-y-auto">
            {/* Category Tabs */}
            <div className="flex justify-center mb-10">
                <div className="bg-zinc-800 rounded-full p-1 inline-flex shadow-inner">
                    {Object.values(categories).map((category) => (
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
                {categories[activeCategory].papers.map((paper, idx) => (
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