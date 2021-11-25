gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });

const t1 = gsap.timeline();

t1.from(".works-page-content-two", { xPercent: -100 })
  .from(".works-page-content-three", { yPercent: 100 })
  .from(".works-page-content-four", { xPercent: -100 })
  .from(".works-page-content-five", { xPercent: 100 })
  .from(".works-page-content-six", { yPercent: 100 });

ScrollTrigger.create({
  animation: t1,
  trigger: ".works-page-container",
  start: "top top",
  end: "+=4000",
  scrub: true,
  pin: true,
  anticipatePin: 1,
});
