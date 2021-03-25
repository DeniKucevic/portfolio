import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveOut,
  Sticky,
} from "react-scroll-motion";

const ScrollMotion = () => {

  return (
    <ScrollContainer>
      <ScrollPage page={1}>
        <Animator animation={batch(Fade(-1), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "30px" }}>
            <span>Hi! 👋</span><br></br><br></br> My name is Denis and I am Junior Fullstack Developer based in Pancevo, Serbia. As someone who enjoys finding solutions to difficult problems, software development was an obvious path.<br></br><br></br><strong> Keep scrolling to learn more about me!</strong>
          </span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default ScrollMotion;
