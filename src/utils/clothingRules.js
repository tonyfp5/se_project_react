export const clothingRules = [
  {
    condition: (temp) => temp < 15,
    items: ["jacket"],
  },
  {
    condition: (temp) => temp >= 15 && temp < 25,
    items: ["tshirt"],
  },
  {
    condition: (temp) => temp >= 25,
    items: ["tshirt"],
  },
];