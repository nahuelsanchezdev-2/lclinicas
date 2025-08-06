import { useState } from "react";
import { Play } from "lucide-react";

// Si querés, podés eliminar estos imports si ya no usás thumbnails
import video1 from "@/assets/videos/R9V14.mp4";
import video2 from "@/assets/videos/R9V13.mp4";
import video3 from "@/assets/videos/VIDEO5.mp4";
import video4 from "@/assets/videos/VIDEO4.mp4";

const videos = [
  {
    id: 1,
    title: "Dale una bienvenida cálida a tu sitio web",
    description: "Lucía te muestra cómo recibir a tus pacientes y ayudarlos a agendar una cita en minutos.",
    preview: video1
  },
  {
    id: 2,
    title: "Invita a tus pacientes a resolver sus dudas",
    description: "Lucía responde preguntas comunes sobre tratamientos y dudas generales con claridad y rapidez.",
    preview: video2
  },
  {
    id: 3,
    title: "Aprende a mantener una boca saludable con Pilar",
    description: "Pilar, nuestra experta en salud dental, comparte consejos prácticos para una boca sana.",
    preview: video4
  },
  {
    id: 4,
    title: "Descubre cómo trabaja nuestra clínica con Pilar",
    description: "Pilar explica cómo funciona la clínica, guiando a los pacientes en cada paso del proceso.",
    preview: video3
  },
];

const VideoCard = ({ video }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-xl shadow-card hover:shadow-button transition-all duration-300 overflow-hidden hover:scale-105"
      onMouseLeave={() => setPlaying(false)}
    >
      <div className="relative aspect-video">
        {playing ? (
          <video
            src={video.preview}
            controls
            autoPlay
            controlsList="nofullscreen nodownload noremoteplayback"
            className="w-full h-full object-cover"
            onEnded={() => setPlaying(false)}
          />
        ) : (
          <video
            src={video.preview}
            autoPlay
            loop
            muted
            playsInline
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

const VideoShowcase = () => (
  <section className="py-20 bg-gradient-to-b from-primary-light to-white">
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
