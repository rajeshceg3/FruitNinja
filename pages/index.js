// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import DaySelector from '../components/DaySelector';
import BenefitFilter from '../components/BenefitFilter';
import FruitGrid from '../components/FruitGrid';
import useFruitStore from '../store/fruitStore';
import { useEffect } from 'react';

export default function HomePage() {
  const { fruits, isLoading, error, selectedDay, fetchFruits } = useFruitStore((state) => ({
    fruits: state.fruits,
    isLoading: state.isLoading,
    error: state.error,
    selectedDay: state.selectedDay,
    fetchFruits: state.fetchFruits,
  }));

  // Fetch initial fruits if a day is selected (e.g. from persisted state, though not implemented here)
  // Or, ensure fruits are fetched if selectedDay changes and is not empty.
  // The store's setSelectedDay already calls fetchFruits.
  // This effect could be for an initial fetch on load if a default day was set.
  // For now, the user must select a day to trigger the first fetch.

  return (
    <div>
      <Head>
        <title>Fruitful Days - Daily Fruit Planner</title>
        <meta name="description" content="Your daily guide to nutritious fruit choices" />
        <link rel="icon" href="/favicon.ico" /> {/* Ensure favicon.ico exists in public */}
      </Head>

      <Header />

      <main style={{ padding: '0 2rem' }}>
        <DaySelector />
        <BenefitFilter />

        {isLoading && <p>Loading fruits...</p>}
        {error && <p style={{ color: 'red' }}>Error fetching fruits: {error}</p>}
        {!isLoading && !error && selectedDay && <FruitGrid fruits={fruits} />}
        {!isLoading && !error && !selectedDay && <p>Please select a day to see fruit recommendations.</p>}
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid #eee' }}>
        <p>Fruitful Days - Empowering Healthy Choices</p>
      </footer>
    </div>
  );
}
