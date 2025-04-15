import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "../../../lib/utils.js";
import {fillBlankCategories} from "./CeeExamFillBlanks.jsx";

export default function CeeExamFillBlanksPaper() {
    const navigate = useNavigate();
    const { paperId } = useParams();

    // Find the paper from data
    const paper = Object.values(fillBlankCategories)
        .flatMap((cat) => cat.papers)
        .find((p) => p.id === paperId);

    const [answers, setAnswers] = useState({});
    const [results, setResults] = useState(null);
    const [validationErrors, setValidationErrors] = useState({});

    if (!paper) {
        return <div className="text-red-500">Paper not found.</div>;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Clear error when user starts typing
        if (validationErrors[name] && value.trim() !== "") {
            setValidationErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }

        setAnswers((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validation
        paper.questions.forEach((q) => {
            const key = `q${q.id}`;
            const value = answers[key]?.trim();
            if (!value) {
                newErrors[key] = "This field is required.";
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setValidationErrors(newErrors);
            return;
        }

        setValidationErrors({});

        // Check answers
        let correctCount = 0;
        const feedback = paper.questions.map((q) => {
            const userAnswer = answers[`q${q.id}`]?.trim().toLowerCase() || "";
            const isCorrect = userAnswer === q.answer.trim().toLowerCase();
            if (isCorrect) correctCount++;
            return {
                question: q.question,
                userAnswer,
                correctAnswer: q.answer,
                isCorrect,
            };
        });

        setResults({
            correctCount,
            total: paper.questions.length,
            feedback,
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">{paper.title}</h2>
                <button
                    onClick={() => navigate(-1)} // Go back to the previous page
                    className="text-sm text-neutral-400 hover:text-white border border-neutral-700 px-4 py-1 rounded"
                >
                    ← Back
                </button>
            </div>

            {!results ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                    {paper.questions.map((q, index) => {
                        const key = `q${q.id}`;
                        const hasError = validationErrors[key];

                        return (
                            <div key={q.id}>
                                <label className="block mb-2 font-medium text-white">
                                    {index + 1}. {q.question.replace("____", "_____")}
                                </label>
                                <input
                                    type="text"
                                    name={key}
                                    value={answers[key] || ""}
                                    onChange={handleInputChange}
                                    className={cn(
                                        "w-full px-4 py-2 rounded bg-neutral-800 text-white border",
                                        hasError
                                            ? "border-red-600 focus:outline-red-500"
                                            : "border-neutral-700"
                                    )}
                                />
                                {hasError && (
                                    <p className="text-sm text-red-400 mt-1">
                                        {validationErrors[key]}
                                    </p>
                                )}
                            </div>
                        );
                    })}

                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl"
                    >
                        Submit Answers
                    </button>
                </form>
            ) : (
                <div className="space-y-4">
                    <p className="text-lg font-semibold text-green-400">
                        You got {results.correctCount} out of {results.total} correct!
                    </p>

                    {results.feedback.map((item, index) => (
                        <div
                            key={index}
                            className={cn(
                                "border rounded-xl p-4",
                                item.isCorrect
                                    ? "border-green-600 bg-green-900/20"
                                    : "border-red-600 bg-red-900/20"
                            )}
                        >
                            <p className="mb-1 font-medium text-white">
                                {index + 1}. {item.question.replace("____", "_____")}
                            </p>
                            <p className="text-sm text-neutral-300">
                                Your answer:{" "}
                                <span
                                    className={
                                        item.isCorrect ? "text-green-400" : "text-red-400"
                                    }
                                >
                                    {item.userAnswer}
                                </span>
                            </p>
                            {!item.isCorrect && (
                                <p className="text-sm text-neutral-400">
                                    Correct answer:{" "}
                                    <span className="text-green-300">{item.correctAnswer}</span>
                                </p>
                            )}
                        </div>
                    ))}

                    <button
                        onClick={() => navigate(-1)} // Go back to the previous page
                        className="mt-6 px-6 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700"
                    >
                        Try Another Paper
                    </button>
                </div>
            )}
        </div>
    );
};