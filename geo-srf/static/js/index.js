document.addEventListener('DOMContentLoaded', () => {
  // This page has a video carousel, but no frame interpolation slider.
  if (typeof bulmaCarousel !== 'undefined') {
    bulmaCarousel.attach('.carousel', {
      slidesToScroll: 1,
      slidesToShow: 2,
      loop: true,
      infinite: true,
      autoplay: false
    });
  }
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) target.pause();
      });
    });
    document.querySelectorAll('video').forEach(video => observer.observe(video));
  }
});
