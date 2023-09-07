const microversoes = document.getElementsByClassName("microversoes");
const header = document.getElementsByTagName("header")[0];
//Acho que pode ser simplificado se usar um DOMEventListener
header.addEventListener("mouseover", multiCor);
header.addEventListener("mouseout", resetHeader);

function multiCor() {
    microversoes[0].style.backgroundColor = "#000";
    microversoes[1].style.backgroundColor = "#6666FF";
    microversoes[2].style.backgroundColor = "#D9D9D9";
    microversoes[3].style.backgroundColor = "#41c1ef";
    microversoes[4].style.backgroundColor = "#c5d9eb";
    for (let n = 0; n < microversoes.length; n++) {
        microversoes[n].querySelectorAll("img")[0].style.display = "inline";
    }
}
function resetHeader() {
    for (let n = 0; n < microversoes.length; n++) {
        if (microversoes[n].id != window.location.pathname.split("/")[window.location.pathname.split("/").length-1].replace(/\.html/g, '')) {
            microversoes[n].style.backgroundColor = "";
            microversoes[n].querySelectorAll("img")[0].style.display = "none";
        }
    }
}