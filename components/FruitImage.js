import { useState } from 'react';

// Preserve the source URL. Missing source images must not look like empty photos.
export default function FruitImage({ fruit, detail = false }) {
  const [failed, setFailed] = useState(false);
  return failed ? <p className="fruit-image-unavailable">Image unavailable for {fruit.name}</p> : (
    <img src={fruit.imageUrl} alt={fruit.name} className={detail ? 'fruit-detail-image' : undefined}
      width={detail ? 300 : undefined} height={detail ? 300 : undefined}
      onError={() => setFailed(true)} />
  );
}
