import { motion } from "framer-motion";
import Image from "next/image";
import Video from "next-video";

interface SectionProps {
  title: string;
  content: string;
  media?: {
    type: "image" | "video";
    src: string;
    alt?: string;
  };
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, content, media, reverse }) => {
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center mb-12 min-h-screen`}>
      {media && media.type === "image" && (
        <div className="w-full md:w-1/2 h-80 relative min-h-screen">
          <Image
            src={media.src}
            alt={media.alt || ""}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
      {media && media.type === "video" && (
        <div className="w-full md:w-1/2 h-80 relative min-h-screen">
          <Video
            src={media.src}
            className="rounded-lg shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      )}
      <div className="md:w-1/2 md:pl-12 text-left">
        <h3 className="text-3xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-300">{content}</p>
      </div>
    </div>
  );
};

export default Section;