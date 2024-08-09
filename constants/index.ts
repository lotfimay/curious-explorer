export const userMenuItems = [
  {
    label: "Profile",
    url: "/profile",
  },
];

interface CategoryColors {
  [key: string]: string;
}

export const categoryColors: CategoryColors = {
  style: "#57c4ff31",
  coding: "#5e4fff31",
  fashion: "#da85c731",
  food: "#7fb88133",
  culture: "#ffb04f45",
  travel: "#ff795736",
};

export const categories = [
  { label: "Style", value: "style" },
  { label: "Fashion", value: "fashion" },
  { label: "Food", value: "food" },
  { label: "Culture", value: "culture" },
  { label: "Travel", value: "travel" },
  { label: "Coding", value: "coding" },
];

export const baseUrl = "http://localhost:3000";
