import { Link } from "react-router-dom";

import "../styles/SideNav.css";

const SideNav = ({ listItems }) => {
  const list = listItems.map((list, index) => {
    return (
      <Link key={index} to="/">
        <li>{list.name}</li>
      </Link>
    );
  });

  return (
    <aside className="sidenav">
      <ul className="sidenav-list">{list}</ul>
    </aside>
  );
};

export default SideNav;
