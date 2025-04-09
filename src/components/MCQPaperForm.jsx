import {useEffect, useState} from "react";
import {cn} from "../lib/utils.js";

const McqQuestionForm = ({paper, onBack}) => {
    const [answers, setAnswers] = useState({});
    const [results, setResults] = useState(null);
    const [validationErrors, setValidationErrors] = useState({});

    const handleOptionChange = (questionId, option) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: option,
        }));

        if (validationErrors[questionId]) {
            setValidationErrors((prev) => {
                const newErrors = {...prev};
                delete newErrors[questionId];
                return newErrors;
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        paper.questions.forEach((q) => {
            if (!answers[q.id]) {
                newErrors[q.id] = "Please select an option.";
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setValidationErrors(newErrors);
            return;
        }

        let correctCount = 0;
        const feedback = paper.questions.map((q) => {
            const selected = answers[q.id];
            const isCorrect = selected === q.answer;
            if (isCorrect) correctCount++;
            return {
                question: q.question,
                selected,
                answer: q.answer,
                options: q.options,
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
                    onClick={onBack}
                    className="text-sm text-neutral-400 hover:text-white border border-neutral-700 px-4 py-1 rounded"
                >
                    ← Back
                </button>
            </div>

            {!results ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                    {paper.questions.map((q, idx) => (
                        <div key={q.id} className="space-y-3">
                            <p className="font-semibold text-white">
                                {idx + 1}. {q.question}
                            </p>

                            <div className="grid gap-2">
                                {q.options.map((opt, optIdx) => {
                                    const isSelected = answers[q.id] === opt;
                                    return (
                                        <label
                                            key={optIdx}
                                            className={cn("flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer",
                                                isSelected
                                                    ? "border-sky-500 bg-sky-900/20"
                                                    : "border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800/30"
                                            )}
                                        >
                                            <input
                                                type="radio"
                                                name={`q${q.id}`}
                                                value={opt}
                                                checked={isSelected}
                                                onChange={() => handleOptionChange(q.id, opt)}
                                                className="h-4 w-4 accent-sky-500"
                                            />
                                            <span className="text-white">{opt}</span>
                                        </label>
                                    );
                                })}
                            </div>

                            {validationErrors[q.id] && (
                                <p className="text-sm text-red-400">{validationErrors[q.id]}</p>
                            )}
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl"
                    >
                        Submit Answers
                    </button>
                </form>
            ) : (
                <div className="space-y-6">
                    <p className="text-lg font-semibold text-green-400">
                        You got {results.correctCount} out of {results.total} correct!
                    </p>

                    {results.feedback.map((item, idx) => (
                        <div
                            key={idx}
                            className={`rounded-xl p-4 border ${
                                item.isCorrect
                                    ? "border-green-600 bg-green-900/20"
                                    : "border-red-600 bg-red-900/20"
                            }`}
                        >
                            <p className="text-white font-medium mb-2">
                                {idx + 1}. {item.question}
                            </p>

                            <div className="space-y-1 text-sm">
                                {item.options.map((opt, i) => {
                                    const isSelected = item.selected === opt;
                                    const isCorrect = item.answer === opt;
                                    return (
                                        <div
                                            key={i}
                                            className={`flex items-center gap-2 px-3 py-1 rounded-lg border
                        ${
                                                isCorrect
                                                    ? "border-green-500 bg-green-700/20"
                                                    : isSelected
                                                        ? "border-red-500 bg-red-700/20"
                                                        : "border-neutral-700"
                                            }`}
                                        >
                                            <span className="text-white">{opt}</span>
                                            {isCorrect && (
                                                <span className="text-green-400 ml-auto text-xs">
                          ✅ Correct
                        </span>
                                            )}
                                            {!isCorrect && isSelected && (
                                                <span className="text-red-400 ml-auto text-xs">
                          ❌ Your Answer
                        </span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
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

export default McqQuestionForm;
