import { motion } from "framer-motion";
import { images } from "../../constants";

const About = () => {
  return (
    <section id="aboutMe" className="dark:bg-black dark:text-white text-black bg-white">
      <div className="max-w-5xl flex fle"></div>
      <img src={images.profile} alt="" />
    </section>
  );
};

export default About;