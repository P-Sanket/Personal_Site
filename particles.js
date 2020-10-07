window.onload = function () {
  Particles.init({
    //normal options
    selector: ".background",
    maxParticles: 50,
    connectParticles: false,
    color: "#00adb5",
    sizeVariations: 7.5,

    //options for breakpoints
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 20,
          color: "#00adb5",
          connectParticles: false,
        },
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 15,
          connectParticles: false,
        },
      },
      {
        breakpoint: 280,
        options: {
          maxParticles: 0,
        },
      },
    ],
  });
};
