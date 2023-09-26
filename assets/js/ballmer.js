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
    document.getElementById("cssdec").href = "assets/css/biografia70";
    document.getElementById("logomicrosoftbio").src = "assets/imgs/Microsoft_Logo_(1975).png";
    document.getElementById("Imagem").src = "ballmer1";
}else if(getCookie("decada") == 'anos80'){
    document.getElementById("cssdec").href = "assets/css/biografia80";
    document.getElementById("logomicrosoftbio").src = "assets/imgs/Microsoft_Logo_(1982).png";
    document.getElementById("Imagem").src = "ballmer2";
}else if(getCookie("decada") == 'anos90'){
    document.getElementById("cssdec").href = "assets/css/biografia90";
    document.getElementById("logomicrosoftbio").src = "assets/imgs/Microsoft_Logo_(1987).png";
    document.getElementById("Imagem").src = "ballmer3";
}else if(getCookie("decada") == 'anos00'){
    document.getElementById("cssdec").href = "assets/css/biografia00";
    document.getElementById("logomicrosoftbio").src = "assets/imgs/Microsoft_Logo_(1987).png";
    document.getElementById("Imagem").src = "ballmer4";
}else if(getCookie("decada") == 'anos10'){
    document.getElementById("cssdec").href = "assets/css/biografia10";
    document.getElementById("logomicrosoftbio").src = "assets/imgs/Microsoft_Logo_(2012).png";
    document.getElementById("Imagem").src = "ballmer5";
}