import { Fragment, useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import ContactForm from "../components/ContactForm";
import WorkPage from "./WorkPage";

const MainPage = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ff288b",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.8,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  useEffect(() => {
    const cursorTimeout = setTimeout(() => {
      setShowCursor(true);
    }, 2000);

    return () => {
      clearTimeout(cursorTimeout);
    };
  });

  return (
    <Fragment>
      {init && <Particles id="tsparticles" options={options} />}

      <HomePage />
      <AboutPage />
      <ServicesPage />
      <WorkPage />
      <ContactForm />
    </Fragment>
  );
};

export default MainPage;
