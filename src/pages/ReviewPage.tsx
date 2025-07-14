import { CommentsGrid } from '@/components/review/CommentsGrid';
import { ReviewForm } from '@/components/review/ReviewForm';

export default function ReviewPage() {
  return (
    <div className="mx-auto px-4 py-8 xl:py-[2vw]">
      <div className="mb-10 flex justify-center">
        <ReviewForm />
      </div>
      <CommentsGrid />
    </div>
  );
}
