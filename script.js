function initLightbox() {
    if (typeof GLightbox !== "undefined") {
        GLightbox({ selector: ".glightbox" });
    }
}

function afterPageLoad() {
    // Dodaj inne funkcje po załadowaniu nowej podstrony
    initLightbox();
}

window.addEventListener("hashchange", () => {
    setTimeout(afterPageLoad, 100); // poczekaj na dynamiczne wstawienie HTML
});

window.addEventListener("load", () => {
    afterPageLoad();
});
