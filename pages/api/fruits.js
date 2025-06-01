import { mockFruits } from '../../data/fruits';

export default function handler(req, res) {
  const { day, benefit } = req.query;

  let filteredFruits = mockFruits;

  // Day-based filtering
  if (day) {
    // Specific logic for Monday as per PRD
    if (day.toLowerCase() === 'monday' && !benefit) {
      filteredFruits = filteredFruits.filter(fruit =>
        fruit.days.map(d => d.toLowerCase()).includes(day.toLowerCase()) &&
        fruit.benefits.includes('energy')
      );
    } else {
      filteredFruits = filteredFruits.filter(fruit =>
        fruit.days.map(d => d.toLowerCase()).includes(day.toLowerCase())
      );
    }
  }

  // Benefit-based filtering
  if (benefit) {
    filteredFruits = filteredFruits.filter(fruit =>
      fruit.benefits.map(b => b.toLowerCase()).includes(benefit.toLowerCase())
    );
  }

  // The PRD mentions "3 primary fruits + 2 alternatives".
  // For now, we return all matching fruits. This logic can be added later if needed.
  // For example, slice the results:
  // const primaryFruits = filteredFruits.slice(0, 3);
  // const alternativeFruits = filteredFruits.slice(3, 5);
  // For now, returning all matches to simplify.

  res.status(200).json({ fruits: filteredFruits });
}
