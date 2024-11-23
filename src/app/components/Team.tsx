import React from "react";
import Image from "next/image";
import sign from "../images2/shop4-sign.png";
import t1 from "../images2/t1.jpg";
import t2 from "../images2/t2.jpg";
import t3 from "../images2/t3.jpg";
import t4 from "../images2/t4.jpg";

function Team() {
  const teamMembers = [
    {
      name: "Alper Kamu",
      role: "CEO & Co-Founder",
      imageUrl: t1,
    },
    {
      name: "Holden Caulfield",
      role: "Creative Director",
      imageUrl: t2,
    },
    {
      name: "Atticus Finch",
      role: "Chief Operating Officer",
      imageUrl: t3,
    },
    {
      name: "Henry Letham",
      role: "Head of Marketing",
      imageUrl: t4,
    },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-bold title-font mb-4 text-gray-900 text-center mb-16">
            Our Founders
          </h1>
          <div className="flex flex-col lg:flex-row items-center  justify-center -m-4">
            {teamMembers.map((member, index) => (
              <div className="p-4 lg:w-1/4 md:w-1/2" key={index}>
                <div className="h-full flex flex-col items-center text-center">
                  <Image
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={member.imageUrl}
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      {member.name}
                    </h2>
                    <h3 className="text-gray-500 mb-3">{member.role}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center w-full p-12 text-center">
            <p className="max-w-2xl lg:text-3xl text-2xl">
              “Our journey began with a shared vision and a passion for fashion.
              Founded by a team of dedicated individuals, our company is fueled
              by the creativity and determination of our founders.“
            </p>
            <Image src={sign} alt="" className="mt-6" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
