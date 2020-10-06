var tl = new TimelineMax({
    paused:true,
  });
  tl.to('#menu', 1, {'height': '10%'})
  // letter animation
  tl.fromTo(".anim-typewriter", 5, {
    width: "0",
  }, {
    width: "17.18em", /* same as CSS .line-1 width */
    ease:  SteppedEase.config(37)
  }, 1.5);
  // text cursor animation
  tl.fromTo(".anim-typewriter", 0.5, {
    "border-right-color": "rgba(255,255,255,0.75)"
  }, {
    "border-right-color": "rgba(255,255,255,0)",
    repeat: -1,
    ease:  SteppedEase.config(37)
  }, 3);
  tl.to(".anim-typewriter" , 0.5, {'border-right': 'none'}, 7)
  tl.from('.feature',4, {opacity: 0, stagger:1}, 8.5)
  tl.from('.link', 1.5, {y:-100, stagger: 0.5}, 12)
  tl.from('.scrollIcon', 2, {opacity: 0}, 12)
  tl.from('.scrollIcon', 2, {y: -50, repeat: 12});
  
  tl.play();

  document.addEventListener('load', () => {
      alert('coucou');
  })