import gsap from 'gsap'

export const textFlip = (options) => {
    const {
        selector,
        height = 30,
        duration = 0.6,
        interval = 3000
    } = options;

    const slider = document.querySelector(selector);
    if (!slider) {
        console.error(`TextSlider: No element found for selector "${selector}"`);
        return;
    }

    const inner = slider.querySelector('.text-slider-inner');
    const slides = inner.querySelectorAll('span');
    const totalSlides = slides.length;

    slides.forEach(slide => {
        slide.style.height = height + "px";
        slide.style.lineHeight = height + "px";
    });

    slider.style.height = height + "px";

    let index = 0;

    setInterval(() => {
        index = (index + 1) % totalSlides;
        gsap.to(inner, {
            y: -index * height,
            duration: duration,
            ease: "power2.inOut"
        });
    }, interval);
}
