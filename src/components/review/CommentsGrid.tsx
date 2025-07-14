import { useQuery } from '@tanstack/react-query';
import useEmblaCarousel from 'embla-carousel-react';
import { CommentCard } from '@/components/review/CommentCard';
import { getComments } from '@/api/get-comments';

export const CommentsGrid = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['get-comments'],
    queryFn: () => getComments(),
  });

  const [emblaRef] = useEmblaCarousel({ loop: true });

  if (isLoading || typeof data === 'string' || error) return null;

  const comments = Array.isArray(data) ? data : data?.data || [];
  const showCarousel = comments.length > 3;

  return comments.length === 0 ? null : showCarousel ? (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {comments.map(comment => (
          <div
            key={crypto.randomUUID()}
            className="embla__slide min-w-0 flex-[0_0_100%] px-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
          >
            <CommentCard comment={comment} />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:h-[20vh]">
      {comments.map((comment, idx) => (
        <CommentCard key={comment.name + idx} comment={comment} />
      ))}
    </div>
  );
};
