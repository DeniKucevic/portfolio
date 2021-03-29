import gitHubIco from "../../assets/icons/github.png";
import liveIco from "../../assets/icons/world-wide-web.png";

const Project: any = ({ image, desc, stack, github, live }: any): any => {
  return (
    <div className='example-wrapper'>
      <div className='example'>
        <img className='project-itemImage' src={image} alt='project' />
        <div className='fadedbox'>
          <div className='title text'>{stack}</div>
          <br />
          <br />
          <div className='title text'>
            <span style={{ color: "#000" }}>
              <strong>{desc}</strong>
            </span>
          </div>
          <br />
          <a href={github} target='_blank' rel='noreferrer noopener'>
            <img src={gitHubIco} alt='GitHub' className='github-icon title' />
          </a>
          <a href={live} target='_blank' rel='noreferrer noopener'>
            <img src={liveIco} alt='WWW' className='github-icon title' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
