  iten =0;
  function aparecerJanela(id){
        document.getElementById("Windows").style.display= "none";
        document.getElementById("Bill").style.display= "none";
        document.getElementById("A").style.display= "none";
        document.getElementById("Azure").style.display= "none";
        document.getElementById("Xbox").style.display= "none";
        document.getElementById("principal").style.display ="none";
        document.getElementById(id).style.display= "block";
  }
  function fechar(){
        document.getElementById("Windows").style.display= "none";
        document.getElementById("Bill").style.display= "none";
        document.getElementById("A").style.display= "none";
        document.getElementById("Azure").style.display= "none";
        document.getElementById("Xbox").style.display= "none";
        document.getElementById("principal").style.display ="grid";

  }

function voltar(){
      if(iten == 0){
            document.getElementsByClassName("versoes")[0].style.display = "none";
            document.getElementsByClassName("versoes")[3].style.display = "flex";
            iten = 3;
            }else if(iten == 1){
                  document.getElementsByClassName("versoes")[1].style.display = "none";
                  document.getElementsByClassName("versoes")[0].style.display = "flex";
                  iten--;
            }else if(iten == 2){
                  document.getElementsByClassName("versoes")[2].style.display = "none";
                  document.getElementsByClassName("versoes")[1].style.display = "flex";
                  iten--;
            }else if(iten == 3){
                  document.getElementsByClassName("versoes")[3].style.display = "none";
                  document.getElementsByClassName("versoes")[2].style.display = "flex";
                  iten--;
            }
}

  function prox(){
      if(iten == 0){
      document.getElementsByClassName("versoes")[0].style.display = "none";
      document.getElementsByClassName("versoes")[1].style.display = "flex";
      iten++
      }else if(iten == 1){
            document.getElementsByClassName("versoes")[1].style.display = "none";
            document.getElementsByClassName("versoes")[2].style.display = "flex";
            iten++
      }else if(iten == 2){
            document.getElementsByClassName("versoes")[2].style.display = "none";
            document.getElementsByClassName("versoes")[3].style.display = "flex";
            iten++
      }else if(iten == 3){
            document.getElementsByClassName("versoes")[3].style.display = "none";
            document.getElementsByClassName("versoes")[0].style.display = "flex";
            iten = 0
      }
  }