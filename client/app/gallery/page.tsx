"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react";
import { Card } from "@/components/ui/card"

type GalleryItem = {
  title: string | null;
  description: string | null;
  image?: string;
  video?: string;
};

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen pt-24 pb-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-3xl mx-auto text-center mb-16"
        >
          {/* Headings */}
          <h3 className="text-purple-400 font-bold mb-4">
            Business Press India x AASGON Presents
          </h3>
          <h1 className="text-5xl font-extrabold mb-4">
            Indo-African Scholarships Launch Event
          </h1>
          <p className="text-gray-400 text-lg">
            Explore the highlights of our event through images and videos.
          </p>

          {/* Hero Image */}
          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src="/Indo-AfricanScholarshipsLaunchEvent/1.jpg"
              alt="Indo-African Scholarships Launch Event"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer group"
              onClick={() => handleItemClick(item)}
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
                    <p className="text-sm text-gray-400">
                      {item.description || null}
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="relative h-[500px]">
              {selectedItem.image && (
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title || "Gallery Item"}
                  fill
                  className="object-cover"
                />
              )}
              {selectedItem.video && (
                <video
                  src={selectedItem.video}
                  controls
                  className="min-w-full min-h-full object-cover pt-16 mt-34"
                />
              )}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                {selectedItem.title || null}
              </h3>
              {selectedItem.description && (
                <p className="text-gray-400">{selectedItem.description || null}</p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

const galleryItems = [
  
  {
    title: null,
    description: null,
    video: "/Indo-AfricanScholarshipsLaunchEvent/1.mp4",
  },
  {
    title: null,
    description: null,
    video: "/Indo-AfricanScholarshipsLaunchEvent/2.mp4",
  },
  {
    title: null,
    description: null,
    video: "/Indo-AfricanScholarshipsLaunchEvent/3.mp4",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/1.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/2.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/3.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/4.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/5.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/6.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/7.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/8.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/9.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/10.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/11.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/12.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/13.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/14.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/15.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/16.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/17.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/18.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/19.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/20.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/21.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/22.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/23.jpg",
  },
  {
    title: null,
    description: null,
    image: "/Indo-AfricanScholarshipsLaunchEvent/24.jpg",
  },

]

