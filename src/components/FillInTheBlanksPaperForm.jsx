import { useEffect, useState } from "react";
import {cn} from "../lib/utils.js";

const FillInTheBlanksPaperForm = ({ paper, onBack }) => {
    const [results, setResults] = useState(null);
    const [validationErrors, setValidationErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Clear error on typing
        if (validationErrors[name] && value.trim() !== "") {
            setValidationErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userAnswers = {};
        const newErrors = {};

        paper.questions.forEach((q) => {
            const key = `q${q.id}`;
            const value = (formData.get(key) || "").trim();
            if (!value) {
                newErrors[key] = "This field is required.";
            }
            userAnswers[key] = value.toLowerCase();
        });

        // If validation fails
        if (Object.keys(newErrors).length > 0) {
            setValidationErrors(newErrors);
            return;
        }

        setValidationErrors({}); // Clear errors if all good

        let correctCount = 0;
        const feedback = paper.questions.map((q) => {
            const userAnswer = userAnswers[`q${q.id}`] || "";
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
                <h2 className="text-2xl font-bold">{paper.title}</h2>
                <button
                    onClick={onBack}
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
                                <label className="block mb-2 font-medium">
                                    {index + 1}. {q.question.replace("___", "_____")}
                                </label>
                                <input
                                    type="text"
                                    name={key}
                                    onChange={handleInputChange}
                                    className={cn("w-full px-4 py-2 rounded bg-neutral-800 text-white border",
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
                        className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl"
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
                            className={`border rounded-xl p-4 ${
                                item.isCorrect
                                    ? "border-green-600 bg-green-900/20"
                                    : "border-red-600 bg-red-900/20"
                            }`}
                        >
                            <p className="mb-1 font-medium text-white">
                                {index + 1}. {item.question.replace("___", "_____")}
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
                        onClick={onBack}
                        className="mt-6 px-6 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700"
                    >
                        Try Another Paper
                    </button>
                </div>
            )}
        </div>
    );
};

export default FillInTheBlanksPaperForm;
