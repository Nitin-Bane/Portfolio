import {
  LuActivity,
  LuCircuitBoard,
  LuCode,
  LuCpu,
  LuFlame,
  LuMicrochip,
  LuRadar,
  LuSprout,
  LuWind,
  LuZap,
} from "react-icons/lu";
import { SiHtml5, SiJavascript, SiMysql } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

export const profile = {
  name: "Nitin Bane",
  fullName: "Nitin Ashok Bane",
  role: "Electronics & Telecommunication Engineer",
  bio: "Final-year B.E. Electronics & Telecommunication student with a Diploma in ENTC and hands-on experience building sensor-based embedded systems — from fire detection and suppression to portable soil analysis. I also build for the web with HTML, CSS, JavaScript, and MySQL.",
  location: "Pune, India",
  email: "banenitin02@gmail.com",
  phone: "+91 9579390586",
  linkedin: "https://www.linkedin.com/in/nitin-bane-4123b5321",
  resume: "/Nitin_Bane_Resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const focusAreas = [
  {
    Icon: LuCpu,
    title: "Embedded systems",
    body: "Microcontrollers and sensor interfacing that turn raw readings into decisions — alarms, alerts, and automatic responses.",
  },
  {
    Icon: LuCircuitBoard,
    title: "Circuit design & testing",
    body: "From component selection and assembly to calibration and repeated trials until the readings are reliable.",
  },
  {
    Icon: LuCode,
    title: "Web development",
    body: "HTML, CSS, JavaScript, and MySQL for building clean interfaces and the data behind them.",
  },
];

export const stats = [
  { value: "4", label: "Hardware builds" },
  { value: "1", label: "Industry internship" },
  { value: "3", label: "Languages spoken" },
  { value: "2027", label: "B.E. graduation" },
];

export const skillGroups = [
  {
    category: "Electronics & Embedded",
    Icon: LuMicrochip,
    items: [
      { name: "Embedded Systems", Icon: LuCpu },
      { name: "Microcontrollers", Icon: LuMicrochip },
      { name: "Sensor Interfacing", Icon: LuActivity },
      { name: "Circuit Design & Testing", Icon: LuCircuitBoard },
    ],
  },
  {
    category: "Web & Database",
    Icon: LuCode,
    items: [
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    ],
  },
];

export const practices = [
  "Requirement Analysis",
  "Component Selection",
  "Prototyping",
  "Sensor Calibration",
  "Testing & Validation",
  "Documentation",
];

export const languages = ["English", "Hindi", "Marathi"];

export const experience = [
  {
    company: "E Spark Tech",
    role: "Embedded Systems Intern",
    period: "Dec 2025 — Jan 2026",
    points: [
      "Developed an alcohol detector that senses alcohol in a person's breath using a gas sensor and triggers an alert when the level crosses a safe threshold.",
      "Assembled the circuit, calibrated the sensor, and tested the prototype to get reliable readings across repeated trials.",
      "Worked through the full build cycle — from requirement analysis and component selection to prototyping and documentation.",
    ],
    tags: ["Gas Sensor", "Calibration", "Prototyping", "Documentation"],
  },
];

export const projects = [
  {
    title: "Portable Soil Analyzer",
    stage: "B.E. Final Year",
    inProgress: true,
    Icon: LuSprout,
    description:
      "A handheld device that measures key soil parameters such as moisture, pH, and temperature on the spot.",
    impact: "Helps farmers plan irrigation and fertilizer use without lab testing.",
    tech: ["Moisture Sensor", "pH Sensor", "Temperature Sensor", "Handheld"],
  },
  {
    title: "Fire Alert & Extinguisher System",
    stage: "B.E. Third Year",
    Icon: LuFlame,
    description:
      "Detects fire using flame and smoke sensors, raises an immediate alarm, and automatically activates an extinguishing mechanism.",
    impact: "Contains a fire early — before anyone has to step in.",
    tech: ["Flame Sensor", "Smoke Sensor", "Alarm", "Auto Suppression"],
  },
  {
    title: "Microwave & Radar System",
    stage: "Diploma Final Year",
    Icon: LuRadar,
    description:
      "A radar system that scans its surroundings to detect nearby objects and display their distance and direction.",
    impact: "Applies microwave and radar communication principles in a working build.",
    tech: ["Radar", "Microwave Comm.", "Object Detection", "Distance & Direction"],
  },
  {
    title: "Breath Alcohol Detector",
    stage: "Internship · E Spark Tech",
    Icon: LuWind,
    description:
      "Senses alcohol in a person's breath using a gas sensor and triggers an alert when the level crosses a safe threshold.",
    impact: "Calibrated and tested for reliable readings across repeated trials.",
    tech: ["Gas Sensor", "Threshold Alert", "Calibration", "Prototype"],
  },
];

export const education = [
  {
    school: "Trinity College of Engineering and Research",
    degree: "B.E. in Electronics and Telecommunication",
    note: "Final Year",
    period: "2024 — 2027 (Expected)",
    location: "Pune",
  },
  {
    school: "JSPM's Rajarshi Shahu College of Engineering (Polytechnic)",
    degree: "Diploma in Electronics and Telecommunication",
    period: "2021 — 2024",
    location: "Tathawade, Pune",
  },
];

export const pipeline = [
  { Icon: LuActivity, label: "Sense" },
  { Icon: LuCpu, label: "Process" },
  { Icon: LuZap, label: "Respond" },
];
