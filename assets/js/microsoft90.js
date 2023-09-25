function mostrarHorarioAtual() {
  const agora = new Date();
  const hora = agora.getHours();
  const minuto = agora.getMinutes();
  if (minuto > 10 && hora > 10) {
    var horarioAtual = `${hora}:${minuto}`;
  } else if (minuto < 10 && hora < 10) {
      horarioAtual = `0${hora}:0${minuto}`;
  } else if (minuto < 10) {
    horarioAtual = `${hora}:0${minuto}`;

  } else if (hora < 10) {
      horarioAtual = `0${hora}:${minuto}`;
  } 
  document.getElementById('texto_Clock').innerText = horarioAtual;
}
setInterval(mostrarHorarioAtual,1000);
mostrarHorarioAtual();

function appAberto(cardImagem) {
  document.getElementById("office_img").src = cardImagem;
  if (cardImagem === 'assets/imgs/Office_95_and_97_logo.svg' || cardImagem === 'assets/imgs/calculadoraAberta.svg') {
    document.getElementById("office_img").style.width = "75%";
  } else {
    document.getElementById("office_img").style.width = "";
  }

  if (cardImagem === 'assets/imgs/Office_95_and_97_logo.svg') {
    document.getElementById("botao_office").style.display = "flex";
  } else {
    document.getElementById("botao_office").style.display = "none";
  }

  if (cardImagem === 'assets/imgs/desligarAberto.svg') {
    var imgElement = document.getElementById("office_img");
    imgElement.setAttribute("usemap", "#image-map");
  }
}

function funcaosim() {
  var body = document.getElementById("Start");
  var main = document.getElementById("mainJS");
  var header = document.getElementById("headerJS");
  var footer = document.getElementById("footerJS");
  var fakeheader = document.getElementById("fakeheader");
  var logo = document.getElementById("win95Logo");
  body.style.backgroundColor = "#191a1a";
  logo.style.display = "block";
  main.style.display = "none";
  header.style.display = "none";
  footer.style.display = "none";
  fakeheader.style.display = "none";
  
  setTimeout(function() {
    body.style.backgroundColor = "#008282";
    logo.style.display = "none";
    main.style.display = "block";
    header.style.display = "none";
    footer.style.display = "flex";
    fakeheader.style.display = "block";
  }, 5000);
}


function funcaonao() {
  document.getElementById("office_img").src = "";
}