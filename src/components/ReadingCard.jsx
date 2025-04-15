export default function ReadingCard({ reading }) {
    return (
        <a
            href={reading.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
        >
            <div className="bg-zinc-900 border border-zinc-700 hover:border-blue-500 rounded-2xl shadow-sm hover:shadow-lg transition-all p-6 h-full flex flex-col justify-between">
                <div>
                    <h3 className="text-white text-base font-semibold group-hover:text-blue-400 transition-colors line-clamp-2">
                        {reading.title}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-3 line-clamp-4 leading-relaxed">
                        {reading.description}
                    </p>
                </div>
                <div className="mt-6 text-xs text-zinc-500 italic">
                    — {reading.author}
                </div>
            </div>
        </a>
    );
}