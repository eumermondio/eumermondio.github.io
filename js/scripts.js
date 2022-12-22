//
// Poner aquí los scripts 
// 
document.addEventListener("DOMContentLoaded", e => {
    new fullpage('#main', {
        licenseKey: "gplv3-license",
        autoScrolling: true,
        scrollHorizontally: false,
        sectionsColor: ['black', 'white', 'black', 'white'],
        loopBottom: true,
        navigation: true,
        slidesNavigation: true,
        controlArrows: false,
    });
    let botonesAbajo = document.querySelector("ul");
    botonesAbajo.style.textAlign = "center";
});