function getCookie(name) {
    var cookieArr = document.cookie.split("; ");
    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      if (name === cookiePair[0]) {
        return cookiePair[1];
      }
    }
    return null;
  }
if(getCookie("decada") == 'anos70'){
    document.getElementById("cssdec").href = "assets/css/biografia70.css";
    document.getElementById("logomicrosoftbio").src = "assets/imgs/Microsoft_Logo_(1975).svg.png";
    document.getElementById("Imagem").src = "assets/imgs/ballmer1.jpg";
}else if(getCookie("decada") == 'anos80'){
    document.getElementById("cssdec").href = "assets/css/biografia80.css";
    document.getElementById("logomicrosoftbio").src = "assets/imgs/Microsoft_Logo_(1982).svg.png";
    document.getElementById("Imagem").src = "assets/imgs/ballmer2.jpeg";
}else if(getCookie("decada") == 'anos90'){
    document.getElementById("cssdec").href = "assets/css/biografia90.css";
    document.getElementById("logomicrosoftbio").src = "assets/imgs/Microsoft_Logo_(1987).svg.png";
    document.getElementById("Imagem").src = "assets/imgs/ballmer3.jpeg";
}else if(getCookie("decada") == 'anos00'){
    document.getElementById("cssdec").href = "assets/css/biografia00.css";
    document.getElementById("logomicrosoftbio").src = "assets/imgs/Microsoft_Logo_(1987).svg.png";
    document.getElementById("Imagem").src = "assets/imgs/ballmer4.jpg";
}else if(getCookie("decada") == 'anos10'){
    document.getElementById("cssdec").href = "assets/css/biografia10.css";
    document.getElementById("logomicrosoftbio").src = "assets/imgs/Microsoft_Logo_(2012).webp";
    document.getElementById("Imagem").src = "assets/imgs/ballmer5.jpeg";
}