export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  stack: string[];
  repoUrl: string;
  category: string;
  language: string;
  status: string;
  highlights: string[];
  challenges: string[];
  learned: string[];
};

export const projects: Project[] = [
  {
    slug: "soulslike-game",
    name: "soulslike_game",
    shortDescription: "A shader-focused game prototype built with Unity.",
    description:
      "A gameplay prototype exploring soulslike combat feeling, visual atmosphere, and shader work inside Unity.",
    stack: ["Unity", "ShaderLab", "C#"],
    repoUrl: "https://github.com/ThanasisGeorg/soulslike_game",
    category: "Game Development",
    language: "ShaderLab",
    status: "Prototype",
    highlights: [
      "Experimented with shader pipelines for stylized visuals.",
      "Focused on gameplay mechanics and player feedback loops.",
      "Built as a practical learning project around Unity systems.",
    ],
    challenges: [
      "Balancing visual style and performance during gameplay.",
      "Keeping combat feel responsive while iterating quickly.",
    ],
    learned: [
      "How shader changes strongly affect game atmosphere.",
      "How to iterate game feel with short feedback loops.",
    ],
  },
  {
    slug: "braille-sense-gr",
    name: "braille-sense-gr",
    shortDescription: "A Greek braille alphabet trainer mobile app.",
    description:
      "An educational Android app designed to help users learn and practice the Greek braille alphabet through interactive training.",
    stack: ["Kotlin", "Android Studio", "Material UI"],
    repoUrl: "https://github.com/ThanasisGeorg/braille-sense-gr",
    category: "Mobile Development",
    language: "Kotlin",
    status: "Completed",
    highlights: [
      "Built interactive exercises for memorization and recognition.",
      "Designed for accessibility and clear feedback.",
      "Organized as a focused app project with practical UX goals.",
    ],
    challenges: [
      "Designing an accessible flow with clear, simple interactions.",
      "Maintaining educational clarity while keeping sessions engaging.",
    ],
    learned: [
      "How to build learning-focused flows on Android with Kotlin.",
      "How UX details improve accessibility outcomes.",
    ],
  },
  {
    slug: "e-thessbike",
    name: "e-ThessBike",
    shortDescription: "A Kotlin project around urban mobility ideas.",
    description:
      "A project centered on bike-related mobility scenarios, built as part of hands-on software development practice.",
    stack: ["Kotlin", "Android", "REST APIs"],
    repoUrl: "https://github.com/ThanasisGeorg/e-ThessBike",
    category: "Mobile Development",
    language: "Kotlin",
    status: "In Progress",
    highlights: [
      "Worked with app architecture and feature structuring.",
      "Explored practical geolocation and mobility-related flows.",
      "Strengthened Kotlin and Android development fundamentals.",
    ],
    challenges: [
      "Structuring mobility features cleanly as app complexity grew.",
      "Aligning location-driven behavior with intuitive navigation.",
    ],
    learned: [
      "How to decompose mobile features into maintainable modules.",
      "How mobility scenarios shape product and UX decisions.",
    ],
  },
  {
    slug: "tic-tac-toe",
    name: "Tic-Tac-Toe",
    shortDescription: "A classic Tic-Tac-Toe game written in C++.",
    description:
      "A lightweight implementation of Tic-Tac-Toe focused on game logic, turn handling, and clean control flow.",
    stack: ["C++", "Game Logic", "CLI"],
    repoUrl: "https://github.com/ThanasisGeorg/Tic-Tac-Toe",
    category: "Core Programming",
    language: "C++",
    status: "Completed",
    highlights: [
      "Implemented core game rules and winner detection.",
      "Practiced clean conditional logic and structure in C++.",
      "Built as a foundational project for algorithmic thinking.",
    ],
    challenges: [
      "Handling all board states and edge conditions cleanly.",
      "Keeping control flow readable for game-state transitions.",
    ],
    learned: [
      "How to model simple games with reliable state checks.",
      "How to write clearer procedural logic in C++.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
