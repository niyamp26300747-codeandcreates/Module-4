export type Recipe = {
  id: string;
  title: string;
  cuisine: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
};


export const recipes: Recipe[] = [
  {
    id: "garlic-butter-pasta",
    title: "Garlic Butter Pasta",
    cuisine: "Italian",
    minutes: 20,
    difficulty: "Easy",
    description: "Silky spaghetti tossed in roasted garlic, butter, parmesan, and fresh parsley.",
  },
  {
    id: "chicken-tikka-bowl",
    title: "Chicken Tikka Rice Bowl",
    cuisine: "Indian",
    minutes: 35,
    difficulty: "Medium",
    description: "Spiced yogurt-marinated chicken served over basmati rice with mint chutney.",
  },
  {
    id: "crispy-tofu-tacos",
    title: "Crispy Tofu Street Tacos",
    cuisine: "Mexican",
    minutes: 25,
    difficulty: "Easy",
    description: "Pan-seared smoky tofu topped with pickled red onions, avocado, and lime crema.",
  },
  {
    id: "miso-ginger-ramen",
    title: "Miso Ginger Ramen",
    cuisine: "Japanese",
    minutes: 30,
    difficulty: "Medium",
    description: "Rich miso broth infused with fresh ginger, soft-boiled egg, and scallions.",
  },
];