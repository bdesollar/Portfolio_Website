/**
 * Site copy conventions:
 * - Use noun phrases and verb fragments in marketing copy
 * - Dates use full month names with arrow separator
 */

const MONTHS = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
};

export function formatMonthYear(value) {
  const [month, year] = value.split(" ");
  const fullMonth = MONTHS[month] || month;
  return `${fullMonth} ${year}`;
}

const TECH_LABELS = {
  "React-Native": "React Native",
  "Express-js": "Express.js",
  "Node-js": "Node.js",
  mongodb: "MongoDB",
  "Google-Cloud": "Google Cloud",
  chatgpt: "ChatGPT",
  MYSQL: "MySQL",
  JavaScript: "JavaScript",
  Python: "Python",
  Flask: "Flask",
  Heroku: "Heroku",
  Docker: "Docker",
  React: "React",
  Expo: "Expo",
  Firebase: "Firebase",
};

export function formatTechLabel(tech) {
  return TECH_LABELS[tech] || tech;
}
