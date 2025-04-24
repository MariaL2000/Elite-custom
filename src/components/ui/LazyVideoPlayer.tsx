import { forwardRef } from 'react';

interface VideoPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

const LazyVideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(({ src, ...props }, ref) => {
  return (
    <video ref={ref} autoPlay loop muted playsInline {...props}>
      <source src={src} type="video/mp4" />
      {/* Fallback para navegadores que no soportan MP4 */}
      <source src={src.replace('.mp4', '.webm')} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
});

LazyVideoPlayer.displayName = 'LazyVideoPlayer';

export default LazyVideoPlayer;
