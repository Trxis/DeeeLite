import gsap from "gsap-trial";

const button = document.getElementById('animate-button');
const audio = document.getElementById('audio');
const tl = gsap.timeline({repeat: -1});
const tl2 = gsap.timeline({repeat: -1});
const tl3 = gsap.timeline({repeat: -1});
const tl4 = gsap.timeline({repeat: -1});
const tl5 = gsap.timeline({repeat: -1});
const randomValue = (min, max) => Math.random() * (max - min) + min;

tl.to(".head img", {
    x: randomValue(-500, 500),
    rotate: randomValue(-360, 360),
    duration: randomValue(0.5, 3),
    ease: "in"
});
tl.to(".head img", {
    y: randomValue(-500, 500),
    rotate: randomValue(-360, 360),
    duration: randomValue(1, 4),
    ease: "bounce.inOut"
});
tl.to(".head img", {
    y: randomValue(-500, 500),
    x: randomValue(-150, 150),
    rotate: randomValue(-360, 360),
    duration: randomValue(0.2, 1),
    ease: "power1.out"
});
tl.to(".head img", {
    x: randomValue(-500, 500),
    rotate: randomValue(360, 720),
    duration: randomValue(2, 5),
    ease: "back.in"
});
tl.to(".head img", {
    y: randomValue(-500, 500),
    duration: randomValue(1, 3),
    ease: "bounce.inOut"
});
tl.to(".head img", {
    y: randomValue(-500, 500),
    rotate: randomValue(180, 360),
    duration: randomValue(0.5, 2),
    ease: "elastic.inOut"
});
tl.to(".head img", {
    x: randomValue(-500, 500),
    duration: randomValue(1, 3),
    ease: "in"
});

tl2.to(".head2 img", {
    x: randomValue(-500, 500),
    rotate: randomValue(-360, 360),
    duration: randomValue(0.5, 3),
    ease: "in"
});
tl2.to(".head2 img", {
    y: randomValue(-500, 500),
    rotate: randomValue(-360, 360),
    duration: randomValue(1, 4),
    ease: "bounce.inOut"
});
tl2.to(".head2 img", {
    y: randomValue(-500, 500),
    x: randomValue(-150, 150),
    rotate: randomValue(-360, 360),
    duration: randomValue(0.2, 1),
    ease: "power1.out"
});
tl2.to(".head2 img", {
    x: randomValue(-500, 500),
    rotate: randomValue(360, 720),
    duration: randomValue(2, 5),
    ease: "back.in"
});
tl2.to(".head2 img", {
    y: randomValue(-500, 500),
    duration: randomValue(1, 3),
    ease: "bounce.inOut"
});
tl2.to(".head2 img", {
    y: randomValue(-500, 500),
    rotate: randomValue(180, 360),
    duration: randomValue(0.5, 2),
    ease: "elastic.inOut"
});
tl2.to(".head2 img", {
    x: randomValue(-500, 500),
    duration: randomValue(1, 3),
    ease: "in"
});

tl3.to(".head3 img", {
    x: randomValue(-500, 500),
    rotate: randomValue(-360, 360),
    duration: randomValue(0.5, 3),
    ease: "in"
});
tl3.to(".head3 img", {
    y: randomValue(-500, 500),
    rotate: randomValue(-360, 360),
    duration: randomValue(1, 4),
    ease: "bounce.inOut"
});
tl3.to(".head3 img", {
    y: randomValue(-500, 500),
    x: randomValue(-150, 150),
    rotate: randomValue(-360, 360),
    duration: randomValue(0.2, 1),
    ease: "power1.out"
});
tl3.to(".head3 img", {
    x: randomValue(-500, 500),
    rotate: randomValue(360, 720),
    duration: randomValue(2, 5),
    ease: "back.in"
});
tl3.to(".head3 img", {
    y: randomValue(-500, 500),
    duration: randomValue(1, 3),
    ease: "bounce.inOut"
});
tl3.to(".head3 img", {
    y: randomValue(-500, 500),
    rotate: randomValue(180, 360),
    duration: randomValue(0.5, 2),
    ease: "elastic.inOut"
});
tl3.to(".head3 img", {
    x: randomValue(-500, 500),
    duration: randomValue(1, 3),
    ease: "in"
});


tl4.to(".head4 img", {
    x: randomValue(-500, 500),
    rotate: randomValue(-360, 360),
    duration: randomValue(0.5, 3),
    ease: "in"
});
tl4.to(".head4 img", {
    y: randomValue(-500, 500),
    rotate: randomValue(-360, 360),
    duration: randomValue(1, 4),
    ease: "bounce.inOut"
});
tl4.to(".head4 img", {
    y: randomValue(-500, 500),
    x: randomValue(-150, 150),
    rotate: randomValue(-360, 360),
    duration: randomValue(0.2, 1),
    ease: "power1.out"
});
tl4.to(".head4 img", {
    x: randomValue(-500, 500),
    rotate: randomValue(360, 720),
    duration: randomValue(2, 5),
    ease: "back.in"
});
tl4.to(".head4 img", {
    y: randomValue(-500, 500),
    duration: randomValue(1, 3),
    ease: "bounce.inOut"
});
tl4.to(".head4 img", {
    y: randomValue(-500, 500),
    rotate: randomValue(180, 360),
    duration: randomValue(0.5, 2),
    ease: "elastic.inOut"
});
tl4.to(".head4 img", {
    x: randomValue(-500, 500),
    duration: randomValue(1, 3),
    ease: "in"
});


tl5.to(".head5 img", {
    x: randomValue(-500, 500),
    rotate: randomValue(-360, 360),
    duration: randomValue(0.5, 3),
    ease: "in"
});
tl5.to(".head5 img", {
    y: randomValue(-500, 500),
    rotate: randomValue(-360, 360),
    duration: randomValue(1, 4),
    ease: "bounce.inOut"
});
tl5.to(".head5 img", {
    y: randomValue(-500, 500),
    x: randomValue(-150, 150),
    rotate: randomValue(-360, 360),
    duration: randomValue(0.2, 1),
    ease: "power1.out"
});
tl5.to(".head5 img", {
    x: randomValue(-500, 500),
    rotate: randomValue(360, 720),
    duration: randomValue(2, 5),
    ease: "back.in"
});
tl5.to(".head5 img", {
    y: randomValue(-500, 500),
    duration: randomValue(1, 3),
    ease: "bounce.inOut"
});
tl5.to(".head5 img", {
    y: randomValue(-500, 500),
    rotate: randomValue(180, 360),
    duration: randomValue(0.5, 2),
    ease: "elastic.inOut"
});
tl5.to(".head5 img", {
    x: randomValue(-500, 500),
    duration: randomValue(1, 3),
    ease: "in"
});


const animations = () => {
    // Title Animation
    gsap.fromTo("#animated-title",
        { scale: 0.5, opacity: 0 },
        { scale: 1.5, opacity: 1, duration: 2, ease: "elastic.out(1, 0.5)" }
    );

    // Box Bouncing and Spinning
    gsap.fromTo("#animated-box",
        { x: -200, opacity: 0 },
        { x: 200, opacity: 1, duration: 3, ease: "bounce.out" }
    );
    gsap.to("#animated-box", {
        rotation: 10000,
        scale: 1,
        duration: 500,
        delay: 1,
        ease: "elastic.out(1, 0.3)",
    });

    // Background Flash
    gsap.to("body", {
        backgroundColor: "#ff9800",
        duration: 0.5,
        repeat: 5,
        yoyo: true
    });

    // Button Wiggle
    gsap.to("#animate-button", {
        rotation: 10,
        duration: 0.2,
        yoyo: true,
        repeat: 10
    });
};

button.addEventListener('click', () => {
    if ('click') {
        document.getElementById('bg_music').play();
        animations();
    }
});
