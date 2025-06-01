// components/FruitCard.js
export default function FruitCard({ fruit }) {
  if (!fruit) return null;

  return (
    <div className="fruit-card-container" role="fruit-card">
      <img src={fruit.imageUrl} alt={fruit.name} />
      <h3>{fruit.name}</h3>
      <p><strong>Benefits:</strong> {fruit.benefits.join(', ')}</p>
      {/* Nutrition Facts can be added later if available in data */}
    </div>
  );
}
