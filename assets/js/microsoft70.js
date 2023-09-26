var help = "<p> APP | FUNDACAO | ALTAIR | cd INDEX | cd MICROSOFT90 | cd MICROSOFT00 | cd MICROSOFT80 | cd MICROSOFT HELP</p>"
var app = "<p>A Microsoft na década de 70  iniciava seus trabalhos no desenvolvimento de Softwares para computadores pessoais (PC). Isso foi um grande marco no mundo do técnologia, pois despertou imenso interesse pelas pessoas nos ocmputadores pessoais, fazendo assim, sua popularidade e procura subirem muito. Em 1979 a Microsoft lançou o MS-DOS, sistema um operacional para computadores pessoais, que funcionava via CLI (Interface de Linha de Comando). <br>Algumas das principais contribuições da Microsoft para o desenvolvimento de softwares para computadores pessoais na década de 1970 incluem: <br>&bull; O lançamento do BASIC, uma linguagem de programação que foi muito popular na época.<br>&bull; O lançamento do MS-DOS, um sistema operacional que se tornou o mais popular do mundo.<br>&bull; O desenvolvimento de outros softwares importantes, como o Word, o Excel e o PowerPoint.</p>"
var altair = "<p>O Altair 8800 foi um computador pessoal lançado em 1975 pela Micro Instrumentation Telemetry Systems (MITS). O Altair foi um dos primeiros computadores pessoais a ser vendido como um kit, o que o tornou acessível a um público mais amplo. Ele foi um computador importante na história dos computadores pessoais. Ele ajudou a popularizar a ideia de um computador pessoal acessível e abriu caminho para o desenvolvimento de computadores pessoais mais avançados. A Microsoft também desempenhou um papel importante no desenvolvimento do Altair, lançando o Altair BASIC, que foi um dos primeiros softwares para computadores pessoais.</p>"
var fundacao = "<p>Paul Allen e <a id='link' href='Bill Gates.html'>Bill Gates</a> viram um anúncio no jornal sobre um computador pessoal chamado Altair, da MITS, que precisava de um sistema operacional, então, na década de 1970, a Microsoft, fundada por <a id='link' href='Bill Gates.html'>Bill Gates</a> e Paul Allen, deu seus primeiros passos no mundo do desenvolvimento de aplicativos. Inicialmente, a empresa concentrou seus esforços na criação de linguagens de programação, como o Altair BASIC, que foi um dos primeiros produtos da Microsoft. Este interpretador BASIC permitiu que os entusiastas da computação da época escrevessem programas para o Altair 8800, um dos primeiros computadores pessoais disponíveis.</p>"
var resposta = `<label for="comando">C:&#92;></label>
<input type="text" name="comando" id="comando" onkeyup="verificarEnter(event)">`
var index = "<p>Clique <a href='index.html'><strong> AQUI</strong></a> para voltar ao início</p>"
var microsoft80 = "<p>Clique <a href='microsoft80.html'><strong> AQUI</strong></a> para ir a 1980</p>"
var microsoft90 = "<p>Clique <a href='microsoft90.html'><strong> AQUI</strong></a> para ir a 1990</p>"
var microsoft00 = "<p>Clique <a href='microsoft00.html'><strong> AQUI</strong></a> para ir a 2000</p>"
var tudo = `            <p>Starting MS-DOS...<br><br><br>
HIMEM is testing extended memory...done <br><br>
C:&#92;>C:&#92;DOS&#92;SMARTDRV.EXE /X <br><br>
</p>
<pre style="color: #fff;">
##   ##   ####             ####      ####     ####
### ###  ##  ##            ## ##    ##  ##   ##  ##
#######  ##                ##  ##   ##  ##   ##
## # ##   ####    ######   ##  ##   ##  ##    ####
##   ##      ##            ##  ##   ##  ##       ##
##   ##  ##  ##            ## ##    ##  ##   ##  ##
##   ##   ####             ####      ####     #### <br>
</pre>
<p>
MODE prepare code page function completed <br> <br>
Type HELP for command list
</p>
` 

function verificarEnter(event) {
    if (event.key === "Enter") {
        var valorInput = document.getElementById("comando").value;
        var valorDigitado = "<p>C:&#92;>" + valorInput + "</p>";
        document.getElementById("comando").value = "";
        if (valorInput == "HELP") {
            document.getElementsByTagName("main")[0].innerHTML = tudo + valorDigitado + help + resposta;
            tudo = tudo + valorDigitado + help;
        } else if (valorInput == "APP") {
            document.getElementsByTagName("main")[0].innerHTML = tudo + valorDigitado + app + resposta;
            tudo = tudo + valorDigitado + app;
        } else if (valorInput == "ALTAIR") {
            document.getElementsByTagName("main")[0].innerHTML = tudo + valorDigitado + altair + resposta;
            tudo = tudo + valorDigitado + altair;
        } else if (valorInput == "FUNDACAO") {
            document.getElementsByTagName("main")[0].innerHTML = tudo + valorDigitado + fundacao + resposta;
            tudo = tudo + valorDigitado + fundacao;
        } else if (valorInput == "cd INDEX") {
            document.getElementsByTagName("main")[0].innerHTML = tudo + valorDigitado + index + resposta;
            tudo = tudo + valorDigitado + index;
        } else if (valorInput == "cd MICROSOFT80") {
            document.getElementsByTagName("main")[0].innerHTML = tudo + valorDigitado + microsoft80 + resposta;
            tudo = tudo + valorDigitado + microsoft80;
        } else if (valorInput == "cd MICROSOFT90") {
            document.getElementsByTagName("main")[0].innerHTML = tudo + valorDigitado + microsoft90 + resposta;
            tudo = tudo + valorDigitado + microsoft90;
        } else if (valorInput == "cd MICROSOFT00") {
            document.getElementsByTagName("main")[0].innerHTML = tudo + valorDigitado + microsoft00 + resposta;
            tudo = tudo + valorDigitado + microsoft00;
        } else {
            valorInput = '<p>"' + valorInput +  '" command not found <br> Type HELP for command list</p>'
            document.getElementsByTagName("main")[0].innerHTML = tudo + valorInput + resposta;
            tudo = tudo + valorInput;
        }
    
    }
}