'use client';

import { getComments } from '@/api/get-comments';
import { ReviewForm } from '@/components/review/ReviewForm';
import { useQuery } from '@tanstack/react-query';
import useEmblaCarousel from 'embla-carousel-react';
import { CommentCard } from '@/components/review/CommentCard';

export default function ReviewPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['get-comments'],
    queryFn: () => getComments(),
    staleTime: 100000,
    refetchInterval: 100000,
  });

  const [emblaRef] = useEmblaCarousel({ loop: true });

  if (isLoading || typeof data === 'string' || error) return null;

  const comments = Array.isArray(data) ? data : data?.data || [];
  const showCarousel = comments.length > 3;

  return (
    <div className="px-4 py-8 xl:py-[2vw] max-w-[80vw] mx-auto">
      <div className="flex justify-center mb-10">
        <ReviewForm />
      </div>

      {comments.length === 0 ? null : showCarousel ? (
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex  embla__container">
            {comments.map((comment) => (
              <div
                key={comment.id ?? comment.name}
                className="embla__slide min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
              >
                <CommentCard comment={comment} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="2xl:h-[20vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {comments.map((comment) => (
            <CommentCard
              key={comment.id ?? comment.name}
              comment={comment}
            />
          ))}
        </div>
      )}
    </div>
  );
}
