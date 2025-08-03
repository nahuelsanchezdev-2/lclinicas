

import thumbnail1 from "@/assets/video-thumbnail-1.jpg";
import thumbnail2 from "@/assets/video-thumbnail-2.jpg";
import thumbnail3 from "@/assets/video-thumbnail-3.jpg";
import thumbnail4 from "@/assets/video-thumbnail-4.jpg";
import video1 from "@/assets/videos/R9V9.mp4";

import { useState } from "react";
import { Play } from "lucide-react";

const VideoCard = ({ video }) => {
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-xl shadow-card hover:shadow-button transition-all duration-300 overflow-hidden hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPlaying(false); }}
    >
      <div className="relative aspect-video">
        {playing ? (
          <video
            src={video.preview}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        ) : hovered && video.preview ? (
          <video
            src={video.preview}
            poster={video.thumbnail}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
        )}

        {/* Play Button SOLO si no está playing */}
        {!playing && (
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
            <button
              className="bg-white/90 rounded-full p-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-soft"
              onClick={e => { e.stopPropagation(); setPlaying(true); }}
              aria-label="Reproducir video"
            >
              <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
            </button>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          {video.title}
        </h3>
        <p className="text-text-secondary">{video.description}</p>
      </div>
    </div>
  );
};




const VideoShowcase = () => {
  const videos = [
    {
    id: 1,
    title: "Comunicación personalizada con pacientes",
    description: "Descubrí cómo nuestra recepcionista virtual genera interacciones cálidas y profesionales",
    thumbnail: thumbnail1,
    preview: video1
    },
    {
      id: 2,
      title: "24/7 Availability",
      description: "Never miss a patient inquiry, even after hours",
      thumbnail: thumbnail2,
    preview: video1
    },
    {
      id: 3,
      title: "Smart Appointment Scheduling",
      description: "Automated booking and reminders that work seamlessly",
      thumbnail: thumbnail3,
    preview: video1
    },
    {
      id: 4,
      title: "Reduced Administrative Load",
      description: "Free your staff to focus on patient care",
      thumbnail: thumbnail4,
    preview: video1
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            See Our Virtual Receptionist in Action
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Watch real demonstrations of how our solution transforms patient communication 
            and streamlines your practice operations
          </p>
        </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {videos.map((video, index) => (
    <VideoCard key={video.id} video={video} />
  ))}
</div>
      </div>
    </section>
  );
};

export default VideoShowcase;