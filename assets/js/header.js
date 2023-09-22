cabecalho = document.getElementsByTagName("header")[0];
        function header(){
            cabecalho.style.display = "flex";
            document.getElementById("fakeheader").style.display = "none";
        }
        function desheader(){
            cabecalho.style.display = "none";
            document.getElementById("fakeheader").style.display = "flex";
        }