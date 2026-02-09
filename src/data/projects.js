import displayInformasi from "../assets/image/project/display-informasi.png";
import expenseTracker from "../assets/image/project/expense-tracker.png";
import onemart from "../assets/image/project/onemart.png";
import yukNgaji from "../assets/image/project/yukngaji.png";
import learningApp from "../assets/image/project/learning-app.png";

export const projects = [
  {
    title: "Platform Pembelajaran Interaktif",
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
