// VideoCard.jsx o dentro del mismo archivo arriba
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
