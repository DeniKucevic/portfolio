import GitHub from "../../assets/icons/github.png"
import Linkedin from "../../assets/icons/linkedin.png"
import Facebook from "../../assets/icons/facebook-circular-logo.png"

const Footer = () => {

  return (
    <div className="page-4">
      <span style={{ fontSize: "40px" }} className="span-text">That's it!
          </span>
      <span style={{ fontSize: "20px" }}> (for now 😊)</span>
      <span style={{ fontSize: "30px" }} className="span-text text-spacing">
        If you wish to <span style={{ color: "red" }}><u>contact me</u></span> you can do that here:
          </span>
      <br /><br />
      <span style={{ fontSize: "30px" }} className="span-text text-spacing">
        <a href="mailto:denikucevic@gmail.com" style={{ textDecoration: "none" }}>denikucevic@gmail.com</a>
      </span><br />
      <span style={{ fontSize: "30px" }} className="span-text">
        +381 66 6361964
          </span><br /><br /><br />
      <span style={{ fontSize: "30px" }} className="span-text text-spacing">
        OR
          </span><br /><br /><br />
      <span>
        <a href="https://github.com/DeniKucevic" target="_blank" rel="noreferrer noopener">
          <img src={GitHub} alt="GitHub" className="github-icon rotate" />
        </a>
        <a href="https://www.linkedin.com/in/denis-kucevic/" target="_blank" rel="noreferrer noopener">
          <img src={Linkedin} alt="Linkedin" className="github-icon rotate" />
        </a>
        <a href="https://www.facebook.com/denis.kucevic.9/" target="_blank" rel="noreferrer noopener">
          <img src={Facebook} alt="Facebook" className="github-icon rotate" />
        </a>
      </span>
    </div>
  );
};

export default Footer;
