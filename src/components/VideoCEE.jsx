import React from "react";
import videoSections from "../data/videosData.json"
import VideoCard from "./VideoCard.jsx";
import SectionTitle from "./SectionTitle.jsx";

const VideoCEE = () => {
    return (
        <div className="space-y-16">
            {videoSections.map((section, index) => (
                <section key={index}>
                    <SectionTitle title={section.title} />

                    <div className="flex overflow-x-auto gap-4 hide-scrollbar pb-2">
                        {section.videos.map((video, index) => (
                            <VideoCard video={video} key={index} />
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}

export default VideoCEE