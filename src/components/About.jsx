import React from "react";
// import aboutImg from "../assets/images/about.png";
const About = () => {

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              An outstanding fresh graduate student with a track record of academic and extracurricular success. 
              Extensive experience in leadership, particularly in higher education and organizational environments. 
              Working across departments, with faculty, administrators and students is a strength. 
              Communication skills demonstrated by involvement in the organizational world. Have experience with 
              design software but currently focus on software development area.
              </p>
              <div className="flex justify-center mt-10 gap-7">
                <a href="https://drive.google.com/file/d/1gZS_BJeCvrnlkcLxTniEQ-9TxqFNXllD/view?usp=sharing" download>
                  <button className="btn-primary">Download CV</button>
                </a>
              </div>
              <br />
              <br />
            </div>
          </div>
          {/* <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
