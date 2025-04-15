export default function QuestionPaperCard({ paper, onClick }) {
    return (
        <button
            onClick={onClick}
            className="relative min-w-[260px] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-sky-600 hover:shadow-md transition-all duration-200"
        >
            {/* Main Content */}
            <div className="px-5 py-6 space-y-4">
                <h3 className="text-lg font-semibold text-white line-clamp-2">
                    {paper.title}
                </h3>

                <p className="text-sm text-neutral-400">
                    {paper.questions.length} Questions
                </p>

                {/* Visual Filler Lines */}
                <div className="space-y-1">
                    <div className="h-2 bg-neutral-800 rounded w-5/6"></div>
                    <div className="h-2 bg-neutral-800 rounded w-4/6"></div>
                    <div className="h-2 bg-neutral-800 rounded w-2/3"></div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-3 bg-neutral-950 border-t border-neutral-800 text-sm text-sky-500">
                <span>Open</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
        </button>
    );
};