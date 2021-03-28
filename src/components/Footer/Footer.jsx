import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  Sticky,
} from "react-scroll-motion";

const Footer = () => {

  return (
    <ScrollContainer>
      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "40px" }}>Done
          </span>
          <br />
          <span style={{ fontSize: "30px" }}>
            Contact information
          </span>
          <br />
          <span style={{ fontSize: "30px" }}>
            denikucevic@gmail.com
          </span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Footer;
