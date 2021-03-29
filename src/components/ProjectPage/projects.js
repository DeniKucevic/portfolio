import algoritam from "../../assets/projectsImages/algoritam.jpg";
import debounce from "../../assets/projectsImages/debounce.jpg";
import jednaki from "../../assets/projectsImages/jednaki.jpg";
import authBackend from "../../assets/projectsImages/authBackend.JPG";
import hungryHerceg from "../../assets/projectsImages/hungryHerceg.JPG";
import tictactoe from "../../assets/projectsImages/tictactoe.JPG";
import portfolio from "../../assets/projectsImages/portfolio.JPG";
import tetris from "../../assets/projectsImages/tetris.JPG";

const projects = [
  {
    image: portfolio,
    desc: "Portfolio website",
    stack: "React, TypeScript",
    id: 1,
    github: "https://github.com/DeniKucevic/portfolio",
    live: "https://denikucevic.netlify.app/",
  },
  {
    image: jednaki,
    desc: "Vue.js website for equals project",
    stack: "Vue.js, Vuex, Bootstrap",
    id: 2,
    github: "https://github.com/DeniKucevic/equals",
    live: "https://www.jednaki.com/",
  },
  {
    image: hungryHerceg,
    desc: "Team project for SVEA Ekonomi",
    stack: "React, Express.js, MongoDB",
    id: 3,
    github: "https://github.com/DeniKucevic/Hungry-Herceg-server",
    live: "https://hungry-herceg.netlify.app/login",
  },
  {
    image: debounce,
    desc: "Input with debounce",
    stack: "React",
    id: 4,
    github: "https://github.com/DeniKucevic/UpConfig-task",
    live: "https://upconfig-task.netlify.app/",
  },
  {
    image: algoritam,
    desc: "Presentstion of Dijsktra pathfinding algorithm",
    stack: "React",
    id: 5,
    github: "https://github.com/DeniKucevic/Algorithms-Game",
    live: "https://silly-brattain-a27b2b.netlify.app/",
  },
  {
    image: authBackend,
    desc: "Backend project for auth and authorizing users",
    stack: "Express.js",
    id: 6,
    github: "https://github.com/DeniKucevic/Auth-backend",
    live: "",
  },
  {
    image: tetris,
    desc: "Tetris landing page",
    stack: "React, TypeScript",
    id: 7,
    github: "https://github.com/DeniKucevic/Tetris",
    live: "...",
  },
  {
    image: tictactoe,
    desc: "Simple tic tac toe game with sockets",
    stack: "React, socket.io",
    id: 8,
    github: "https://github.com/DeniKucevic/Brainshuttle-task",
    live: "Server is 💀",
  },
];

export default projects;
