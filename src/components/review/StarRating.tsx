import { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
}

export function StarRating({ rating, setRating }: StarRatingProps) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center space-x-1 xl:space-x-[1vw]">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <Star
            key={index}
            className={`cursor-pointer xl:size-[2vw] ${
              ratingValue <= (hover || rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
            size={24}
            onClick={() => setRating(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
          />
        );
      })}
    </div>
  );
}
