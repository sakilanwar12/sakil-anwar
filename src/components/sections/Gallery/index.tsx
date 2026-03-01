"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { galleryImages, GalleryImage } from "./constant";
import { X, ZoomIn } from "lucide-react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="bg-background px-6 py-44">
      <div className="mx-auto max-w-7xl">
        <div className="mb-32">
          <h2 className="font-serif text-6xl font-bold md:text-9xl">
            Visual <br /> Playground
          </h2>
          <p className="text-default-400 mt-12 max-w-2xl text-2xl leading-relaxed">
            A curated collection of interfaces, experiments, and creative
            explorations where I push the boundaries of frontend craft.
          </p>
        </div>

        <div className="masonry-grid gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="masonry-item group relative cursor-zoom-in overflow-hidden rounded-4xl bg-white/5"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100">
                <ZoomIn className="size-12 text-white" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-primary mb-2 block text-sm font-bold tracking-widest uppercase">
                    {image.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{image.alt}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-6 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hover:text-primary absolute top-10 right-10 text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={48} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-h-full max-w-full overflow-hidden rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width * 2}
                height={selectedImage.height * 2}
                className="max-h-[85vh] w-auto max-w-full object-contain shadow-2xl"
              />
              <div className="mt-8 text-center">
                <p className="text-primary mb-2 text-lg font-bold tracking-widest uppercase">
                  {selectedImage.category}
                </p>
                <h3 className="font-serif text-4xl font-bold text-white">
                  {selectedImage.alt}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
