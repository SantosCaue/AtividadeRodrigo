function mostrarHorarioAtual() {
    const agora = new Date();
    const hora = agora.getHours();
    const minuto = agora.getMinutes();
  
    const horarioAtual = `${hora}:${minuto}`;
  
    document.getElementById('texto_Clock').innerText =horarioAtual;
  }
  setInterval(mostrarHorarioAtual,1000);
  mostrarHorarioAtual();