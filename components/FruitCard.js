import Link from 'next/link';
import FruitImage from './FruitImage';

// components/FruitCard.js
export default function FruitCard({ fruit }) {
  if (!fruit) return null;

  return (
    <Link href={`/fruit/${fruit.id}`} passHref style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="fruit-card-container" data-testid="fruit-card">
        <FruitImage key={fruit.id} fruit={fruit} />
        <h3>{fruit.name}</h3>
        <p><strong>Benefits:</strong> {fruit.benefits.join(', ')}</p>
        {/* Nutrition Facts can be added later if available in data */}
      </div>
    </Link>
  );
}
