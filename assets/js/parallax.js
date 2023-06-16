// Index page parallax

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        scrub: true,
        pin: true,
        pinSpacing: false
    });

});

ScrollTrigger.create({
  snap: {
    snapTo: 1 / 6,
    duration: 0.5
  }
});

