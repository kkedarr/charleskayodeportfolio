import JavaScriptCert from "../assets/javascriptcertificate.png";
import GenerativeAI1 from "../assets/generativeaicert.png";
import GenerativeAI2 from "../assets/generativeaicert2.png";
import GenerativeAI3 from "../assets/generativeaicert3.png";
import AIForBeginners from "../assets/aiforbeginnershp.png";
import PythonCertificate from "../assets/pythoncert.jpg";

const certifications = [
  {
    name: "Programming with JavaScript",
    issuer: "Meta",
    year: "2023",
    image: JavaScriptCert,
    score: "Score: 97.86%",
    link: "https://coursera.org/verify/N84G6VHT5TBC",
  },
  {
    name: "Generative AI",
    issuer: "Microsoft",
    year: "2025",
    images: [
      GenerativeAI1,
      GenerativeAI2,
      GenerativeAI3,
    ],
    score: "Avg: 71%",
    link: null,
  },
  {
    name: "AI for Beginners",
    issuer: "HP",
    year: "2025",
    image: AIForBeginners,
    score: "Completed",
    link: null,
  },
  {
    name: "Python Bootcamp",
    issuer: "Nobel Work Foundation",
    year: "2022",
    image: PythonCertificate,
    score: "Completed",
    link: "https://www.udemy.com/certificate/UC-cace3dd5-07b8-4ee0-9573-e26c49a750d5/",
  },
];

export default certifications;
