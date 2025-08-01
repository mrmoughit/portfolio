import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter, FaNodeJs } from "react-icons/fa6";
import { FaHtml5, FaCss3Alt, FaDiscord, FaJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { SiNestjs, SiExpress } from "react-icons/si";
import { SiFastify, SiGooglecloud } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
function NavBar() {
  return (
    <div className="flex flex-col sm:flex-row w-full h-auto sm:h-[8%] p-4 sm:px-8 items-center bg-white shadow-md">
      <div className="logo flex items-center justify-center sm:justify-start w-full sm:w-[30%] mb-4 sm:mb-0">
        <Image
          className="h-auto"
          src="/figma-exemples-logos.png"
          width={120}
          height={40}
          alt="Logo"
          priority
        />
      </div>
      <div className="pther flex flex-col sm:flex-row justify-between items-center w-full sm:w-[70%] gap-4 sm:gap-0">
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-lg sm:text-2xl">
          <button className="hover:bg-sky-50 px-3 py-1 rounded">About Me</button>
          <button className="hover:bg-sky-50 px-3 py-1 rounded">Skills</button>
          <button className="hover:bg-sky-50 px-3 py-1 rounded">Project</button>
          <button className="hover:bg-sky-50 px-3 py-1 rounded">Contact Me</button>
        </div>
        <div>
          <button className="bg-black text-white text-lg sm:text-2xl flex items-center gap-2 px-5 py-2 rounded-xl hover:bg-gray-800 transition">
            Resume <FiDownload />
          </button>
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-[40%] mt-40 px-4 md:px-16 gap-8 ">
      <div className="about flex flex-col justify-center items-center md:items-start h-auto md:h-full w-full md:w-[60%] text-center md:text-left relative">
        <div className=" p-6 rounded-md w-full md:w-auto">
          <p className="text-3xl sm:text-5xl font-semibold">Hello I'm Zalaksya.</p>
          <p className="text-3xl sm:text-5xl font-semibold mt-2">Software Engineer</p>
          <p className="text-3xl sm:text-5xl font-semibold mt-2">Based in Morocco</p>
          <p className="text-lg sm:text-2xl mt-6">
            I’m a software engineer skilled in full-stack web development,
          </p>
          <p className="text-lg sm:text-2xl mt-2 pb-6">
            cloud technologies, and DevOps practices to build scalable and efficient applications.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <div className="bg-white border-2 border-black px-3 py-2 rounded hover:bg-gray-100 transition">
                <GrLinkedin size={40} color="black" />
              </div>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <div className="bg-white border-2 border-black px-3 py-2 rounded hover:bg-gray-100 transition">
                <FaGithub size={40} color="black" />
              </div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <div className="bg-white border-2 border-black px-3 py-2 rounded hover:bg-gray-100 transition">
                <FaSquareXTwitter size={40} color="black" />
              </div>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <div className="bg-white border-2 border-black px-3 py-2 rounded hover:bg-gray-100 transition">
                <FaDiscord size={40} color="black" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="image flex items-center justify-center h-auto  md:h-full w-full md:w-[40%]">
        <Image
          className="w-[70%] h-auto"
          src="/user.png"
          width={300}
          height={300}
          alt="User"
          priority
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="w-full h-auto py-8 px-4 md:px-16">
      <div className="flex justify-center mb-6">
        <h1 className="text-3xl sm:text-5xl font-bold">My Skills</h1>
      </div>
      <div className="flex justify-center gap-4 flex-wrap">
        {[
          { icon: <FaHtml5 size={40} />, label: "HTML5" },
          { icon: <FaCss3Alt size={40} />, label: "CSS3" },
          { icon: <FaJs size={40} />, label: "JS" },
          { icon: <RiNextjsFill size={40} />, label: "NextJS" },
          { icon: <FaNodeJs size={40} />, label: "NodeJS" },
          { icon: <IoLogoReact size={40} />, label: "ReactJS" },
          { icon: <SiNestjs size={40} />, label: "NestJS" },
          { icon: <SiExpress size={40} />, label: "ExpressJS" },
          { icon: <SiFastify size={40} />, label: "FastifyJS" },
          { icon: <SiGooglecloud size={40} />, label: "G Cloud" },
          { icon: <FaAws size={40} />, label: "AWS" },
          { icon: <FaDocker size={40} />, label: "Docker" },
          { icon: <Image key="cpp" src="/c++.webp" width={40} height={40} alt="C++" />, label: "C++" },
        ].map(({ icon, label }, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center w-[100px] h-[100px] border-2 border-black bg-white hover:w-[120px] hover:h-[120px] transition-all duration-300 rounded-md cursor-pointer"
          >
            {icon}
            <h1 className="mt-2 text-lg font-medium">{label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}


function Project(){
  return (
    <div className="w-full h-auto bg-black">
      <div className="My Experience p-8 flex justify-center "><h1 className="text-3xl text-white">My Projects</h1> </div>



      <div className="flex flex-wrap items-center gap-3.5 bg-black h-auto ">
        <div className=" w-[200px] h-[400px] bg-white ">
          <Image className="w-full h-[50%]" src="" alt="" width={20} height={20}/>
        </div>
        <div className=" w-[200px] h-[400px] bg-white ">
          <Image className="w-full h-[50%]" src="" alt="" width={20} height={20}/>
        </div>
      </div>












    
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <NavBar />
      <AboutMe />
      <Skills />
      <Project />
    </div>
  );
}
