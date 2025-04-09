const ReadingCard = ({ material }) => {
    return (
        <a
            href={material.url}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[280px] max-w-xs bg-neutral-950 hover:bg-neutral-900 text-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-800 overflow-hidden group"
        >
            <div className="bg-gradient-to-b from-neutral-800 to-neutral-900 px-5 py-4 flex items-center gap-3">
                <div className="bg-sky-600 w-10 h-12 rounded-md flex items-center justify-center text-white text-2xl shadow-inner">
                    📄
                </div>
                <h4 className="text-lg font-semibold leading-tight group-hover:text-sky-400 transition line-clamp-2">
                    {material.title}
                </h4>
            </div>

            <div className="px-5 pt-4 pb-6 text-sm text-neutral-400 leading-relaxed line-clamp-3">
                <div className="h-3 bg-neutral-700 rounded w-5/6 mb-2"></div>
                <div className="h-3 bg-neutral-700 rounded w-4/6 mb-2"></div>
                <div className="h-3 bg-neutral-700 rounded w-3/6"></div>
            </div>

            <div className="bg-black/40 text-sky-400 text-sm px-5 py-3 backdrop-blur-sm border-t border-neutral-800">
                Read More →
            </div>
        </a>
    );
};

export default ReadingCard;