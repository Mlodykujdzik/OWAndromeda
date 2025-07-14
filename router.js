const routes = {
    "/": "pages/home.html",
    "/galeria": "pages/galeria.html",
    "/atrakcje": "pages/atrakcje.html",
    "/kontakt": "pages/kontakt.html",
    "/inne": "pages/inne.html",
};

async function loadRoute() {
    const path = location.hash.replace("#", "") || "/";
    const file = routes[path];
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById("app").innerHTML = html;
}

window.addEventListener("hashchange", loadRoute);
window.addEventListener("load", loadRoute);
