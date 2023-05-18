import "../scss/Experiences.scss";
import myavatar from "../assets/me_avatar.jpeg";

const Experiences = () => {
  return (
    <div className="experiences-wrapper">
      <div className="heading-box">
        <h1>Where I started</h1>
      </div>
      <div className="story-photo-container">
        <div className="story-box">
          <p>
            With a decade of experience as a Telecommunications Field
            Technician, I’ve had detailed insight into how people use the
            internet both recreationally and commercially. My team would manage
            customer relations and connections on their premises, as well as
            manage the back end of the network, spanning over 200km.
          </p>
          <br></br>
          <p>
            While doing this I learned about the power of the web, its ability
            to solve problems for businesses, and create effective experiences
            for users. I decided to pursue my interest in developing software,
            and have completed accredited studies in Full Stack Development,
            gaining hands-on experience building web applications both solo, and
            as part of different teams on multiple group projects. I'm destined
            to continue learning, growing, and applying my skills to amass
            innovation, solve problems, and deliver products that are enjoyed by
            users and businesses alike.
          </p>
          <br></br>
          <p>
            With my primary focus on consistent practice and a sense of awe for
            technology, I'm eager to take on bigger roles, and help contribute
            to projects that deliver quality experiences to its users.
          </p>
        </div>
        <img className="me-avatar" src={myavatar} alt="avatar"></img>
      </div>
    </div>
  );
};

export default Experiences;
