import { motion } from "framer-motion";

export default function Contact(){
  return (
    <section
      id="contact"
      className="grid place-content-center gap-2 dark:bg-black bg-white px-8 py-24 text-black dark:text-white h-screen"
    >
      <FlipLink href="https://github.com/ErickOcto">Github</FlipLink>
      <FlipLink href="https://www.linkedin.com/in/frederick-octo-ramadani">
        Linkedin
      </FlipLink>
      <FlipLink href="https://www.facebook.com/profile.php?id=100081950421169">
        Facebook
      </FlipLink>
      <FlipLink href="https://www.instagram.com/erick_octo/">
        Instagram
      </FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
