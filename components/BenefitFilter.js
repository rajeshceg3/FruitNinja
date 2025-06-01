// components/BenefitFilter.js
import useFruitStore from '../store/fruitStore';

export default function BenefitFilter() {
  const selectedBenefit = useFruitStore((state) => state.selectedBenefit);
  const setSelectedBenefit = useFruitStore((state) => state.setSelectedBenefit);
  const allBenefits = useFruitStore((state) => state.allBenefits);

  return (
    <div style={{ margin: '1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
      <p style={{margin: 0}}>Filter by benefit: </p>
      {allBenefits.map(benefit => (
        <button
          key={benefit}
          onClick={() => setSelectedBenefit(selectedBenefit === benefit ? '' : benefit)} // Toggle functionality
          style={{
            padding: '0.5rem',
            border: selectedBenefit === benefit ? '2px solid blue' : '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
            textTransform: 'capitalize',
          }}
        >
          {benefit}
        </button>
      ))}
      {selectedBenefit && (
        <button
          onClick={() => setSelectedBenefit('')}
          style={{padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer'}}
        >
          Clear Filter
        </button>
      )}
    </div>
  );
}
