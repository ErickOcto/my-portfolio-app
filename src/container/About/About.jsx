import { motion } from "framer-motion";
import { images } from "../../constants";

const About = () => {
  return (
    <section
      id="aboutMe"
      className="dark:bg-black py-24 min-h-screen flex align-middle "
    >
      <div className="flex flex-col-reverse md:flex-row max-w-5xl mx-auto my-auto items-center justify-between p-8 dark:bg-black">
        {/* Kolom Kiri */}
        <motion.div
          className="md:w-1/2 space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            👋 Hi there, I'm Frederick Octo Ramadani.
          </h2>
          <p className="text-lg text-gray-600 dark:text-white">
            "I am an Informatics student at Telkom University, class of 2024.
            Since vocational high school, my interest in technology has grown,
            particularly in fullstack web development and UI/UX design. I
            combine programming logic with creative design to create functional
            and engaging solutions."
          </p>
        </motion.div>

        {/* Kolom Kanan */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={images.profile} alt="Foto Saya" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;