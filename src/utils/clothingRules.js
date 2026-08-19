export const clothingRules = [
  {
    condition: (temperature) => temperature >= 70,
    items: ["tshirt"],
  },
  {
    condition: (temperature) => temperature < 70,
    items: ["jacket"],
  },
];