import { Link } from "react-router-dom";

import SideNav from "../components/SideNav";
import "../styles/ServicesPage.css";

const ServicesPage = () => {
  const listItems = [
    { name: "Digital Marketing" },
    { name: "Public Relations" },
    { name: "Influential Marketing" },
    { name: "Intellectual Marketing" },
    { name: "Events & Exhibition" },
  ];

  return (
    <section className="service-page container" id="services">
      <h1 className="page-heading">Services</h1>

      <div className="services">
        <div className="services-container">
          <div>
            <Link>Digital Marketing</Link>
            <Link>Public Relations</Link>
            <Link>Influential Marketing</Link>
          </div>
          <div>
            <Link>Intellectual Property</Link>
            <Link>Events & Exhibition</Link>
          </div>
        </div>
        <SideNav listItems={listItems} />
      </div>
    </section>
  );
};

export default ServicesPage;
