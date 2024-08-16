export default function Experience() {
  return (
    <section
      id="experiences"
      className="dark:bg-black dark:text-white min-h-screen flex justify-center items-center"
    >
      <div className="wrapper">
        <div className="max-w-5xl mx-auto mb-4">
          <h1 className="whitespace-nowrap text-4xl text-center font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl">
            Experiences
          </h1>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={
                exp.isActive
                  ? `bg-black dark:bg-white p-6 shadow-lg h-fit rounded-xl`
                  : `border-white border p-6 shadow-lg h-fit rounded-xl`
              }
            >
              <div className="flex flex-row items-start">
                <div
                  className="min-w-24 min-h-24 bg-cover bg-center rounded-full m-2"
                  style={{ backgroundImage: `url(${exp.image})` }}
                />
                <div className="copywriting-wrap">
                  <h3
                    className={
                      exp.isActive
                        ? "text-xl font-semibold dark:text-black text-white uppercase"
                        : "text-xl font-semibold dark:text-white uppercase"
                    }
                  >
                    {exp.title}
                  </h3>
                  <p
                    className={
                      exp.isActive
                        ? "text-sm dark:text-gray-400 text-neutral-200 mb-2"
                        : "text-sm dark:text-gray-400 text-gray-600 mb-2"
                    }
                  >
                    {exp.duration}
                  </p>
                  <p
                    className={
                      exp.isActive
                        ? "dark:text-gray-400 text-neutral-200"
                        : "dark:text-gray-400 text-gray-700"
                    }
                  >
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const experiences = [
  {
    title: "Undergraduate Informatics IUP Student at Telkom University",
    duration: "2024 - 2028",
    description:
      "My interest in technology led me to Universitas Telkom, where I pursued a Bachelor’s degree in Informatics.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwU514Xp0KiIskUlE-m5Bg6tjPXX5tRkZfgw&s",
    isActive: true,
  },
  {
    title: "Software Engineering Student at SMK Negeri 6 Balikpapan",
    duration: "2021 - 2024",
    description:
      "As a Software Engineering student in Vocational High School (SMK), I studied the fundamentals of web programming, API concepts, MVC architecture, UI/UX design, DBMS, algorithms, basic Python, and mobile programming (for portable devices).",
    image:
      "https://smkn6-bpn.sch.id/wp-content/uploads/2023/11/cropped-logo-smkn-6.png",
    isActive: false,
  },
  {
    title: "Jr. Fullstack Web Developer at Saffix.id",
    duration: "Jan 2024 - Present",
    description:
      "At Saffix.id, I applied Agile development methodologies using ClickUp software and engaged in full-stack web development. I used Laravel 6 framework for backend development, Vue.js 2 for SPA frontend, and managed databases with MySQL phpMyAdmin. Additionally, I integrated jQuery AJAX into projects to enhance functionality.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgN3VnwYmXXfCnDQn8m9qwcTMf5ZDO_Q4gLg&s",
    isActive: false,
  },
  {
    title: "Jr. Fullstack Developer at Inotive Technology",
    duration: "Jul 2023 - Des 2023",
    description:
      "At Inotive, I implemented Agile development methodologies using JIRA software and engaged in full-stack web development. I utilized the Laravel 10 framework for backend development and employed Laravel Blade along with jQuery AJAX for the frontend. My role involved designing user interfaces and experiences, slicing them into responsive websites using the Bootstrap CSS framework. Additionally, I studied and applied clean code practices and developed several complex features.",
    image:
      "https://media.licdn.com/dms/image/C560BAQGNBxWtz8bp3w/company-logo_200_200/0/1630660289082/inotive_technology_logo?e=2147483647&v=beta&t=u6y0QJZ0k6zdibqWc4VhCcl88shRTQGQBt7196swFwc",
    isActive: false,
  },
  {
    title:
      "Silver Medal, Web Technologies Students' Competence Competition 2023",
    duration: "Jul 2023",
    description: "Solve Problem Based on the Questions",
    image: "https://upload.wikimedia.org/wikipedia/id/b/bf/Logo_LKS.png",
    isActive: false,
  },
  {
    title:
      "Bronze Medal, Web Technologies Students' Competence Competition 2023",
    description: "Solve Problem Based on the Questions",
    duration: "Sep 2023",
    image: "https://upload.wikimedia.org/wikipedia/id/b/bf/Logo_LKS.png",
    isActive: false,
  },
];