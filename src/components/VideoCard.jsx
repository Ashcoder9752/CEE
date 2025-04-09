const VideoCard = ({video}) => {
    return (
        <div className="flex-shrink-0 w-[300px]">
            <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full rounded-xl overflow-hidden bg-neutral-950 hover:bg-neutral-900 transition-all duration-300 shadow-md hover:shadow-xl border border-neutral-800"
            >
                <div className="relative w-full">
                    <img
                        src={
                            video.thumbnail ||
                            `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
                        }
                        alt={video.title}
                        className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>

                <div className="px-4 py-3">
                    <p className="text-white text-base font-medium line-clamp-2 leading-snug group-hover:text-sky-400 transition-colors">
                        {video.title}
                    </p>
                </div>
            </a>
        </div>

    )
}

export default VideoCard;