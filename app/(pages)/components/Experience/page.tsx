
import { FaFigma, FaRegCheckCircle } from "react-icons/fa";
import { SiMiro } from "react-icons/si";


const skills = [
  { icon: <FaFigma />, label: "Figma", Ex: "Experienced" },
  { icon: <SiMiro />, label: "Miro", Ex: "Experienced" },
  { icon: <FaRegCheckCircle />, label: "User Research", Ex: "Experienced" },
  { icon: <FaRegCheckCircle />, label: "Wireframing", Ex: "Experienced" },
  { icon: <FaRegCheckCircle />, label: "Prototyping", Ex: "Intermediate" },
  { icon: <FaRegCheckCircle />, label: "Usability Testing", Ex: "Intermediate" },
];

export default function Experience() {
  return (
    <div
      id="experience"
      className="flex flex-col justify-center items-center gap-12 min-h-[80vh] px-4 py-8"
    >
      <div className="text-black text-3xl md:text-[2.5rem] font-semibold text-center">
        Experience
      </div>
      <div className="w-full max-w-5xl flex justify-center">
        <div className="text-black border-2 border-black/40 rounded-xl bg-white w-full py-8 px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="flex flex-col items-center w-24 md:w-32"
              >
                <div className="text-[40px] md:text-[50px] mb-2">{skill.icon}</div>
                <span className="text-base md:text-lg text-center">{skill.label}</span>
                <span className="text-sm md:text-base text-center flex  text-gray-500"><FaRegCheckCircle className="text-[20px] mr-2"/>{skill.Ex}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}