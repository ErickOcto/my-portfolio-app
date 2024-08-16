import { images } from "../../constants";

export default function Skill() {
  return (
    <section
      id="skills"
      className="dark:bg-black dark:text-white min-h-screen flex justify-center items-center"
    >
      <div className="wrapper">
        <div className="max-w-5xl mx-auto mb-4">
          <h1 className="whitespace-nowrap text-4xl text-center font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl mb-16">
            Skills
          </h1>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              imgUrl={skill.image}
              title={skill.title}
              desc={skill.desc}
              tags={skill.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const SkillCard = ({ imgUrl, title, desc, tags }) => {
  return (
    <div className="flex flex-row items-center  shadow-sm w-full rounded-xl">
      <div
        className="min-w-24 min-h-24 bg-cover bg-center m-2"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div>
        <h2 className="text-2xl text-black dark:text-white">{title}</h2>
        <p className="text-base text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

const skills = [
  {
    image: images.laravel,
    title: "Laravel",
    desc: "Laravel PHP Framework",
  },
  {
    image:
      "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
    title: "ReactJS",
    desc: "JavaScript Library",
  },
  {
    image: images.figma,
    title: "Figma",
    desc: "UI/UX Design Tool",
  },
  {
    image:
      "https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png",
    title: "Postman",
    desc: "API Platform",
  },
  {
    image:
      "https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-9294852-7577995.png?f=webp",
    title: "Tailwind CSS",
    desc: "Utility-first CSS Framework",
  },
  {
    image:
      "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
    title: "Bootstrap",
    desc: "Component-based Framework",
  },
  {
    image: "https://pngimg.com/d/mysql_PNG23.png",
    title: "MySQL",
    desc: "Relational DBMS",
  },
];