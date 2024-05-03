var slider = tns({
    container: ".my-slider",
    mode: "carousel",
    mouseDrag: true,
    // autoWidth: true,

    responsive: {
        1000: {
            items: 4,
            gutter: 32,
            center: true,

        },
        500: {
            items: 1,
            fixedWidth: 720,
            gutter: 32,
            center: true,
            loop: true,
        },
        0: {
            items: 1,
            center: true,
            fixedWidth: 350,
            gutter: 32,
        },
    },

    controlsPosition: "bottom",
    controlsContainer: "#tns-controls",
    prevButton: ".prev-button",
    nextButton: ".next-button",
    nav: false,
    preventScrollOnTouch: 'auto'

});
