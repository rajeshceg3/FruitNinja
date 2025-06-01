// store/fruitStore.js
import { create } from 'zustand';
import { allBenefits as initialAllBenefits, allDays as initialAllDays } from '../data/fruits';

const useFruitStore = create((set, get) => ({
  selectedDay: '',
  selectedBenefit: '',
  fruits: [],
  isLoading: false,
  error: null,
  allBenefits: initialAllBenefits, // Populate from mock data
  allDays: initialAllDays, // Populate from mock data

  // Action to set the selected day
  setSelectedDay: (day) => {
    set({ selectedDay: day, error: null });
    get().fetchFruits(); // Fetch fruits when day changes
  },

  // Action to set the selected benefit
  setSelectedBenefit: (benefit) => {
    set({ selectedBenefit: benefit, error: null });
    get().fetchFruits(); // Fetch fruits when benefit changes
  },

  // Action to fetch fruits from the API
  fetchFruits: async () => {
    const { selectedDay, selectedBenefit } = get();
    if (!selectedDay) {
      // Don't fetch if no day is selected, or set a default behavior
      set({ fruits: [], isLoading: false });
      return;
    }

    set({ isLoading: true, error: null });
    try {
      let apiUrl = `/api/fruits?day=${encodeURIComponent(selectedDay)}`;
      if (selectedBenefit) {
        apiUrl += `&benefit=${encodeURIComponent(selectedBenefit)}`;
      }

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      set({ fruits: data.fruits, isLoading: false });
    } catch (error) {
      console.error('Failed to fetch fruits:', error);
      set({ fruits: [], isLoading: false, error: error.message });
    }
  },
}));

export default useFruitStore;
