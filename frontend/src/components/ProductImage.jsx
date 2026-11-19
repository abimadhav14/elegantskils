import { useState } from 'react';
import { productImages } from '../productImages';

const imageMap = {
  'track-pant.jpg': productImages.trackPant,
  'tops.jpg': productImages.tops,
  'silk-cotton-blouse.jpg': productImages.silkCottonBlouse,
  'shorts.jpg': productImages.shorts,
  'roundneck-tshirts.jpg': productImages.roundneckTshirts,
  'popcorn-plazo.jpg': productImages.popcornPlazo,
  'poonam-sarees.jpg': productImages.poonamSarees,
  'nighties.jpg': productImages.nighties,
  'leggings.jpg': productImages.leggings,
  'kids-tshirts-pant-set.jpg': productImages.kidsTshirtsPantSet,
  'kids-shorts.jpg': productImages.kidsShorts,
  'kids-pant.jpg': productImages.kidsPant,
  'kids-girl-coordset.jpg': productImages.kidsGirlCoordset,
  'inskirt.jpg': productImages.inskirt,
  'kalamkari-blouse.jpg': productImages.kalamkariBlouse,
};

export default function ProductImage({ src, alt = 'Product image' }) {
  const [showFallback, setShowFallback] = useState(false);
  const [fallbackFailed, setFallbackFailed] = useState(false);

  const filename = src?.split('/').pop();
  const imageUrl = imageMap[filename] || src;
  const finalImage = showFallback ? productImages.fallback : imageUrl;

  if (!src || fallbackFailed) {
    return (
      <div className="product-image-placeholder">
        Image unavailable
      </div>
    );
  }

  return (
    <img
      src={finalImage}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (!showFallback) {
          setShowFallback(true);
        } else {
          setFallbackFailed(true);
        }
      }}
    />
  );
}