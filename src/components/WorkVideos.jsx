import video1 from "../assets/videos/jewel.mp4";
import video2 from "../assets/videos/haldiram.mp4";
import video3 from "../assets/videos/eazydinner.mp4";
import video4 from "../assets/videos/mogasun.mp4";
import video5 from "../assets/videos/dilemughli.mp4";
import video6 from "../assets/videos/DY Patil.mp4";

const WorkVideos = () => {
  return (
    <section className="work-videos">
      <video src={video1} autoPlay muted loop />
      <video src={video2} autoPlay muted loop />
      <video src={video3} autoPlay muted loop />
      <video src={video4} autoPlay muted loop />
      <video src={video5} autoPlay muted loop />
      <video src={video6} autoPlay muted loop />
    </section>
  );
};

export default WorkVideos;
