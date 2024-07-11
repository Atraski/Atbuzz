import Gallery from "../components/Gallery";
import WorkVideos from "../components/WorkVideos";
import "../styles/WorkPage.css";

const WorkPage = () => {
  return (
    <div className="work-container container" id="work">
      <h1 className="page-heading">Our Work</h1>
      <Gallery />
      <WorkVideos />
    </div>
  );
};

export default WorkPage;
