"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Card } from "@/components/ui/card";

type GalleryItem = {
  title: string | null;
  description: string | null;
  image?: string;
  video?: string;
};

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isGsuaImage, setIsGsuaImage] = useState(false); // Track if selected is from GSUA

  const handleItemClick = (item: GalleryItem, fromGsua: boolean) => {
    setSelectedItem(item);
    setIsGsuaImage(fromGsua);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsGsuaImage(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 space-y-24">
        {/* Indo-African Event */}
        <EventSection
          title="Indo-African Scholarships Launch Event"
          subtitle="Business Press India x AASGON Presents"
          heroImage="/Indo-AfricanScholarshipsLaunchEvent/1.jpg"
          description="Explore the highlights of our event through images and videos."
          items={indoAfricanItems}
          onClick={(item) => handleItemClick(item, false)}
        />

        <hr className="border-purple-700" />

        {/* GSUA Summit */}
        <EventSection
          title="GSUA Summit"
          subtitle="House of Lord’s GSUA 25 Summit Honours & Awards International Icons & Personalities"
          heroImage="/GSUA/1(1).jpg"
          description="Moments from the GSUA Summit event."
          items={gsuaItems}
          onClick={(item) => handleItemClick(item, true)}
        />

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`relative ${
                isGsuaImage ? "w-full h-full" : "max-w-4xl h-auto"
              } bg-gray-900 rounded-lg shadow-lg overflow-hidden`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50"
                onClick={closeModal}
              >
                ✕
              </button>
              <div
                className={`relative ${
                  isGsuaImage ? "w-full h-full" : "h-[500px]"
                }`}
              >
                {selectedItem.image && (
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title || "Gallery Item"}
                    fill
                    className="object-contain"
                  />
                )}
                {selectedItem.video && (
                  <video
                    src={selectedItem.video}
                    controls
                    className="min-w-full min-h-full object-cover"
                  />
                )}
              </div>
              {!isGsuaImage && selectedItem.description && (
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedItem.title || null}
                  </h3>
                  <p className="text-gray-400">{selectedItem.description}</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

function EventSection({
  title,
  subtitle,
  heroImage,
  description,
  items,
  onClick,
}: {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  items: GalleryItem[];
  onClick: (item: GalleryItem) => void;
}) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h3 className="text-purple-400 font-bold mb-4">{subtitle}</h3>
        <h1 className="text-5xl font-extrabold mb-4">{title}</h1>
        <p className="text-gray-400 text-lg">{description}</p>

        <div className="relative w-full h-64 md:h-96 mt-6">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="cursor-pointer group"
            onClick={() => onClick(item)}
          >
            <Card className="overflow-hidden bg-gray-900/50 border-gray-800 group-hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title || "Gallery Item"}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                )}
                {item.video && (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                  >
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">
                  {item.title || null}
                </h3>
                {item.description && (
                  <p className="text-sm text-gray-400">{item.description}</p>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Indo-African Event Items
const indoAfricanItems: GalleryItem[] = [
  { title: null, description: null, video: "/Indo-AfricanScholarshipsLaunchEvent/1.mp4" },
  { title: null, description: null, video: "/Indo-AfricanScholarshipsLaunchEvent/2.mp4" },
  { title: null, description: null, video: "/Indo-AfricanScholarshipsLaunchEvent/3.mp4" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/1.jpg" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/2.jpg" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/3.jpg" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/4.jpg" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/5.jpg" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/6.jpg" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/7.JPG" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/8.JPG" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/9.JPG" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/10.JPG" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/11.JPG" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/12.JPG" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/13.JPG" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/14.JPG" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/15.JPG" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/16.JPG" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/17.JPG" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/18.JPG" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/19.JPG" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/20.JPG" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/21.JPG" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/22.JPG" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/23.JPG" },
  { title: null, description: null, image: "/Indo-AfricanScholarshipsLaunchEvent/24.JPG" },
];

// GSUA Event Items
const gsuaItems: GalleryItem[] = Array.from({ length: 68 }, (_, i) => ({
  title: null,
  description: null,
  image: `/GSUA/1(${i + 1}).jpg`,
}));




