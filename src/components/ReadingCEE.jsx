import readingSections from '../data/ReadingMaterialData.json';
import ReadingCard from "./ReadingCard.jsx";
import SectionTitle from "./SectionTitle.jsx";

const ReadingCEE = () => {
    return (
        <div className="space-y-12">
            {readingSections.map((section, idx) => (
                <div key={idx}>
                    <SectionTitle title={section.title} />

                    <div className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar">
                        {section.materials.map((material, index) => (
                            <ReadingCard key={index} material={material} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ReadingCEE;