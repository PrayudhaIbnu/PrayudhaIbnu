import displayInformasi from "../assets/image/project/display-informasi.png";
import expenseTracker from "../assets/image/project/expense-tracker.png";
import onemart from "../assets/image/project/onemart.png";
import yukNgaji from "../assets/image/project/yukngaji.png";
import learningApp from "../assets/image/project/learning-app.png";
import comproV1 from "../assets/image/project/compro-v1.png";
import comproV2 from "../assets/image/project/compro-v2.png";

export const projects = [
  {
    title: "Company Profile v2",
    description:
      "A company profile website for your company, made with VueJs and TailwindCSS.",
    image: comproV2,
    tech: ["VueJs", "TailwindCSS"],
    demo: "https://ipcompro-v2.netlify.app/",
    github: "",
  },
  {
    title: "Company Profile v1",
    description:
      "A company profile website for your company, made with VueJs and TailwindCSS.",
    image: comproV1,
    tech: ["VueJs", "TailwindCSS"],
    demo: "https://ipcompro-v1.netlify.app/",
    github: "",
  },
  {
    title: "Learning Platform",
    description:
      "This website was created to facilitate teachers in delivering learning materials to students, making it easier to introduce technology and digitalization.",
    image: learningApp,
    tech: ["Laravel", "VueJS", "E chart", "Tailwind - Flowbite"],
    demo: "https://ldko-sman3babelan.netlify.app/",
    github: null,
  },
  {
    title: "Expense Tracker",
    description:
      "An application to monitor daily and monthly expenses with informative visualizations.",
    image: expenseTracker,
    tech: ["Laravel", "VueJS", "E chart", "Tailwind - Flowbite"],
    demo: null,
    github: null,
  },
  {
    title: "Display Informasi (DISFO)",
    description:
      "A dynamic information application for village offices, displaying images, videos, and village activities.",
    image: displayInformasi,
    tech: ["Laravel", "Bootstrap"],
    demo: null,
    github: null,
  },
  {
    title: "OneMart Cashier App",
    description:
      "A web-based cashier application to facilitate transactions and product data management, developed with Laravel.",
    image: onemart,
    tech: ["Laravel", "Bootstrap", "API from e-quran"],
    demo: null,
    github: null,
  },
  {
    title: "YukNgaji",
    description:
      "A web application to facilitate Al-Qur'an learning, including E-Quran, ChatBot, and Prayer Schedules.",
    image: yukNgaji,
    tech: ["Laravel", "Bootstrap", "API from e-quran"],
    demo: null,
    github: null,
  },
];
