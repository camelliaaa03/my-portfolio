import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project_person from "../assets/images/person.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Frontend Study Case Sistem Layanan Apotek",
      github_link: "https://github.com/camelliaaa03/Frontend-Studycase-Apotik",
      // description: "Reactjs, TailwindCss",
    },
    {
      img: project2,
      name: "Backend Study Case Sistem Layanan Apotek",
      github_link: "https://github.com/camelliaaa03/Backend-Studycase-Apotik",
      // live_link: "https://myjobsearch.netlify.app",
    },
    {
      img: project3,
      name: "Modern Login Register Figma",
      github_link: "https://www.figma.com/file/WyOi5ZImbk0yLzYXeG9Ui2/Modern-Login-Register-Page?type=design&node-id=0%3A1&mode=design&t=4Ia73Y9AfVORZT0x-1",
      // live_link: "https://highking01.netlify.app",
    },
    {
      img: project4,
      name: "Aplikasi Kumpulan Doa Android Studio Kotlin",
      github_link: "https://github.com/camelliaaa03/Proyek-Akhir-AndroidStudio_203110051",
      // live_link: "https://reacttailwindnavbar.netlify.app",
    },
    
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-zinc-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-white bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    {/* <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
