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
    
  
    document.getElementById('texto_Clock').innerText =horarioAtual;
  }
  setInterval(mostrarHorarioAtual,1000);
  mostrarHorarioAtual();