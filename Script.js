function copy() {
    var salida = document.getElementsByName("Salida")[0];
    salida.select();
    salida.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado al portapapeles.");
}

function limpia() {
    document.getElementsByName("Entrada")[0].value = "";
    document.getElementsByName("Salida")[0].value = "";
}

// Obtener referencias a los elementos de las cajas de entrada y salida
const cajaEntrada = document.querySelector('textarea[name="Entrada"]');
const cajaSalida = document.querySelector('textarea[name="Salida"]');

// Función para encriptar el texto
function cifra() {
  const llaves = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  const textoEntrada = cajaEntrada.value;
  const textoEncriptado = textoEntrada.replace(/[aeiou]/g, function (match) {
    return llaves[match];
  });

  cajaSalida.value = textoEncriptado;
  imagen.src = "cerrado.png";
}

// Función para desencriptar el texto
function descifra() {
  const llaves = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  const textoEncriptado = cajaEntrada.value;
  const textoDesencriptado = textoEncriptado.replace(/(enter|imes|ai|ober|ufat)/g, function (match) {
    return llaves[match];
  });

  cajaSalida.value = textoDesencriptado;
  imagen.src = "Abierto.png";
}

function pega() {
    if (navigator.clipboard && navigator.clipboard.readText) {
      navigator.clipboard.readText().then(function (texto) {
        const cajaTexto = document.querySelector('textarea[name="Entrada"]');
        cajaTexto.value = texto;
      }).catch(function (error) {
        console.error('Error al leer el portapapeles:', error);
      });
    } else {
      console.warn('El navegador no es compatible con la función de lectura del portapapeles.');
    }
  }
  