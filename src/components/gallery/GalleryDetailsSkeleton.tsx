import { Skeleton } from '../ui/skeleton';

export const GalleryDetailsSkeleton = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-16">
        <div className="mb-8 flex items-center justify-start">
          <Skeleton className="h-8 w-1/4 bg-blue-900/20" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3, 5, 6, 7, 8, 9, 10].map(index => (
            <Skeleton key={index} className="aspect-[4/3] w-full rounded-lg bg-blue-900/20" />
          ))}
        </div>
      </div>
    </section>
  );
};
