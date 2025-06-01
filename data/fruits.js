// Mock fruit data to be used by the API
// This replaces database seeding due to environment constraints

export const mockFruits = [
  {
    id: 1,
    name: 'Strawberry',
    imageUrl: '/images/strawberry.jpg', // Placeholder image path
    benefits: ['antioxidants', 'vitamin-c', 'heart-health'],
    days: ['Monday', 'Wednesday', 'Friday'],
  },
  {
    id: 2,
    name: 'Blueberry',
    imageUrl: '/images/blueberry.jpg',
    benefits: ['antioxidants', 'brain-health', 'vitamin-k'],
    days: ['Tuesday', 'Thursday', 'Saturday'],
  },
  {
    id: 3,
    name: 'Orange',
    imageUrl: '/images/orange.jpg',
    benefits: ['vitamin-c', 'immunity', 'skin-health'],
    days: ['Monday', 'Wednesday', 'Sunday'],
  },
  {
    id: 4,
    name: 'Apple',
    imageUrl: '/images/apple.jpg',
    benefits: ['fiber', 'digestion', 'energy'],
    days: ['Tuesday', 'Friday', 'Sunday'],
  },
  {
    id: 5,
    name: 'Banana',
    imageUrl: '/images/banana.jpg',
    benefits: ['potassium', 'energy', 'digestion'],
    days: ['Monday', 'Thursday', 'Saturday'],
  },
  {
    id: 6,
    name: 'Kiwi',
    imageUrl: '/images/kiwi.jpg',
    benefits: ['vitamin-c', 'fiber', 'immunity'],
    days: ['Wednesday', 'Friday', 'Sunday'],
  },
  {
    id: 7,
    name: 'Mango',
    imageUrl: '/images/mango.jpg',
    benefits: ['vitamin-a', 'immunity', 'skin-health'],
    days: ['Tuesday', 'Thursday', 'Saturday'],
  },
  {
    id: 8,
    name: 'Grapes',
    imageUrl: '/images/grapes.jpg',
    benefits: ['antioxidants', 'heart-health', 'hydration'],
    days: ['Monday', 'Wednesday', 'Friday'],
  },
  {
    id: 9,
    name: 'Pineapple',
    imageUrl: '/images/pineapple.jpg',
    benefits: ['digestion', 'vitamin-c', 'anti-inflammatory'],
    days: ['Tuesday', 'Thursday', 'Sunday'],
  },
  {
    id: 10,
    name: 'Watermelon',
    imageUrl: '/images/watermelon.jpg',
    benefits: ['hydration', 'electrolytes', 'vitamin-a'],
    days: ['Wednesday', 'Saturday', 'Sunday'],
  }
];

// Also, let's list all unique benefits for filter generation
export const allBenefits = Array.from(new Set(mockFruits.flatMap(fruit => fruit.benefits))).sort();

// And all unique days for the selector
export const allDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
