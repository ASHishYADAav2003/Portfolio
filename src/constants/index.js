import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent, 
  jobit,
  tripguide,
  threejs,
} from "../assets";
import rift from "../assets/company/rift.png";
import eagle from "../assets/company/eagle.jpg";
import garuda from "../assets/company/garuda.jpg";
import python from "../assets/tech/python.jpg";
import numpy from "../assets/tech/numpy.jpg";
import pandas from "../assets/tech/pandas.jpg";
import matplotlib from "../assets/tech/matplotlib.jpg";
import seaborn from "../assets/tech/seaborn.jpg";
import tensorflow from "../assets/tech/tensorflow.jpg";
import pycharm from "../assets/tech/pycharm.jpg";
import anaconda from "../assets/tech/anaconda.jpg";
import crime from "../assets/crime.png";
import genevariant from "../assets/genevariant.png";
import cpi from "../assets/cpi.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: web,
  },
  {
    title: "Machine Learning ",
    icon: mobile,
  },
  {
    title: "Deep Learning",
    icon: backend,
  },
  {
    title: "Data Visualization",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Numpy",
    icon: numpy,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Matplotlib",
    icon: matplotlib,
  },
  {
    name: "Seaborn",
    icon: seaborn,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "Pycharm",
    icon: pycharm,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "anaconda",
    icon: anaconda,
  },
];

const experiences = [
  {
    title: "RIFT_Hackathon",
    company_name: "Physics_Wallah",
    icon: rift,
    iconBg: "#383E56",
    date: "February 2026",
    points: [
      "Developed a Machine Learning-based solution to analyze the impact of six different drugs on specific genes for personalized patient treatment.",
      "Built an intelligent system that processes patient data and predicts gene-drug interactions to assist in medical decision-making.",
      "Designed an intuitive and user-friendly UI to simplify complex biological insights for practical clinical use.",
      "Implemented structured JSON output generation to provide doctors with clear, data-driven patient reports.",
      "Integrated data processing and predictive modeling to enhance accuracy in treatment recommendations.",
      "Collaborated on creating a healthcare-focused solution aimed at improving precision medicine through AI."
    ],
  },
  {
    title: "Hostel Management System",
    company_name: "Garudaa",
    icon: eagle,
    iconBg: "#E6DEDD",
    date: " February 2026",
    points: [
      "Developed a Hostel Management System to streamline student accommodation and administrative operations.",
      "Implemented features for room allocation, student records management, and fee tracking.",
      "Designed an intuitive interface to simplify hostel administration and improve user experience.",
      "Automated data handling to reduce manual work and enhance operational efficiency.",
      "Ensured organized storage and retrieval of student and hostel-related information.",
      "Built a structured system to improve communication between management and residents."
    ],
  },
  {
    title: "Crime Analysis System",
    company_name: "Minor Project",
    icon: garuda,
    iconBg: "#383E56",
    date: "December 2025",
    points: [
      "Developed a Crime Analysis System to identify patterns and trends in crime data using data analytics techniques.",
      "Utilized Python libraries such as Pandas, NumPy, Matplotlib, and Seaborn for data processing and visualization.",
      "Implemented Machine Learning models to predict potential crime hotspots and support preventive decision-making.",
      "Designed interactive visualizations to present crime trends in an easy-to-understand format.",
      "Enabled data-driven insights to assist authorities in strategic planning and resource allocation.",
      "Built a structured system to analyze historical crime data and uncover meaningful patterns."
    ],
  },
  {
    title: "Consumer Price Index",
    company_name: "Garudaa",
    icon: eagle,
    iconBg: "#E6DEDD",
    date: "January 2025",
    points: [
      "Developed a Consumer Price Index (CPI) Analysis system to study inflation trends and price fluctuations over time.",
      "Utilized Python libraries such as Pandas, NumPy, Matplotlib, and Seaborn for data cleaning, analysis, and visualization.",
       "Analyzed economic data to identify patterns in price changes across different sectors.",
       "Created visual dashboards to represent inflation trends in an easily understandable format.",
       "Enabled data-driven insights to support economic interpretation and decision-making.",
       "Applied statistical and analytical techniques to understand the impact of price variations on consumers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to train a machine learning model as accurate, but Ashish  proved me wrong.",
    name: "Shashwat Modi",
    designation: "Student",
    company: "Galgotia college of engineering and technology",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a person who trains machine learning models who truly cares about their clients' success like Ashish does.",
    name: "Tanishq Singh",
    designation: "Student",
    company: "Galgotia college of engineering and technology",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ashish optimized our Models, our predictions become more accurate. We can't thank them enough!",
    name: "Prerit Agarwal",
    designation: "Student",
    company: "Galgotia college of engineering and technology",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    
  },
];

const projects = [
  {
    name: "crime analysis system",
    description:
      "Web-based platform that allows users to analyze crime data and identify patterns using machine learning techniques.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Data Visualization",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: crime,
    source_code_link: "https://github.com/ASHishYADAav2003/Crime_Analysis_Model",
  },
  {
    name: "Consumer Price Index Analysis",
    description:
      "Web application that enables users to analyze Consumer Price Index (CPI) data and visualize inflation trends over time.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Data Visualization",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: cpi,
    source_code_link: "https://github.com/ASHishYADAav2003/Consumer_price_index",
  },
  {
    name: "Drug-Gene Interaction Prediction",
    description:
      "A machine learning model that predicts potential interactions between drugs and genes, helping in personalized medicine and drug discovery.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "vite+React",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: genevariant,
    source_code_link: "https://github.com/ASHishYADAav2003/GeneVariant",
  },
];

export { services, technologies, experiences, testimonials, projects };
