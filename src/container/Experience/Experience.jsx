export default function Experience() {
  return (
    <section
      id="experiences"
      className="dark:bg-black dark:text-white h-screen flex justify-center items-center"
    >
      <div className="wrapper">
        <div className="max-w-5xl mx-auto mb-4">
          <h1 className="whitespace-nowrap text-4xl text-center font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl">
            Experiences
          </h1>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{exp.duration}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const experiences = [
  {
    title: "Jr. Fullstack Web Developer at Saffix.id",
    duration: "Jan 2024 - Present",
    description:
      "Developing and maintaining user interfaces using React and Tailwind CSS. Collaborating with designers to create responsive and user-friendly web applications.",
  },
  {
    title: "Jr. Fullstack Developer at Inotive Technology",
    duration: "Jul 2023 - Des 2023",
    description:
      "Worked on building and optimizing APIs using Node.js and Express. Implemented database solutions and ensured application security and performance.",
  },
];