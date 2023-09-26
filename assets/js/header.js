cabecalho = document.getElementsByTagName("header")[0];
fakecabecalho = document.getElementById("fakeheader");

function header() {
    cabecalho.style.display = "flex";
    document.getElementById("fakeheader").style.display = "none";
    cabecalho.classList.add("animation");
}

function desheader() {
    cabecalho.style.display = "none";
    document.getElementById("fakeheader").style.display = "flex";
    cabecalho.classList.remove("animation");
}