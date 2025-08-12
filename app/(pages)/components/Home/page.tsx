import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import ImageComponent from "../ImageComponent";

export default function Home() {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row justify-center items-center h-auto md:h-[80vh] gap-8 md:gap-[5rem] px-4 py-8"
    >
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-8 md:gap-[5rem]">
        <div className="rounded-full h-56 w-56 sm:h-64 sm:w-64 md:h-[400px] md:w-[400px] overflow-hidden flex justify-center items-center mb-6 md:mb-0">
          <ImageComponent
            src="/profile.jpg"
            alt="Profile"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-2xl sm:text-3xl md:text-[1.5rem] md:py-4 text-[#00000080]">
            {`Hello, I'm`}
          </p>
          <span className="text-3xl sm:text-4xl md:text-[3rem] md:pt-4 text-black font-semibold">
            Jirawat Tangdan
          </span>
          <div className="text-[#000000ad] text-xl sm:text-2xl md:text-[1.75rem] md:py-4 mb-2 md:mb-[10px]">
            <span >UX/UI Designer</span>
          </div>
          <a
            href="/Resume_UXUI.pdf"
            download
            className="inline-block bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition"
          >
            Download Resume
          </a>
          <div className="flex text-black mt-2">
            <a
              href="https://github.com/Sylveeeeee"
              className="text-3xl sm:text-4xl md:text-[2rem] mr-4 hover:text-gray-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub />
            </a>
            <a
              href="https://www.instagram.com/macklaren_/profilecard/?igsh=MW5kdXlucGRoanoxYg=="
              className="text-3xl sm:text-4xl md:text-[2rem] hover:text-pink-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}