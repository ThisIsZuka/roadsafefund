import React, { useState } from "react";

const videoGroups = [
    {
        videos: [
            {
                title: "เลขสวยถูกใจ",
                youtubeUrl: "https://www.youtube.com/embed/vheT3lk361Y",
            },
            {
                title: "ช่วยเหลือผู้พิการ",
                youtubeUrl: "https://www.youtube.com/embed/ZsfAdDcRj4A",
            },
            {
                title: "สนับสนุนโครงการ กปถ.",
                youtubeUrl: "https://www.youtube.com/embed/yA3STvQkNYY",
            },
            {
                title: "เลขสวยถูกใจ",
                youtubeUrl: "https://www.youtube.com/embed/CIKzzDAlMCM",
            },
            {
                title: "ช่วยเหลือผู้พิการ",
                youtubeUrl: "https://www.youtube.com/embed/jOlZK-nehYg",
            },
            {
                title: "สนับสนุนโครงการ กปถ.",
                youtubeUrl: "https://www.youtube.com/embed/DE1bVDhE6Kc",
            },
            {
                title: "เลขสวยถูกใจ",
                youtubeUrl: "https://www.youtube.com/embed/HL9XwwymHzE",
            },
        ],
    },
];

const VideoPlayer = ({ selectedVideo }) => (
    <div className="w-full aspect-video rounded-xl overflow-hidden shadow mb-4">
        <iframe
            src={selectedVideo.youtubeUrl}
            title={selectedVideo.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    </div>
);

const getYoutubeThumbnail = (url) => {
    const videoId = url.split("embed/")[1];
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`; // หรือ `hqdefault.jpg` ก็ได้
};


const VideoList = ({ videos, onSelect, currentVideo }) => (
    <div className="flex flex-col gap-4 overflow-y-auto max-h-[300px] lg:max-h-[500px] pr-2">
        {videos.map((video, idx) => {
            const isActive = video.youtubeUrl === currentVideo.youtubeUrl;
            return (
                <button
                    key={idx}
                    onClick={() => onSelect(video)}
                    className={`flex-shrink-0 flex items-start gap-3 text-left p-3 rounded-xl transition border shadow-sm ${isActive
                        ? "bg-[#f4f1fa] border-[#7E6BAF]"
                        : "bg-white hover:bg-gray-50 border-gray-200"
                        } w-[300px] w-full`}
                >
                    <div className="relative w-28 aspect-video rounded-lg overflow-hidden shadow-sm">
                        <img
                            src={getYoutubeThumbnail(video.youtubeUrl)}
                            alt={video.title}
                            className="w-full h-full object-cover"
                        />
                        {/* ปุ่ม Play แบบ custom */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-7 h-7 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow text-sm">
                                ▶
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 pt-1">
                        <p className="text-sm font-medium text-gray-800 leading-snug">{video.title}</p>
                    </div>
                </button>
            );
        })}
    </div>
);

const Divider = ({ label }) => (
    <div className="flex items-center justify-center my-10">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="mx-4 text-sm text-gray-500 font-medium">{label}</span>
        <div className="flex-grow border-t border-gray-200"></div>
    </div>
);

export function VideoSectionPage() {
    const [selectedGroup, setSelectedGroup] = useState(videoGroups[0]);
    const [selectedVideo, setSelectedVideo] = useState(videoGroups[0].videos[0]);

    return (
        <main className="max-w-7xl mx-auto px-4 space-y-14">

            <Divider label="วิดีโอแนะนำ" />

            {videoGroups.map((group, idx) => {
                const isActive = selectedVideo.youtubeUrl === group.videos[0].youtubeUrl;
                return (
                    <section key={idx}>
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Video player */}
                            <div className="flex-1">
                                <VideoPlayer selectedVideo={selectedVideo} />
                            </div>

                            {/* Side list */}
                            <div className="w-full lg:w-80 overflow-y-auto">
                                <VideoList
                                    videos={group.videos}
                                    onSelect={setSelectedVideo}
                                    currentVideo={selectedVideo}
                                />
                            </div>
                        </div>
                    </section>
                );
            })}
        </main>
    );
}
