import { useState, useRef } from "react";
import { Play } from "lucide-react";

// Imports de videos
import video1 from "@/assets/videos/R9V14.mp4";
import video2 from "@/assets/videos/R9V13.mp4";
import video3 from "@/assets/videos/VIDEO5.mp4";
import video4 from "@/assets/videos/VIDEO4.mp4";

// Lista de videos
const videos = [
  {
    id: 1,
    title: "Dale una bienvenida cálida a tu sitio web",
    description:
      "Lucía recibe a tus pacientes con una sonrisa y los invita a agendar una cita en minutos.",
    preview: video1,
  },
  {
    id: 2,
    title: "Invita a tus pacientes a resolver sus dudas",
    description:
      "Lucía responde preguntas frecuentes con claridad y rapidez para que tus pacientes tomen decisiones informadas.",
    preview: video2,
  },
  {
    id: 3,
    title: "Aprende a mantener una boca saludable con Pilar",
    description:
      "Pilar, nuestra experta en salud dental, comparte consejos prácticos para una boca sana.",
    preview: video4,
  },
  {
    id: 4,
    title: "Descubre cómo trabaja nuestra clínica con Pilar",
    description:
      "Pilar guiando a los pacientes en todo momento para que se sientan acompañados.",
    preview: video3,
  },
];

const VideoCard = ({ video }) => {
  const [playing, setPlaying] = useState(false);
  const [resumeTime, setResumeTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;

    // Retoma desde donde quedó, o desde 0 la primera vez
    el.currentTime = resumeTime || 0;
    el.muted = false;
    setPlaying(true);
    el.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    const el = videoRef.current;
    if (!el) return;

    if (playing) {
      // Guardamos dónde lo dejó el usuario
      setResumeTime(el.currentTime);
    }
    // Volvemos a preview: loop mudo desde 0
    setPlaying(false);
    el.muted = true;
    el.currentTime = 0;
    // importante: que siga corriendo el preview
    el.play().catch(() => {});
  };

  const handleEnded = () => {
    // Si llegó al final en modo play, vuelve a preview desde 0
    setPlaying(false);
    setResumeTime(0);
    const el = videoRef.current;
    if (el) {
      el.muted = true;
      el.currentTime = 0;
      el.play().catch(() => {});
    }
  };

  return (
    <div
      className="group relative bg-white rounded-xl shadow-card hover:shadow-button transition-all duration-300 overflow-hidden hover:scale-105"
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-video">
        <video
          ref={videoRef}
          src={video.preview}
          autoPlay
          loop={!playing}            // en preview hace loop
          muted={!playing}           // en preview está mudo
          playsInline
          controls={playing}         // controles solo en modo play
          className="w-full h-full object-cover"
          onEnded={handleEnded}
        />

        {/* Capa + botón Play (solo en preview) */}
        {!playing && (
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
            <button
              className="bg-white/90 rounded-full p-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-soft"
              onClick={handlePlayClick}
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

const VideoShowcase = () => (
  <section id="recepcionist" className="py-20 bg-gradient-to-b from-primary-light to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
          Conoce a la única recepcionista digital con rostro e identidad, diseñada para ofrecer una atención cálida y personalizada.
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Explora cómo nuestra solución optimiza la comunicación con tus pacientes, agiliza la gestión de tu consultorio y ofrece un trato cálido y personalizado desde el primer contacto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  </section>
);

export default VideoShowcase;
