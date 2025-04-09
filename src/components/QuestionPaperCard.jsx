const QuestionPaperCard = ({ paper, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="relative w-[260px] cursor-pointer rounded-2xl overflow-hidden bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 transition-all shadow-sm hover:shadow-md group"
        >
            {/* Tag Label on Left */}
            <div className="absolute left-0 top-4 bg-sky-700 text-white text-xs font-bold px-2 py-1 rounded-r-md shadow">
                Paper
            </div>

            {/* Content */}
            <div className="px-5 py-6 space-y-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-sky-400 transition line-clamp-2">
                    {paper.title}
                </h3>

                <div className="text-neutral-400 text-sm">
                    {paper.questions.length} Questions
                </div>

                <div className="mt-3 space-y-1 text-neutral-600 text-xs">
                    <div className="h-3 bg-neutral-700 rounded w-5/6"></div>
                    <div className="h-3 bg-neutral-700 rounded w-4/6"></div>
                    <div className="h-3 bg-neutral-700 rounded w-2/3"></div>
                </div>
            </div>

            {/* Bottom */}
            <div className="px-5 py-3 border-t border-neutral-800 text-sm text-sky-500 bg-black/30 backdrop-blur flex justify-between">
                <span>Open</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
        </button>
    );
};

export default QuestionPaperCard;
