import { Reveal } from "../Reveal";

type VideoSectionProps = {
  videoUrl?: string | null;
  videoLabel?: string | null;
  videoHeading?: string | null;
};

function extractYoutubeId(url: string): string | null {
  if (!url) return null;

  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]+)/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) {
      return match[1];
    }
  }

  return null;
}

export function VideoSection({
  videoUrl,
  videoLabel,
  videoHeading,
}: VideoSectionProps) {
  const videoId = videoUrl ? extractYoutubeId(videoUrl) : null;

  if (!videoId) {
    return null;
  }

  return (
    <section className="video" id="video">
      <div className="container">
        {videoLabel ? (
          <Reveal as="p" className="section-label">
            {videoLabel}
          </Reveal>
        ) : null}
        {videoHeading ? (
          <Reveal as="h2" className="section-heading" delay={0.1}>
            {videoHeading}
          </Reveal>
        ) : null}
        <Reveal className="video-player" delay={videoHeading ? 0.2 : videoLabel ? 0.1 : 0}>
          <div className="video-embed">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?rel=0`}
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
