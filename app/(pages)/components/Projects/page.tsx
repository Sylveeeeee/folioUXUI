"use client";
import ImageComponent from "next/image";
import { useState } from "react";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectOneImages = ["/coffee.png", "/coffee2.png", "/coffee3.png", "/coffee4.png"];
  const projectTwoImages = ["/shop.png", "/shop2.png", "/shop3.png"];
  const projectThreeImages = ["/plant1.png", "/plant2.png", "/plant3.png"];

  const openModal = (images: string[]) => {
    setModalImages(images);
    setCurrentIndex(0);
    setShowModal(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? modalImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === modalImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      id="Projects"
      className="min-h-[80vh] flex flex-col justify-center items-center gap-12 px-4 py-8"
    >
      <div className="text-black text-3xl md:text-[2.5rem] font-semibold mb-4 text-center">
        Projects
      </div>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full max-w-5xl">
        {/* Project One */}
        <div className="flex flex-col justify-center items-center border-2 border-black/40 rounded-[2rem] p-6 w-full md:flex-1 bg-white min-h-[430px]">
          <ImageComponent
            className="rounded-xl mb-4 object-contain w-full h-[400px] md:h-[320px]"
            src="/coffee4.png"
            alt="projectone"
            width={500}
            height={300}
            onClick={() => openModal(projectOneImages)}
          />
          <div className="text-black text-xl md:text-2xl font-bold py-2 text-center">
            Peedee Coffee roaster
          </div>
          <a
            className="mt-2 hover:text-white text-base md:text-lg px-4 py-2 hover:bg-black text-black/60 border-2 border-black/40 rounded-full transition"
            href="https://www.figma.com/design/6ikLfb0JnMkyE5yJAG1fbu/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B8%A3%E0%B8%A7%E0%B8%9A%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F?node-id=15-563&t=xsMYwL3fhHOjAJ7t-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            figma
          </a>
        </div>
        {/* Project Two */}
        <div className="flex flex-col justify-center items-center border-2 border-black/40 rounded-[2rem] p-6 w-full md:flex-1 bg-white min-h-[430px]">
          <ImageComponent
            className="rounded-xl mb-4 object-contain w-full h-[200px] md:h-[320px]"
            src="/shop3.png"
            alt="projecttwo"
            width={400}
            height={220}
            onClick={() => openModal(projectTwoImages)}
          />
          <div className="text-black text-xl md:text-2xl font-bold py-2 text-center">
            Center of the Universe
          </div>
          <div className="flex  items-center  gap-2 mt-2">
            <a
              className="hover:text-white text-base md:text-lg px-4 py-2 hover:bg-black text-black/60 border-2 border-black/40 rounded-full transition"
              href="https://www.figma.com/design/AldP8EKNG2w8IjPeeo7kmd/Center-of-the-Universe?node-id=0-1&t=6rGzLEStApEfp217-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              figma
            </a>
            <a
              className="hover:text-white text-base md:text-lg px-4 py-2 hover:bg-black text-black/60 border-2 border-black/40 rounded-full transition"
              href="https://www.figma.com/proto/AldP8EKNG2w8IjPeeo7kmd/Center-of-the-Universe?page-id=0%3A1&node-id=470-1049&p=f&viewport=348%2C234%2C0.03&t=JNNF3YXxQTWubPwb-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=470%3A1049&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prototype
            </a>
          </div>
        </div>
        {/* Project Three */}
        <div className="flex flex-col justify-center items-center border-2 border-black/40 rounded-[2rem] p-6 w-full md:flex-1 bg-white min-h-[430px]">
          <ImageComponent
            className="rounded-xl mb-4 object-contain w-full h-[200px] md:h-[320px]"
            src="/plant2.png"
            alt="projecttwo"
            width={400}
            height={220}
            onClick={() => openModal(projectThreeImages)}
          />
          <div className="text-black text-xl md:text-2xl font-bold py-2 text-center">
            Plantify
          </div>
          <div className="flex  items-center  gap-2 mt-2">
            <a
              className="hover:text-white text-base md:text-lg px-4 py-2 hover:bg-black text-black/60 border-2 border-black/40 rounded-full transition"
              href="https://www.figma.com/design/AahXTq6rhwJ2Cbk8PnDURP/plantify?node-id=2201-120&t=MM2asPqsxzG30TPX-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              figma
            </a>
            <a
              className="hover:text-white text-base md:text-lg px-4 py-2 hover:bg-black text-black/60 border-2 border-black/40 rounded-full transition"
              href="https://www.figma.com/proto/AahXTq6rhwJ2Cbk8PnDURP/%E0%B8%88%E0%B8%B4%E0%B8%A3%E0%B8%A7%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B9%8C?page-id=2201%3A120&node-id=2425-2004&p=f&viewport=589%2C168%2C0.18&t=IaCGasUBFNTtsjhx-1&scaling=scale-down&content-scaling=fixed"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prototype
            </a>
          </div>
        </div>
      </div>
      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-4 w-[90vw] max-w-md flex flex-col items-center relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4 text-xl font-bold text-black"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <div className="flex items-center gap-4 justify-center w-full ">
              <button
                className="text-2xl px-2 py-1 rounded-full  hover:text-black/20   text-black/50"
                onClick={handlePrev}
              >
                ◀
              </button>
              <div className="flex justify-center items-center w-full">
                <ImageComponent
                  src={modalImages[currentIndex]}
                  alt={`project-img-${currentIndex}`}
                  width={320}
                  height={200}
                  className="rounded-lg object-contain w-full h-auto max-h-[60vh]"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <button
                className="text-2xl px-2 py-1 rounded-full hover:text-black/20   text-black/50"
                onClick={handleNext}
              >
                ▶
              </button>
            </div>
            <div className="mt-2 text-sm text-black/60">
              {currentIndex + 1} / {modalImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}