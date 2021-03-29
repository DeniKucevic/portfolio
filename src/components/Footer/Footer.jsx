import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  Sticky,
} from "react-scroll-motion";
import GitHub from "../../assets/icons/github.png"
import Linkedin from "../../assets/icons/linkedin.png"
import Facebook from "../../assets/icons/facebook-circular-logo.png"

const Footer = () => {

  return (
    <div className="page-4">
      <span style={{ fontSize: "40px" }} className="span-text">That's it! <br /> (for now 😊)
          </span>
      <br />
      <br />
      <span style={{ fontSize: "30px" }} className="span-text">
        If you wish to contact me you can do that here:
          </span>
      <br /><br />
      <span style={{ fontSize: "30px" }} className="span-text">
        <a href="mailto:denikucevic@gmail.com">denikucevic@gmail.com</a>
      </span><br />
      <span style={{ fontSize: "30px" }} className="span-text">
        +381 66 6361964
          </span><br /><br /><br />
      <span style={{ fontSize: "30px" }} className="span-text">
        OR
          </span><br /><br /><br />
      <span>
        <a href="https://github.com/DeniKucevic" target="_blank" rel="noreferrer noopener">
          <img src={GitHub} alt="GitHub" className="github-icon" />
        </a>
        <a href="https://www.linkedin.com/in/denis-kucevic/" target="_blank" rel="noreferrer noopener">
          <img src={Linkedin} alt="Linkedin" className="github-icon" />
        </a>
        <a href="https://www.facebook.com/denis.kucevic.9/" target="_blank" rel="noreferrer noopener">
          <img src={Facebook} alt="Facebook" className="github-icon" />
        </a>
      </span>
    </div>
  );
};

export default Footer;
