import {useState} from "react";
import { abilityToCode, languageReasoning, analyticalReasoning, aptitude } from "../data/mcqData.js"
import SectionTitle from "./SectionTitle.jsx";
import QuestionPaperCard from "./QuestionPaperCard.jsx";
import MCQPaperForm from "./MCQPaperForm.jsx";

const sections = [
    { title: "Ability to Code", data: abilityToCode },
    { title: "Language Reasoning", data: languageReasoning },
    { title: "Analytical Reasoning", data: analyticalReasoning },
    { title: "Aptitude", data: aptitude },
];

const MCQsCEE = () => {
    const [selectedPaper, setSelectedPaper] = useState(null);

    const handlePaperClick = (paper) => setSelectedPaper(paper);
    const handleBack = () => setSelectedPaper(null);

    return (
        <div className="max-w-7xl mx-auto py-10 px-6 text-white">
            {!selectedPaper ? (
                <div className="space-y-10">
                    {sections.map((section, idx) => (
                        <div key={idx}>
                            <SectionTitle title={section.title} />
                            <div className="flex flex-wrap gap-4">
                                {section.data.map((paper, paperIdx) => (
                                    <QuestionPaperCard
                                        key={paperIdx}
                                        paper={paper}
                                        onClick={() => handlePaperClick(paper)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <MCQPaperForm paper={selectedPaper} onBack={handleBack} />
            )}
        </div>
    )
}

export default MCQsCEE;