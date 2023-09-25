function verificarEnter(event) {
    if (event.key === "Enter") {
        // A tecla "Enter" foi pressionada, agora você pode pegar o valor do input
        var valorInput = document.getElementById("comando").value;
        document.getElementById("comando").value = "";
        if (valorInput == "HELP") {
            document.getElementById("HELP").style.display = "block"
        } else if (valorInput == "FUNDACAO") {
            document.getElementById("FUNDACAO").style.display = "block";
        } else if (valorInput == "ALTAIR") {
            document.getElementById("ALTAIR").style.display = "block";
        } else if (valorInput == "APPLE") {
            document.getElementById("APPLE").style.display = "block";
        } else if (valorInput == "APP") {
            document.getElementById("APP").style.display = "block";
        } else {
            
        }
    }
}