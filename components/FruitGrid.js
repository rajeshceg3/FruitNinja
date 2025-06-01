// components/FruitGrid.js
import FruitCard from './FruitCard';

export default function FruitGrid({ fruits }) {
  // Basic styling for the grid
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', // Responsive grid
    gap: '16px',
    padding: '16px',
  };

  if (!fruits || fruits.length === 0) {
    return <p>No fruits match your criteria. Try changing the day or benefit filter!</p>;
  }

  return (
    <div style={gridStyle}>
      {fruits.map(fruit => (
        <FruitCard key={fruit.id} fruit={fruit} />
      ))}
    </div>
  );
}
