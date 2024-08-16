import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { images } from "../../constants";

const Projects = () => {
  return (
    <div className="dark:bg-black">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section id="projects" ref={targetRef} className="relative h-[300vh] dark:bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <a 
      href={card.link}
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden dark:bg-black"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl font-black uppercase text-black backdrop-blur-lg rounded-lg">
          {card.title}
        </p>
      </div>
    </a>
  );
};

export default Projects;

const cards = [
  {
    url: "https://class.buildwithangga.com/storage/assets/thumbnails/di6s8946-Bootcamp%20Full-Stack%20Web%20Developer%20Sewa%20Mobil%20BuildWithAngga.png",
    title: "VROM",
    link: "https://github.com/ErickOcto/Laravel-rent_car",
    id: 1,
  },
  {
    url: "https://class.buildwithangga.com/storage/assets/thumbnails/r9w81gad-BWAAPP1%20-%201.jpg",
    title: "Mony",
    link: "https://www.figma.com/design/MCX6NTF7bRsh3qUfg9nTqZ/Mony?node-id=0-1&t=8tkwL0GYtyNdD8wj-1",
    id: 2,
  },
  {
    url: "https://class.buildwithangga.com/storage/assets/thumbnails/jav94tsp-full-stack-laravel-react-js-bikin-website-streaming-netflix.webp",
    title: "Moonton",
    link: "https://github.com/ErickOcto/ReactJS-moonton",
    id: 3,
  },
  {
    url: images.rentHouse,
    title: "Nidejia",
    link: "https://github.com/ErickOcto/Nidejia-Backend",
    id: 4,
  },
  {
    url: "https://class.buildwithangga.com/storage/assets/thumbnails/dbg43hms-Thumbnail%20kelas%20bootcamp%20mentor%20Alif.png",
    title: "Cineplus",
    link: "https://www.figma.com/design/4VJO5YD27qWXoPDjw8RXMf/Cineplus?node-id=1-3985&t=8tkwL0GYtyNdD8wj-1",
    id: 5,
  },
  {
    url: "https://class.buildwithangga.com/storage/assets/thumbnails/thumbnail%20kelas%20website%20marketplace%20development%20buildwith%20angga.png",
    title: "Store",
    link: "https://github.com/ErickOcto/BWA-Ecommerce",
    id: 6,
  },
  {
    url: images.dampi,
    title: "Dampi",
    link: "https://github.com/ErickOcto/krenova",
    id: 7,
  },
  {
    url: images.smrent,
    title: "SMRENT",
    link: "https://smrentcarbpp.com/",
    id: 8,
  },
  {
    url: images.dsis,
    title: "DSIS WEB",
    link: "https://github.com/ErickOcto/Laravel-dsis_website",
    id: 9,
  },
  {
    url: images.dsisMobile,
    title: "DSIS MOBILE",
    link: "https://github.com/ErickOcto/ReactNative-dsis_mobile",
    id: 10,
  },
  {
    url: images.cretech,
    title: "CRETECH",
    link: "pplg.vercel.app",
    id: 11,
  },
  {
    url: images.sinarJaya,
    title: "SINAR JAYA",
    link: "sinarjaya.vercel.app",
    id: 12,
  },
  {
    url: images.theClass,
    title: "THE CLASS",
    link: "https://the-class.vercel.app/",
    id: 13,
  },
  {
    url: images.laracamp,
    title: "LARACAMP",
    link: "https://github.com/ErickOcto/Laravel-laracamp",
    id: 14,
  },
];