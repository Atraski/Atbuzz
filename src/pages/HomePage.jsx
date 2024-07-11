import { Fragment, useEffect, useMemo, useState } from "react";
import { ReactTyped } from "react-typed";

import "../styles/HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const cursorTimeout = setTimeout(() => {
      setShowCursor(true);
    }, 2000);

    return () => {
      clearTimeout(cursorTimeout);
    };
  });

  const services = [
    "Digital Marketing",
    "Performance Marketing",
    "Influential Marketing",
    "SEO",
    "Production",
    "Email Marketing",
    "Public Relations",
  ];

  return (
    <Fragment>
      <section className="home-page" id="home">
        <div className="home-content container">
          <h1 className="page-heading">
            <span className="first-half">Are You</span>
            <span className="second-half">Looking For</span>
          </h1>
          {showCursor && (
            <p className="services">
              <Link to="https://google.com" style={{ color: "white" }}>
                <ReactTyped
                  strings={services}
                  typeSpeed={40}
                  backSpeed={50}
                  startDelay={1000}
                  loop
                />
              </Link>
            </p>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
