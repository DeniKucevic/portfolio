const options = {
  background: {
    color: {
      value: "#000",
    },
    opacity: 0.6,
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 2,
      },
    },
  },
  particles: {
    color: {
      value: "#d1d1d1",
    },
    links: {
      color: "#d1d1d1",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: false,
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
};

export default options;
