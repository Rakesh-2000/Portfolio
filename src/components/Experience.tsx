import React from 'react';

type WorkExperienceType = {
  company: string;
  role: string;
  duration: string;
  description: string;
  logo?: string;
};

const workExperiences: WorkExperienceType[] = [
  {
    company: "Design Esthetics",
    role: "Software Developer",
    duration: "Jan 2023 - Present",
    description: "Developing and maintaining scalable, high-performance cross-platform mobile applications with React Native, enhancing user experience and reliability across both iOS and Android platforms.",
    logo: "/assets/techcorp-logo.png"
  },
  
];

const WorkExperience: React.FC = () => {
  return (
    <section className="font-ubuntu max-w-6xl mx-auto py-20 px-6 bg-[#000] text-[#f8fcff]">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Where I've Worked
      </h2>
      <div className="space-y-10">
        {workExperiences.map(({ company, role, duration, description, logo }, index) => (
          <div key={index} className="flex items-center space-x-6 bg-[#111] rounded-[5px] p-6 shadow-lg">
            {/* {logo && (
              <img src={logo} alt={`${company} logo`} className="w-16 h-16 object-contain rounded-lg" />
            )} */}
            <div>
                <h5 className="text-[#ffe871] font-semibold text-5xl py-5">
                    {company}
                </h5>
              <h3 className="text-2xl font-semibold">{role}</h3>

              <p className="italic text-sm text-[#f8fcff]/70">{duration}</p>
              <p className="mt-2 text-[#f8fcff]/80 ">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
