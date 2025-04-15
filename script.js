
  let index = 0;
  const track = document.getElementById('carouselTrack');
  const totalSlides = track.children.length;

  function moveSlide(direction) {
    index += direction;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

