import { prototype } from "postcss/lib/declaration";
import project1 from "../assets/projects/Project1.jpeg";
import project2 from "../assets/projects/Project2.jpeg";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.jpg"; 

export const HERO_CONTENT = "Hello! I'm a passionate software developer eager to kickstart my career in the tech industry. My journey began with a keen interest in solving complex problems through code, and I have honed my skills in various programming languages and technologies. I'm excited to apply my knowledge and continue learning as I embark on this exciting career path.  My goal is to contribute to innovative projects and collaborate with talented teams to build solutions that make a difference. I am eager to explore new technologies and expand my expertise to meet the ever-evolving demands of the tech industry."


export const ABOUT_TEXT = "Welcome to my portfolio! I am a budding software developer with a strong foundation in various programming languages and technologies. My passion lies in creating efficient, scalable, and user-friendly applications. I am constantly exploring new technologies to enhance my skills and stay updated with industry trends.I have a solid grasp of Java programming, focusing on building robust and maintainable applications. My experience with Java includes developing object-oriented solutions that emphasize code readability and reusability. I am skilled in designing relational databases and crafting efficient SQL queries to manage and manipulate data.: I have experience building dynamic and interactive user interfaces using React.js.I am eager to apply my skills in a professional setting, working alongside experienced developers to create innovative solutions. My goal is to contribute to projects that make a positive impact, continuously learn from industry experts, and grow as a software developer."

export const EDUCATION = [
  {
    degree: "Bachelor's of Engineering",
    year: "2020-2024",
    institute: "D.Y.Patil College Of Engineering, Akurdi Pune",
    Grade: "8.20 Cgpa",



  },
  {
    degree: "HSC",
    year: "2019-2020",
    institute: "S.E.S College of Arts, Science and Commerce",
    Grade: "62%",


  },
  {
    degree: "SSC",
    year: "2017-2018",
    institute: "Carmel Convent High School",
    Grade: "85%",
    
  },
] 

export const PROJECTS = [
  {
    title: "Online Shopping Cart",
    image: project1,
    description: ' Developed an individual project Online Shopping Billing System. It is a comprehensive application designed to simplify and automate the billing process for online retail transactions. This system enhances efficiency by streamlining data management and billing calculations.',
    technologies: ["Java", "MySQL", "OOP"],
  },
  {
    title: " Real - Time Emotion-Detection System",
    image: project2,
    description: "Designed and developed a final year project, this real-time emotion detection system aims to analyze and interpret emotional states to assist in mental stress assessment. The system leverages advanced machine learning techniques and computer vision to provide accurate and timely emotional analysis.",
    technologies: ["Python", "Machine Learning", "OpenCv"],
  },
  {
    title: "Portfolio-Website",
    image: project3,
    description: "A personal portfolio website showcasing of my professional skills, projects, and personal achievements. It is designed to provide an engaging and informative overview of my background and expertise in software development.",
    technologies: ["Reactjs", "TailwindCSS", "JavaScript"],
  },
  {
    title: "Dice-Challange Game",
    image:project4,
    description:"The Dice Challenge Game is a fun and interactive web-based game developed using HTML, CSS, and JavaScript. The game allows users to roll virtual dice and engage in various dice-related challenges, providing an enjoyable and engaging experience.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
  },
  
];



export const CONTACT = {
  address: "503 Siddhivinayak Orchid, Navi Mumbai, 410218 ",
  phoneNo: "+91 7208769345 ",
  email: "sallosharma24@gmail.com",
};
