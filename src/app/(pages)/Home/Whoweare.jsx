"use client";

import Container from "@/app/components/Container";

export default function Whoweare() {
  const services = [
    {
      title: "IT Strategy & Consulting",
      image: "/placeholder-consulting.png", // Replace with actual image path
      points: [
        {
          label: "IT Consulting",
          description:
            "Providing strategic guidance to align IT initiatives with business objectives.",
        },
        {
          label: "Staff Augmentation Service",
          description:
            "Expand your team's capabilities with skilled IT professionals, on-demand.",
        },
      ],
    },
    {
      title: "Technology Infrastructure & Solutions",
      image: "/placeholder-infrastructure.png",
      points: [
        {
          label: "Cloud Solutions",
          description:
            "Designing and implementing cloud strategies to enhance scalability and resilience.",
        },
        {
          label: "Cybersecurity",
          description:
            "Ensuring robust protection against evolving digital threats.",
        },
      ],
    },
    {
      title: "Application Development",
      image: "/placeholder-development.png",
      points: [
        {
          label: "Data Analytics",
          description:
            "Transforming data into actionable insights for informed decision-making.",
        },
        {
          label: "Enterprise Applications",
          description:
            "Building tailored software solutions to streamline operations.",
        },
        {
          label: "Web & Application Development",
          description:
            "Build innovative, user-friendly web and mobile applications tailored to your business needs.",
        },
      ],
    },
  ];

  return (
    <div className="h-screen flex justify-center relative bg-gray-200 text-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-12">
          WHO WE ARE
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 bg-white rounded-lg hover:shadow-xl transition-shadow duration-300 delay-100 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-gray-100 flex items-center justify-center mb-5">
                <span className="text-gray-400 text-sm">Image</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>

              <div className="text-gray-400 text-sm space-y-3">
                {service.points.map((point, idx) => (
                  <p key={idx}>
                    <strong className="text-gray-400">{point.label}:</strong>{" "}
                    {point.description}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
