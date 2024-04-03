let textoDecof;

function ValidarDatos(boton) {
  textoDecof = document.getElementById("textoEncript").value;
  if (textoDecof == "") {
    if (window.matchMedia("min-width: 1024px")) {
      document.getElementById("svgDecodificar").style.display = "block";
    }
    document.getElementById("tituloDecodificar").style.display = "block";
    document.getElementById("parrafoDecodificar").style.display = "block";
    document.getElementById("textoACopiar").style.display = "none";
    document.getElementById("botonCopiar").style.display = "none";
    document.getElementById("botonTranspasar").style.display = "none";

  } else {
    document.getElementById("tituloDecodificar").style.display = "none";
    document.getElementById("parrafoDecodificar").style.display = "none";
    document.getElementById("svgDecodificar").style.display = "none";

    if (boton == "botonEncriptar") {
      Encriptar();
    } else {
      Desencriptar();
    }
  }
}

function Encriptar() {
    textoDecof = textoDecof.replace("e", "enter");
    textoDecof = textoDecof.replace("i", "imes");
    textoDecof = textoDecof.replace("a", "ai");
    textoDecof = textoDecof.replace("o", "ober");
    textoDecof = textoDecof.replace("u", "ufat");

    document.getElementById("textoACopiar").textContent = textoDecof;
    document.getElementById("textoACopiar").style.display = "block";
    document.getElementById("botonCopiar").style.display = "inline";
    document.getElementById("botonTranspasar").style.display = "inline";

  }

  function Desencriptar() {
    textoDecof = textoDecof.replace("ufat", "u");
    textoDecof = textoDecof.replace("ober", "o");
    textoDecof = textoDecof.replace("ai", "a");
    textoDecof = textoDecof.replace("imes", "i");
    textoDecof = textoDecof.replace("enter", "e");

    document.getElementById("textoACopiar").textContent = textoDecof;
    document.getElementById("textoACopiar").style.display = "block";
    document.getElementById("botonCopiar").style.display = "inline";
  }

  function Copiar(){
    var content = document.getElementById('textoACopiar').innerHTML;

    navigator.clipboard.writeText(content)
      .then(() => {console.log('Text copied to clipboard...')})
      .catch(err => {
        console.log('Something went wrong', err);
      })

  }

  function Transpasar() {
    document.getElementById("textoEncript").value = textoDecof;
  }