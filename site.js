// Play silent research previews as they enter the viewport, without player UI.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const visibleVideos = new Set();
const autoplayVideos = document.querySelectorAll('video[data-autoplay]');

const syncPlayback = (video) => {
  if (visibleVideos.has(video) && !document.hidden && !motionPreference.matches) {
    // The poster remains visible if the browser cannot start playback.
    video.play().catch(() => {});
  } else {
    video.pause();
  }
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting, intersectionRatio }) => {
      if (isIntersecting && intersectionRatio >= 0.15) visibleVideos.add(target);
      else visibleVideos.delete(target);
      syncPlayback(target);
    });
  }, { threshold: [0, 0.15] });
  autoplayVideos.forEach(video => observer.observe(video));
} else {
  autoplayVideos.forEach(video => { visibleVideos.add(video); syncPlayback(video); });
}

const syncVisibleVideos = () => autoplayVideos.forEach(syncPlayback);
document.addEventListener('visibilitychange', syncVisibleVideos);
motionPreference.addEventListener('change', syncVisibleVideos);
