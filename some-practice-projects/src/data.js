// src/data.js
const imageData = [
  {
    name: "Sunset over Beach",
    url: "https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645909.jpg?t=st=1730201749~exp=1730205349~hmac=ec04546fd8151d2a4b1d73d21194a841967cc632ae156c3dbf7963ec1d4fe210&w=996",
  },
  {
    name: "Mountain Range",
    url: "https://img.freepik.com/free-photo/bright-pop-landscape-design_23-2149213461.jpg?t=st=1730201656~exp=1730205256~hmac=15e3277c925e92923d898d9f4057c057f500d49de5db92c783b999b0b2278549&w=996",
  },
  {
    name: "City Skyline",
    url: "https://img.freepik.com/free-photo/halloween-scene-illustration-anime-style_23-2151794318.jpg?t=st=1730201796~exp=1730205396~hmac=618d9f348205d4cf7547ba65a0bce5700eb73aa61aa98b04ace8a70b7e09edb0&w=1060",
  },
  {
    name: "Forest Path",
    url: "https://img.freepik.com/free-photo/hawaii-illustration-retro-comic-style_23-2151771127.jpg?t=st=1730201813~exp=1730205413~hmac=017bce4153c537d6d133f69399f71b558480d2286f8a422cbbec081a6b7b2226&w=996",
  },
  {
    name: "Ocean Waves",
    url: "https://img.freepik.com/free-photo/digital-art-halloween-illustration_23-2151822773.jpg?t=st=1730201845~exp=1730205445~hmac=06f33d685b1f53d5731851dd02520968892f98a9d7654ba28235d83d5a31caf4&w=996",
  },
  {
    name: "Desert Dunes",
    url: "https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645892.jpg?t=st=1730201863~exp=1730205463~hmac=5799091bea4b64a3e3d067576cf983dadd6a5567e8a5aa325bd8d75226cc75ce&w=996",
  },
];

export const TreeData = [
  {
    label: "Parent 1",
    children: [
      { label: "Child 1.1" },
      {
        label: "Child 1.2",
        children: [{ label: "Child 1.2.1" }, { label: "Child 1.2.2" }],
      },
    ],
  },
  { label: "Parent 2" },
  {
    label: "Parent 3",
    children: [
      { label: "Child 3.1" },
      {
        label: "Child 3.2",
      },
      {
        label: "Child 3.3",
      },
    ],
  },
];
export default imageData;
