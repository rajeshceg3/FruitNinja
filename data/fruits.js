// Mock fruit data to be used by the API
// This replaces database seeding due to environment constraints

export const mockFruits = [
  {
    id: 1,
    name: 'Strawberry',
    imageUrl: '/images/strawberry.jpg', // Placeholder image path
    benefits: ['antioxidants', 'vitamin-c', 'heart-health'],
    days: ['Monday', 'Wednesday', 'Friday'],
    description: "A sweet, red fruit known for its juicy texture and high vitamin C content. Perfect for snacks and desserts.",
  },
  {
    id: 2,
    name: 'Blueberry',
    imageUrl: '/images/blueberry.jpg',
    benefits: ['antioxidants', 'brain-health', 'vitamin-k'],
    days: ['Tuesday', 'Thursday', 'Saturday'],
    description: "Small, round, blue-purple berries packed with antioxidants and beneficial for brain health. A superfood!",
  },
  {
    id: 3,
    name: 'Orange',
    imageUrl: '/images/orange.jpg',
    benefits: ['vitamin-c', 'immunity', 'skin-health'],
    days: ['Monday', 'Wednesday', 'Sunday'],
    description: "A citrus fruit famous for its immune-boosting vitamin C and refreshing, tangy taste. Great for juice.",
  },
  {
    id: 4,
    name: 'Apple',
    imageUrl: '/images/apple.jpg',
    benefits: ['fiber', 'digestion', 'energy'],
    days: ['Tuesday', 'Friday', 'Sunday'],
    description: "Crisp and versatile, apples are rich in fiber and support healthy digestion. Available in many varieties.",
  },
  {
    id: 5,
    name: 'Banana',
    imageUrl: '/images/banana.jpg',
    benefits: ['potassium', 'energy', 'digestion'],
    days: ['Monday', 'Thursday', 'Saturday'],
    description: "A convenient and energy-boosting fruit, bananas are high in potassium and easy to digest. Naturally sweet.",
  },
  {
    id: 6,
    name: 'Kiwi',
    imageUrl: '/images/kiwi.jpg',
    benefits: ['vitamin-c', 'fiber', 'immunity'],
    days: ['Wednesday', 'Friday', 'Sunday'],
    description: "A small fruit with fuzzy brown skin and vibrant green flesh, packed with vitamin C and dietary fiber.",
  },
  {
    id: 7,
    name: 'Mango',
    imageUrl: '/images/mango.jpg',
    benefits: ['vitamin-a', 'immunity', 'skin-health'],
    days: ['Tuesday', 'Thursday', 'Saturday'],
    description: "A tropical stone fruit known for its sweet taste, fragrant aroma, and high vitamin A content. Deliciously exotic.",
  },
  {
    id: 8,
    name: 'Grapes',
    imageUrl: '/images/grapes.jpg',
    benefits: ['antioxidants', 'heart-health', 'hydration'],
    days: ['Monday', 'Wednesday', 'Friday'],
    description: "Small, sweet or tart berries that grow in clusters, rich in antioxidants and great for hydration.",
  },
  {
    id: 9,
    name: 'Pineapple',
    imageUrl: '/images/pineapple.jpg',
    benefits: ['digestion', 'vitamin-c', 'anti-inflammatory'],
    days: ['Tuesday', 'Thursday', 'Sunday'],
    description: "A tropical fruit with a tough outer rind and sweet, juicy yellow flesh. Contains bromelain, aiding digestion.",
  },
  {
    id: 10,
    name: 'Watermelon',
    imageUrl: '/images/watermelon.jpg',
    benefits: ['hydration', 'electrolytes', 'vitamin-a'],
    days: ['Wednesday', 'Saturday', 'Sunday'],
    description: "A large, refreshing fruit with high water content, perfect for hydration and rich in electrolytes and vitamin A.",
  }
];

// Also, let's list all unique benefits for filter generation
export const allBenefits = Array.from(new Set(mockFruits.flatMap(fruit => fruit.benefits))).sort();

// And all unique days for the selector
export const allDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
