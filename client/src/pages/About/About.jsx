import "./About.css";
import Dimg from "../../assets/director-pic.jpg";
function About() {
  return (
    <div className="about-bkg">
      <div className="about-container">
        <h1 id="directorMessage">About College</h1>
        <div id="line"></div>
        <div className="directorContainer">
          <div id="directorImage">
            <img src={Dimg} alt="" id="Dimg" />
            <p>Prof. Rahul Banerjee</p>
            <i>Director</i>
          </div>
          <div className="director-message">
            LNMIIT offers direct admission to boys within the top 10 ranks and
            girls within the top 20 ranks in the senior secondary exam of the
            12th class conducted by the Board of Secondary Education, Rajasthan.
            Only students who have studied physics, chemistry, math, and English
            in 12th class are considered for admission through this route
          </div>
        </div>
        <div id="vision">
          <h3 className="visionTitle">Vision,Mission and Objectives</h3>
          <div id="line"></div>
          <p className="para">
            To create a niche for itself in both Indian and global arenas by
            adopting a multi-disciplinary approach with a focus on
            contemporarily relevant as well as emerging areas of research,
            development, teaching-learning, entrepreneurship, outreach and
            collaboration while maintaining an eco-system that would ensure
            work-life balance of its people (faculty & staff) and enable
            well-rounded personality development of its students.
          </p>
        </div>
        <div id="mission">
          <h3 className="visionTitle">Mission</h3>
          <div id="line"></div>
          <p className="para">
            To offer state of the art undergraduate programs in IT & ITES as
            well as core disciplines with emphasis on strong fundamentals.
            <br></br> To establish centers of excellence in emerging areas to
            provide significant breakthrough required to solve real world
            problems. To make The LNMIIT as the most preferred institute for
            higher education across the country.<br></br> To create intellectual
            property through innovations, quality research publications and
            patents. To instill core values of excellence, integrity, teamwork,
            professional ethics and environmental concerns.<br></br> To foster
            and nurture leadership and entrepreneurial qualities and lifelong
            learning amongst students, research scholars, faculty and staff of
            The LNMIIT. The mission statement vividly encapsulates the action of
            the institution and spell out an overall goal by providing clear
            directions for decision making.<br></br> The governance of the
            college completely remains on the following objectives with a
            specific agenda in order to fulfill the mission and vision
            statements of the college.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
