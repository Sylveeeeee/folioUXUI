import ImageComponent from "../ImageComponent";

export default function About() {
  return (
    <div
      id="about"
      className="min-h-[80vh] flex flex-col justify-center items-center px-4 py-8 text-black"
    >
      <div className="text-3xl md:text-4xl font-semibold mb-8 text-center">
        About Me
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl">
        {/* ซ่อนรูปบนจอเล็ก */}
        <div className="hidden lg:flex rounded-2xl overflow-hidden flex-shrink-0 h-40 w-40 md:h-60 md:w-60 lg:h-72 lg:w-72">
          <ImageComponent
            src="/profile11.jpg"
            alt="Profile"
            width={300}
            height={300}
          />
        </div>
        <div className="flex  md:items-center flex-col gap-4 w-full">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="border-2 border-black/40 rounded-3xl p-6 w-full md:w-80">
              <div className="text-base flex mb-2">
                <span className="font-semibold mr-2">Name:</span> Jirawat Tangdan
              </div>
              <div className="text-base flex mb-2">
                <span className="font-semibold mr-2">Gender:</span> Male
              </div>
              <div className="text-base flex mb-2">
                <span className="font-semibold mr-2">Interests:</span> Fitness, Gaming
              </div>
              <div className="text-base flex">
                <span className="font-semibold mr-2">Personality:</span> Creative, optimistic
              </div>
            </div>
            <div className="border-2 border-black/40 rounded-3xl p-6 w-full md:w-80 flex flex-col items-center">
              <div className="font-semibold text-lg mb-2">Education</div>
              <div className="text-base">University of Phayao</div>
              <div className="text-base">Software Engineering</div>
            </div>
          </div>
          <div className="mt-4 text-justify items-center text-base md:text-lg ">
            Hello! I&apos;m Mack Jirawat, a passionate UX/UI Design student dedicated to creating intuitive, user-centered designs that enhance user satisfaction and engagement. With a strong foundation in design principles, user research, and prototyping tools, I aim to contribute to innovative digital products while collaborating with cross-functional teams to deliver seamless, impactful experiences.
          </div>
        </div>
      </div>
    </div>
  );
}